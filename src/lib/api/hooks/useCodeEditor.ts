// import { useState, useCallback } from "react";
// import { CodeSummary } from "../../../types";
// import apiClient from "../../../lib/api/client";
// import { API_ENDPOINTS } from "../../../config/constants";

// interface UseCodeAnalysisReturn {
//   summary: CodeSummary | null;
//   isAnalyzing: boolean;
//   error: string | null;
//   analyzeCode: (code: string, language: string) => Promise<void>;
//   clearSummary: () => void;
// }

// export const useCodeAnalysis = (): UseCodeAnalysisReturn => {
//   const [summary, setSummary] = useState<CodeSummary | null>(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const analyzeCode = useCallback(async (code: string, language: string) => {
//     if (!code.trim()) {
//       setError("Please provide code to analyze");
//       return;
//     }

//     setIsAnalyzing(true);
//     setError(null);

//     try {
//       const response = await apiClient.post<CodeSummary>(
//         API_ENDPOINTS.CODE_SUMMARY,
//         {
//           code,
//           language,
//         }
//       );

//       setSummary(response);
//     } catch (err: any) {
//       setError(err.message || "Failed to analyze code");
//       console.error("Code analysis error:", err);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   }, []);

//   const clearSummary = useCallback(() => {
//     setSummary(null);
//     setError(null);
//   }, []);

//   return {
//     summary,
//     isAnalyzing,
//     error,
//     analyzeCode,
//     clearSummary,
//   };
// };

// export default useCodeAnalysis;
