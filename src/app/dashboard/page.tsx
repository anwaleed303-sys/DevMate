// "use client";

// import { useState } from "react";
// import DashboardLayout from "../../components/dashboard/DashboardLayout";
// import ChatPanel from "../../components/dashboard/ChatPanel";
// import CodeEditorPanel from "../../components/dashboard/CodeEditorPanel";
// import InsightsPanel from "../../components/dashboard/InsightsPanel";
// import type { CodeInsights } from "../../types";

// export default function DashboardPage() {
//   const [code, setCode] = useState(`// Factorial Mutation
// function calculate_factorial(n){
//   if (n === 0) {
//     return 1;
//   } else {
//     def {
//       def calculate_factorial_optimized(n);
//     }
//   }
// }`);

//   const [language, setLanguage] = useState("javascript");
//   const [insights, setInsights] = useState<CodeInsights | null>(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const handleCodeChange = (newCode: string) => {
//     setCode(newCode);
//     setInsights(null); // Clear insights when code changes
//   };

//   const handleAnalyze = async () => {
//     setIsAnalyzing(true);
//     try {
//       const response = await fetch("/api/code-analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ code, language }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setInsights(data.insights);
//       }
//     } catch (error) {
//       console.error("Failed to analyze code:", error);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
//         {/* Chat Panel */}
//         <div className="lg:col-span-1 h-full">
//           <ChatPanel />
//         </div>

//         {/* Code Editor Panel */}
//         <div className="lg:col-span-1 h-full">
//           <CodeEditorPanel
//             code={code}
//             language={language}
//             onCodeChange={handleCodeChange}
//             onLanguageChange={setLanguage}
//             onAnalyze={handleAnalyze}
//           />
//         </div>

//         {/* Insights Panel */}
//         <div className="lg:col-span-1 h-full">
//           <InsightsPanel
//             insights={insights}
//             isAnalyzing={isAnalyzing}
//             onAnalyze={handleAnalyze}
//           />
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }

"use client";

import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ChatPanel from "../../components/dashboard/ChatPanel";
import CodeEditorPanel from "../../components/dashboard/CodeEditorPanel";
import InsightsPanel from "../../components/dashboard/InsightsPanel";
import type { CodeInsights } from "../../types";

export default function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard");
  const [code, setCode] = useState(`// Factorial Mutation
function calculate_factorial(n){
  if (n === 0) {
    return 1;
  } else {
    def {
      def calculate_factorial_optimized(n);
    }
  }
}`);

  const [language, setLanguage] = useState("javascript");
  const [insights, setInsights] = useState<CodeInsights | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setInsights(null);
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch("/api/code-analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      if (response.ok) {
        const data = await response.json();
        setInsights(data.insights);
      }
    } catch (error) {
      console.error("Failed to analyze code:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <DashboardLayout activeView={activeView} onViewChange={setActiveView}>
      <div className="h-full">
        {/* AI Chat Panel - Default View */}
        {activeView === "dashboard" && (
          <div className="h-full">
            <ChatPanel />
          </div>
        )}

        {/* Code Editor Panel */}
        {activeView === "code" && (
          <div className="h-full">
            <CodeEditorPanel
              code={code}
              language={language}
              onCodeChange={handleCodeChange}
              onLanguageChange={setLanguage}
              onAnalyze={handleAnalyze}
            />
          </div>
        )}

        {/* Insights Panel */}
        {activeView === "insights" && (
          <div className="h-full">
            <InsightsPanel
              insights={insights}
              isAnalyzing={isAnalyzing}
              onAnalyze={handleAnalyze}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
