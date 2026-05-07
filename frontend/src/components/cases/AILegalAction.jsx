import React, { useState } from 'react';
import { Sparkles, FileText, Download, Copy, Check, AlertCircle, Loader2, Wand2 } from 'lucide-react';
import jsPDF from 'jspdf';
import * as api from '../../services/api';

const AILegalAction = ({ caseData, isAuthor, onDocumentGenerated }) => {
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showFullDoc, setShowFullDoc] = useState(false);

  const hasDocument = caseData.documentGenerated || caseData.legalDocument;
  const thresholdReached = caseData.complaintCount >= (caseData.threshold || 5);

  const handleGenerate = async () => {
    setGenerating(true);
    setError(null);
    try {
      const result = await api.generateDocument(caseData.id || caseData._id);
      if (result.success) {
        onDocumentGenerated(result.data);
      } else {
        setError(result.message || "Failed to generate document.");
      }
    } catch (err) {
      console.error("AI Generation Error:", err);
      setError(err.response?.data?.message || "Something went wrong with the AI service.");
    } finally {
      setGenerating(false);
    }
  };

  const handleCopy = () => {
    if (caseData.legalDocument) {
      navigator.clipboard.writeText(caseData.legalDocument);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxWidth = pageWidth - (margin * 2);
    
    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text("SOROSOKE LEGAL DRAFT", pageWidth / 2, 25, { align: "center" });
    
    // Sub-header / Date
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`DATE GENERATED: ${new Date().toLocaleDateString().toUpperCase()}`, margin, 35);
    
    // Divider
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.5);
    doc.line(margin, 40, pageWidth - margin, 40);
    
    // Body Content
    doc.setFontSize(12);
    doc.setTextColor(30, 41, 59); // slate-800
    
    let yPosition = 55;
    const lineHeight = 7;

    // Helper to render text with markdown-style bold support
    const renderMarkdownLine = (text, x, y) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      let currentX = x;

      parts.forEach(part => {
        if (part.startsWith('**') && part.endsWith('**')) {
          doc.setFont("helvetica", "bold");
          const boldText = part.slice(2, -2);
          doc.text(boldText, currentX, y);
          currentX += doc.getTextWidth(boldText);
        } else {
          doc.setFont("helvetica", "normal");
          doc.text(part, currentX, y);
          currentX += doc.getTextWidth(part);
        }
      });
    };

    // First, we need to wrap the text. 
    // To do this correctly with bold, we use a plain version for the wrap calculation
    const plainText = caseData.legalDocument.replace(/\*\*/g, '');
    const lines = doc.splitTextToSize(plainText, maxWidth);
    
    // Now we map back the bold markers to the wrapped lines
    // This is tricky, so a simpler approach for legal documents:
    // Split by actual newlines first to preserve document structure
    const paragraphs = caseData.legalDocument.split('\n');
    
    paragraphs.forEach(para => {
      // Wrap each paragraph
      const plainPara = para.replace(/\*\*/g, '');
      const wrappedLines = doc.splitTextToSize(plainPara, maxWidth);
      
      wrappedLines.forEach((line, index) => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }

        // We need to find the markdown version of this line
        // For simplicity and accuracy in legal drafts (which usually have short lines), 
        // we'll use a direct render if the line is short, or reconstruct bold markers.
        // Best approach: Parse the original paragraph for bold tokens and wrap manually.
        
        // Simpler fallback: If the original paragraph had bold, and this line contains that text, bold it.
        // Real-world fix: Legal drafts use bold for headings. We'll render the paragraph line by line.
        
        let lineWithMarkers = line;
        // Re-insert bold markers for common legal headings if they were stripped
        if (para.includes(`**${line}**`)) lineWithMarkers = `**${line}**`;
        else if (para.includes(`**${line}`)) lineWithMarkers = `**${line}`;
        else if (para.includes(`${line}**`)) lineWithMarkers = `${line}**`;

        renderMarkdownLine(lineWithMarkers, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 2; // Extra space between paragraphs
    });
    
    doc.save(`Legal_Draft_${caseData.title?.replace(/\s+/g, '_') || 'Case'}.pdf`);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 blur-3xl -z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-slate-900 leading-tight">AI Legal Assistance</h3>
            <p className="text-[12px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Powered by Llama 3.3</p>
          </div>
        </div>

        {!hasDocument ? (
          <div className="space-y-6">
            <p className="text-slate-500 text-[14px] leading-relaxed">
              Our AI analyzes your report and relevant Nigerian laws to generate a formal legal draft for escalation.
            </p>
            
            <div className="space-y-4">
              {isAuthor ? (
                <button 
                  onClick={handleGenerate}
                  disabled={generating}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-[15px] flex items-center justify-center gap-3 transition-all active:scale-95 hover:bg-slate-800 disabled:opacity-50 shadow-xl shadow-slate-900/10"
                >
                  {generating ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Drafting Legal Document...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} />
                      Generate Legal Draft
                    </>
                  )}
                </button>
              ) : (
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
                  <Clock size={24} className="text-slate-400 shrink-0" />
                  <div>
                    <p className="text-slate-600 text-[13px] font-bold mb-1">Awaiting Action</p>
                    <p className="text-slate-500 text-[12px] leading-relaxed">
                      Only the case reporter can initiate the AI legal drafting process.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
              <FileText size={24} className="text-indigo-600 shrink-0" />
              <div>
                <p className="text-indigo-900 text-[14px] font-bold">Draft Document Ready</p>
                <p className="text-indigo-700/70 text-[12px]">Legal citations and demands prepared.</p>
              </div>
            </div>

            <div className={`relative bg-slate-50 rounded-2xl p-5 border border-slate-100 overflow-hidden transition-all duration-500 ${showFullDoc ? 'max-h-[1000px]' : 'max-h-[160px]'}`}>
              <pre className="text-[13px] text-slate-600 font-mono whitespace-pre-wrap leading-relaxed">
                {caseData.legalDocument}
              </pre>
              {!showFullDoc && (
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent flex items-end justify-center pb-4">
                  <button 
                    onClick={() => setShowFullDoc(true)}
                    className="text-indigo-600 font-bold text-[13px] hover:underline"
                  >
                    Read Full Draft
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleDownload}
                className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/5"
              >
                <Download size={16} />
                Download
              </button>
              <button 
                onClick={handleCopy}
                className="flex-1 border border-slate-200 text-slate-700 py-3.5 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-teal-600" />
                    <span className="text-teal-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Text
                  </>
                )}
              </button>
            </div>
            
            {showFullDoc && (
              <button 
                onClick={() => setShowFullDoc(false)}
                className="w-full text-slate-400 font-medium text-[12px] hover:text-slate-600"
              >
                Show Less
              </button>
            )}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-600">
            <AlertCircle size={16} />
            <p className="text-[12px] font-medium">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AILegalAction;
