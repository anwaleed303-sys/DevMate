import { NextRequest, NextResponse } from "next/server";
import { groqAPI } from "../../../lib/api/grok";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, language } = body;

    if (!code || !language) {
      return NextResponse.json(
        { error: "Code and language are required" },
        { status: 400 }
      );
    }

    const insights = await groqAPI.analyzeCode(code, language);

    return NextResponse.json({
      insights,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Code Analysis API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to analyze code" },
      { status: 500 }
    );
  }
}
