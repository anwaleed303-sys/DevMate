import { NextRequest, NextResponse } from "next/server";
import { groqAPI } from "../../../lib/api/grok";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { code, language, instructions } = body;

    if (!code || !language) {
      return NextResponse.json(
        { error: "Code and language are required" },
        { status: 400 }
      );
    }

    const refactoredCode = await groqAPI.refactorCode(
      code,
      language,
      instructions
    );

    return NextResponse.json({
      refactoredCode,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Refactor API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to refactor code" },
      { status: 500 }
    );
  }
}
