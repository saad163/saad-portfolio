import { GoogleGenAI } from "@google/genai";
import { ImageSize } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Please set GEMINI_API_KEY in your .env file.");
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

// Chat with Gemini 1.5 Pro (High reasoning)
export const chatWithGeminiPro = async (message: string, history: any[] = []) => {
  const ai = getClient();

  try {
    // For debugging: list available models properly
    try {
      const models = [];
      const modelPager = await (ai.models as any).list();
      // If it's a pager, we might need to iterate
      console.log("Model pager:", modelPager);
    } catch (e) {
      console.error("List models error:", e);
    }

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      systemInstruction: {
        parts: [{ text: "You are an AI assistant for Muhammad Saad Hasan's portfolio. You are helpful, professional, and knowledgeable about software engineering, Python, Django, and AI/ML. Answer questions about Muhammad's skills or general tech queries." }]
      }
    } as any);

    return (response as any).text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Pro Error:", error);
    throw error;
  }
};

// Fast response with Gemini 1.5 Flash
export const chatWithGeminiFlashLite = async (message: string) => {
  const ai = getClient();

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [{ role: 'user', parts: [{ text: message }] }],
      systemInstruction: {
        parts: [{ text: "You are a fast, concise assistant for a developer portfolio." }]
      }
    } as any);

    return (response as any).text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Flash Error:", error);
    throw error;
  }
};

// Generate Image with Gemini (using Imagen 3 via Gemini API if supported, or just Gemini 2.0 Flash)
export const generateImageWithGemini = async (prompt: string, size: ImageSize) => {
  const ai = getClient();

  try {
    // Note: Image generation usually requires specific models like 'imagen-3'
    // For now, we'll try to use a standard multimodal model or fallback
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash', // Or 'imagen-3' if available
      contents: [{ parts: [{ text: `Generate an image of: ${prompt}` }] }],
    });

    // Handle image response if the SDK supports it directly
    // This is a placeholder since local demos often use mock images or specific Imagen APIs
    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    throw new Error("Image generation is not supported with the current model/quota.");
  } catch (error) {
    console.error("Image generation error:", error);
    throw error;
  }
};