import {
  GROQ_MODELS,
  DEFAULT_MODEL,
  GROQ_API_URL,
} from "../../config/constants";
import type { GroqMessage, GroqResponse } from "../../types";

export class GroqAPI {
  private apiKey: string;
  private baseURL: string;
  private currentModelIndex: number = 0;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_LLM_API_KEY || "";
    this.baseURL = GROQ_API_URL;

    if (!this.apiKey) {
      console.warn(
        "⚠️ GROQ API key not found. Please set NEXT_PUBLIC_LLM_API_KEY in your .env.local file"
      );
    }
  }

  private async makeRequest(
    messages: GroqMessage[],
    options: {
      temperature?: number;
      maxTokens?: number;
      stream?: boolean;
    } = {}
  ): Promise<string> {
    const model = GROQ_MODELS[this.currentModelIndex];

    try {
      const response = await fetch(this.baseURL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 2048,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        // If rate limited or model unavailable, try next model
        if (response.status === 429 || response.status === 503) {
          if (this.currentModelIndex < GROQ_MODELS.length - 1) {
            console.log(`⚠️ Model ${model} unavailable, trying next model...`);
            this.currentModelIndex++;
            return this.makeRequest(messages, options);
          }
        }

        throw new Error(
          errorData.error?.message || `API request failed: ${response.status}`
        );
      }

      const data: GroqResponse = await response.json();

      // Reset model index on successful request
      this.currentModelIndex = 0;

      return data.choices[0]?.message?.content || "";
    } catch (error: any) {
      console.error("Groq API Error:", error);
      throw new Error(error.message || "Failed to communicate with AI service");
    }
  }

  async chat(
    userMessage: string,
    conversationHistory: GroqMessage[] = []
  ): Promise<string> {
    const messages: GroqMessage[] = [
      ...conversationHistory,
      { role: "user", content: userMessage },
    ];

    return this.makeRequest(messages);
  }

  async analyzeCode(code: string, language: string): Promise<any> {
    const messages: GroqMessage[] = [
      {
        role: "system",
        content: `You are a code analysis expert. Analyze the provided ${language} code and return ONLY a valid JSON object (no markdown, no code blocks) with this exact structure:
{
  "complexity": {"level": "Low|Moderate|High", "score": 0-100},
  "performance": {"boost": "percentage or description"},
  "function": "main function name or 'Multiple functions'",
  "purpose": "brief description of what the code does",
  "potentialIssues": ["issue1", "issue2"],
  "refactorSuggestions": ["suggestion1", "suggestion2"],
  "dependencies": ["dependency1", "dependency2"]
}`,
      },
      {
        role: "user",
        content: `Analyze this ${language} code:\n\n${code}`,
      },
    ];

    const response = await this.makeRequest(messages, { temperature: 0.3 });

    try {
      // Clean response - remove markdown code blocks if present
      const cleanedResponse = response
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      return JSON.parse(cleanedResponse);
    } catch (error) {
      console.error("Failed to parse analysis response:", response);
      // Return default structure if parsing fails
      return {
        complexity: { level: "Moderate", score: 50 },
        performance: { boost: "N/A" },
        function: "Unknown",
        purpose: "Code analysis failed",
        potentialIssues: ["Unable to analyze"],
        refactorSuggestions: [],
        dependencies: [],
      };
    }
  }

  async generateSuggestion(
    code: string,
    language: string,
    context?: string
  ): Promise<any> {
    const messages: GroqMessage[] = [
      {
        role: "system",
        content: `You are a code optimization expert. Analyze the code and suggest ONE specific improvement. Return ONLY a valid JSON object (no markdown) with:
{
  "type": "optimization|refactor|bug-fix|improvement",
  "title": "brief title (max 50 chars)",
  "description": "detailed explanation (max 200 chars)",
  "code": "improved code snippet"
}`,
      },
      {
        role: "user",
        content: `Suggest an improvement for this ${language} code${
          context ? ` (context: ${context})` : ""
        }:\n\n${code}`,
      },
    ];

    const response = await this.makeRequest(messages, { temperature: 0.5 });

    try {
      const cleanedResponse = response
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim();

      return JSON.parse(cleanedResponse);
    } catch (error) {
      console.error("Failed to parse suggestion response:", response);
      return null;
    }
  }

  async refactorCode(
    code: string,
    language: string,
    instructions?: string
  ): Promise<string> {
    const messages: GroqMessage[] = [
      {
        role: "system",
        content:
          "You are a code refactoring expert. Improve code for better readability, performance, and maintainability. Return ONLY the refactored code, no explanations or markdown.",
      },
      {
        role: "user",
        content: `Refactor this ${language} code${
          instructions ? ` with these requirements: ${instructions}` : ""
        }:\n\n${code}`,
      },
    ];

    const response = await this.makeRequest(messages, { temperature: 0.4 });

    // Remove code block markers if present
    return response.replace(/```[\w]*\n?/g, "").trim();
  }
}

export const groqAPI = new GroqAPI();
