import React, { createContext, useState, useContext } from 'react';
import { createCase, createComplaint } from '../services/api';

const ReportContext = createContext();

export const useReport = () => {
  return useContext(ReportContext);
};

export const ReportProvider = ({ children }) => {
  const [reportData, setReportData] = useState({
    isUrgent: false,
    description: '',
    category: '',
    date: '',
    location: '',
    identity: 'identified',
    files: []
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateReportData = (stepData) => {
    setReportData((prev) => ({
      ...prev,
      ...stepData
    }));
  };

  const submitReport = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Create the Case first (this makes it show up in the Cases Explorer)
      const caseData = {
        title: `Report: ${reportData.category.replace('_', ' ') || 'Incident'}`,
        description: reportData.description,
        category: reportData.category,
        incidentDate: reportData.date,
        location: reportData.location,
        isAnonymous: reportData.identity === 'anonymous'
      };

      const caseResponse = await createCase(caseData);
      const caseId = caseResponse.id || caseResponse._id || 
                    (caseResponse.case && (caseResponse.case.id || caseResponse.case._id)) ||
                    (caseResponse.data && (caseResponse.data.id || caseResponse.data._id || (caseResponse.data.case && (caseResponse.data.case.id || caseResponse.data.case._id))));

      if (!caseId) {
        throw new Error("Failed to retrieve case ID from response");
      }

      // 2. Add files/complaint to the newly created case
      // Use FormData for multipart/form-data support
      const formData = new FormData();
      
      // Map reportData to the structure specified by the user
      formData.append('caseId', caseId);
      formData.append('description', reportData.description);
      formData.append('category', reportData.category);
      formData.append('incidentDate', reportData.date);
      formData.append('location', reportData.location);
      formData.append('isAnonymous', reportData.identity === 'anonymous');

      // Append files if any
      if (reportData.files && reportData.files.length > 0) {
        reportData.files.forEach((file) => {
          formData.append('evidenceFiles', file);
        });
      }

      console.log("Submitting complaint with FormData:", {
        caseId,
        description: reportData.description,
        fileCount: reportData.files.length
      });

      await createComplaint(formData);

      setSuccess(true);
      // Clear data on success
      setReportData({
        isUrgent: false,
        description: '',
        category: '',
        date: '',
        location: '',
        identity: 'identified',
        files: []
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setError(err.response?.data?.message || err.message || "Something went wrong during submission.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetSuccess = () => setSuccess(false);

  const value = {
    reportData,
    updateReportData,
    submitReport,
    isLoading,
    error,
    success,
    resetSuccess
  };

  return (
    <ReportContext.Provider value={value}>
      {children}
    </ReportContext.Provider>
  );
};
