// // List of available Groq models (in order of preference)
// export const GROQ_MODELS = [
//   "llama-3.3-70b-versatile",
//   "llama-3.1-70b-versatile",
//   "llama-3.1-8b-instant",
//   "mixtral-8x7b-32768",
//   "gemma2-9b-it",
// ];

// export const DEFAULT_MODEL = GROQ_MODELS[0];

// export const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

// export const PROGRAMMING_LANGUAGES = [
//   { id: "javascript", name: "JavaScript", extension: ".js" },
//   { id: "typescript", name: "TypeScript", extension: ".ts" },
//   { id: "python", name: "Python", extension: ".py" },
//   { id: "java", name: "Java", extension: ".java" },
//   { id: "cpp", name: "C++", extension: ".cpp" },
//   { id: "csharp", name: "C#", extension: ".cs" },
//   { id: "go", name: "Go", extension: ".go" },
//   { id: "rust", name: "Rust", extension: ".rs" },
//   { id: "php", name: "PHP", extension: ".php" },
//   { id: "ruby", name: "Ruby", extension: ".rb" },
// ];

// export const COMPLEXITY_THRESHOLDS = {
//   low: 10,
//   moderate: 20,
//   high: Infinity,
// };

// export const SYSTEM_PROMPTS = {
//   chat: `You are DevMate, an expert AI coding assistant. Help developers with code-related questions, provide clear explanations, and suggest best practices. Be concise but thorough.`,

//   analyze: `You are a code analysis expert. Analyze the provided code and return a JSON object with:
// {
//   "complexity": {"level": "Low|Moderate|High", "score": 0-100},
//   "performance": {"boost": "percentage or description"},
//   "function": "main function name",
//   "purpose": "brief description",
//   "potentialIssues": ["issue1", "issue2"],
//   "refactorSuggestions": ["suggestion1"],
//   "dependencies": ["dep1"]
// }`,

//   suggest: `You are a code optimization expert. Analyze the code and suggest improvements. Return JSON:
// {
//   "type": "optimization|refactor|bug-fix",
//   "title": "brief title",
//   "description": "detailed explanation",
//   "code": "improved code"
// }`,

//   refactor: `You are a code refactoring expert. Improve the provided code for better readability, performance, and maintainability. Return only the refactored code with comments explaining major changes.`,
// };

// List of available Groq models (in order of preference)
export const GROQ_MODELS = [
  "llama-3.3-70b-versatile",
  "llama-3.1-70b-versatile",
  "llama-3.1-8b-instant",
  "mixtral-8x7b-32768",
  "gemma2-9b-it",
];

export const DEFAULT_MODEL = GROQ_MODELS[0];

export const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const PROGRAMMING_LANGUAGES = [
  { id: "javascript", name: "JavaScript", extension: ".js" },
  { id: "typescript", name: "TypeScript", extension: ".ts" },
  { id: "python", name: "Python", extension: ".py" },
  { id: "java", name: "Java", extension: ".java" },
  { id: "cpp", name: "C++", extension: ".cpp" },
  { id: "csharp", name: "C#", extension: ".cs" },
  { id: "go", name: "Go", extension: ".go" },
  { id: "rust", name: "Rust", extension: ".rs" },
  { id: "php", name: "PHP", extension: ".php" },
  { id: "ruby", name: "Ruby", extension: ".rb" },
];

export const COMPLEXITY_THRESHOLDS = {
  low: 10,
  moderate: 20,
  high: Infinity,
};

// ✅ REQUIRED FIX — Missing API_ENDPOINTS
export const API_ENDPOINTS = {
  CHAT: "/api/chat",
  ANALYZE: "/api/code-analyze",
  SUGGEST: "/api/code-suggest",
  REFACTOR: "/api/refactor",
};

export const SYSTEM_PROMPTS = {
  chat: `You are DevMate, an expert AI coding assistant. Help developers with code-related questions, provide clear explanations, and suggest best practices. Be concise but thorough.`,

  analyze: `You are a code analysis expert. Analyze the provided code and return a JSON object with:
{
  "complexity": {"level": "Low|Moderate|High", "score": 0-100},
  "performance": {"boost": "percentage or description"},
  "function": "main function name",
  "purpose": "brief description",
  "potentialIssues": ["issue1", "issue2"],
  "refactorSuggestions": ["suggestion1"],
  "dependencies": ["dep1"]
}`,

  suggest: `You are a code optimization expert. Analyze the code and suggest improvements. Return JSON:
{
  "type": "optimization|refactor|bug-fix",
  "title": "brief title",
  "description": "detailed explanation",
  "code": "improved code"
}`,

  refactor: `You are a code refactoring expert. Improve the provided code for better readability, performance, and maintainability. Return only the refactored code with comments explaining major changes.`,
};
