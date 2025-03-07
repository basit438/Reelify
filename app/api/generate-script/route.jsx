import { generateScript } from "@/app/config/AiModel";
import { NextResponse } from "next/server";

function getScriptPrompt(topic) {
  return `write two different scripts for a 30-second video on Topic: "${topic}". 
  Do not add scene description, do not add anything in braces. 
  Just return the content of the script in JSON format and follow this schema:
  {
    "scripts": [
      { "content": "" },
      { "content": "" }
    ]
  }`;
}

export async function POST(req) {
    try {
        const { topic } = await req.json();

        if (!topic) {
            return NextResponse.json({ error: "Topic is required" }, { status: 400 });
        }

        const PROMPT = getScriptPrompt(topic);
        const result = await generateScript.sendMessage(PROMPT);
        const response = await result?.response?.text();

        const parsedResponse = JSON.parse(response);
        return NextResponse.json(parsedResponse);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
