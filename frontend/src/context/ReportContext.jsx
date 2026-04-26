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
      // 1. Create the Case
      const caseData = {
        title: `Report: ${reportData.category || 'General'}`,
        description: reportData.description,
        isUrgent: reportData.isUrgent,
        category: reportData.category,
        incidentDate: reportData.date,
        location: reportData.location,
        identityType: reportData.identity
      };

      const caseResponse = await createCase(caseData);
      const caseId = caseResponse.id || caseResponse._id;

      if (!caseId) {
        throw new Error("Failed to retrieve case ID from response");
      }

      // 2. Handle files and Create Complaint
      // Use FormData for multipart/form-data support
      const formData = new FormData();
      formData.append('caseId', caseId);
      formData.append('content', reportData.description);
      
      reportData.files.forEach((file) => {
        formData.append('attachments', file);
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
