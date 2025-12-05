import { NextRequest, NextResponse } from "next/server";
import { groqAPI } from "../../../lib/api/grok";
import { SYSTEM_PROMPTS } from "../../../config/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Add system prompt to conversation
    const messages = [
      { role: "system" as const, content: SYSTEM_PROMPTS.chat },
      ...conversationHistory,
    ];

    const response = await groqAPI.chat(message, messages);

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process chat request" },
      { status: 500 }
    );
  }
}
