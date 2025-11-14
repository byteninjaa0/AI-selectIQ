import { NextResponse } from "next/server";
import { FEEDBACK_PROMT } from "@/services/Constants";
import OpenAI from "openai";

export async function POST(req) {
  const { conversation } = await req.json();
  const FINAL_PROMPT = FEEDBACK_PROMT.replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );

  try {
    const client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: process.env.OPENROUTER_MODEL || "deepseek/deepseek-chat",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });

    return NextResponse.json(completion.choices[0].message);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
