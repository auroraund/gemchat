import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "Explain AI in an easy-to-understand way without using technical jargon.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
}

run();
