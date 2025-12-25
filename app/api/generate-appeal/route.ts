import { NextRequest } from "next/server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { BASE_SYSTEM_PROMPT, buildAppealPrompt } from "../../../lib/prompts";

export const runtime = "edge";

interface ClientMessage {
  role: string;
  content: string;
}

export async function POST(req: NextRequest) {
  const { messages = [] }: { messages: ClientMessage[] } = await req.json();
  const latest = messages[messages.length - 1];

  if (!latest?.content) {
    return new Response("Missing request content", { status: 400 });
  }

  let payload: {
    sellerName: string;
    asin: string;
    violationType: string;
    rootCause: string;
  };

  try {
    payload = JSON.parse(latest.content);
  } catch {
    return new Response("Unable to parse payload", { status: 400 });
  }

  const modelId = process.env.OPENAI_MODEL ?? "gpt-4o";

  const result = await streamText({
    model: openai(modelId) as any,
    system: BASE_SYSTEM_PROMPT,
    temperature: 0.3,
    messages: [
      {
        role: "user",
        content: buildAppealPrompt({
          sellerName: payload.sellerName,
          asin: payload.asin,
          violationType: payload.violationType,
          rootCause: payload.rootCause
        })
      }
    ]
  });

  return result.toAIStreamResponse();
}
