const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


   export const generateScript = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    {
                        text: `write two different scripts for 30 second video on Topic :(topic),\n* Give me response in JSON format and follow the schema\n{\nscripts:[\n{\ncontent:""\n}\n]\n}`,
                    },
                ],
            },
            {
                role: "model",
                parts: [
                    {
                        text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"\"\n    }\n  ]\n}```",
                    },
                ],
            }
        ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());



