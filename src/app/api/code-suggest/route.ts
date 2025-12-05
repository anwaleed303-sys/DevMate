import { NextRequest, NextResponse } from "next/server";
import { groqAPI } from "../../../lib/api/grok";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, language, context } = body;

    if (!code || !language) {
      return NextResponse.json(
        { error: "Code and language are required" },
        { status: 400 }
      );
    }

    const suggestion = await groqAPI.generateSuggestion(
      code,
      language,
      context
    );

    if (!suggestion) {
      return NextResponse.json(
        { error: "Failed to generate suggestion" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      suggestion: {
        ...suggestion,
        id: Date.now().toString(),
        confidence: 0.85,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Code Suggestion API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate suggestion" },
      { status: 500 }
    );
  }
}
