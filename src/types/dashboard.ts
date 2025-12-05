export interface DashboardState {
  activePanel: "chat" | "editor" | "insights";
  isLoading: boolean;
  error: string | null;
}

export interface EditorState {
  code: string;
  language: string;
  fileName: string;
  isDirty: boolean;
}

export interface SuggestionState {
  currentSuggestion: any | null;
  isVisible: boolean;
  position: { line: number; column: number } | null;
}
