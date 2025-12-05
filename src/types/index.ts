// Message Types
export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  language?: string;
}

// Code Analysis Types
export interface CodeInsights {
  complexity: {
    level: "Low" | "Moderate" | "High";
    score: number;
  };
  performance: {
    boost: string;
  };
  function: string;
  purpose: string;
  potentialIssues: string[];
  refactorSuggestions: string[];
  dependencies: string[];
}

// Code Suggestion Types
export interface CodeSuggestion {
  id: string;
  type: "optimization" | "refactor" | "bug-fix" | "improvement";
  title: string;
  description: string;
  code: string;
  line?: number;
  confidence: number;
}

// Code File Types
export interface CodeFile {
  name: string;
  language: string;
  content: string;
  path?: string;
}

// Groq API Types
export interface GroqMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface GroqResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Dashboard State Types
export interface DashboardState {
  activePanel: "chat" | "editor" | "insights";
  isLoading: boolean;
  error: string | null;
}

// Editor State Types
export interface EditorState {
  code: string;
  language: string;
  fileName: string;
  isDirty: boolean;
}

// Suggestion State Types
export interface SuggestionState {
  currentSuggestion: CodeSuggestion | null;
  isVisible: boolean;
  position: { line: number; column: number } | null;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

// Chat API Response
export interface ChatResponse {
  message: string;
  timestamp: string;
}

// Analysis API Response
export interface AnalysisResponse {
  insights: CodeInsights;
  timestamp: string;
}

// Suggestion API Response
export interface SuggestionResponse {
  suggestion: CodeSuggestion;
  timestamp: string;
}

// Refactor API Response
export interface RefactorResponse {
  refactoredCode: string;
  timestamp: string;
}
