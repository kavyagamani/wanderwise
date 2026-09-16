import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

console.log("Gemini Key Loaded:", apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({
  model: "gemini-flash-latest",
});

    const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI service unavailable.";
  }
}