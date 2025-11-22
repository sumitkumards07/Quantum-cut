import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateVideoConcepts = async (niche: string, tone: string) => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return [
      "Gemini API Key Missing - Please configure to see real AI results.",
      "Concept 2: The Silent Narrative",
      "Concept 3: High Energy Glitch Edits"
    ];
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a world-class creative director for a high-end video editing agency.
      Generate 3 distinct, viral-worthy video editing concepts/hooks for a client in the "${niche}" niche with a "${tone}" tone.
      
      Keep them punchy, modern, and visually descriptive.
      Format the output as a simple JSON array of strings. Do not include markdown code blocks.
      Example: ["The Zoom-In Hook: Start with extreme close up...", "ASMR Style: Focus on sound design...", "Glitch Transition: Fast paced..."]
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return [];
    
    // Parse the JSON array
    const concepts = JSON.parse(text);
    return Array.isArray(concepts) ? concepts : [];

  } catch (error) {
    console.error("Error generating concepts:", error);
    return [
      "Error generating concepts. Please try again.",
      "Ensure your API key is valid.",
      "Check your network connection."
    ];
  }
};