
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFashionAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "Você é um consultor de beleza e visagista especialista do salão Zayn Griffe em Maputo. Seu tom é profissional, acolhedor e inspirador. Seu objetivo é ajudar o cliente a escolher um serviço de cabelo, barba ou estética e, no final, sempre encorajá-lo a entrar em contato com o salão via WhatsApp (+258 84 270 3205) para agendar um horário. Mantenha as respostas curtas e focadas em beleza e bem-estar de alta qualidade.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching fashion advice:", error);
    return "Desculpe, tive um pequeno problema. Por favor, fale diretamente com nossa equipe no WhatsApp para agendar seu horário!";
  }
};
