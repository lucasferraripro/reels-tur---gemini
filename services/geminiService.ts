
import { GoogleGenAI, Modality } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Using a placeholder. Please set your API key for the app to function.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "YOUR_API_KEY_HERE" });

export const generateScript = async (destination: string, audience: string, tone: string, companyName: string): Promise<{ title: string; script: string; caption: string; }> => {
  const prompt = `
    gere um roteiro curto (30–60s) BASEADO NO MÉTODO AIDA, sobre o destino ${destination}, para o público ${audience}, com tom ${tone}, para a empresa ${companyName}. Use a estrutura: gancho + descrição + CTA para WhatsApp ou "fale conosco".
    Retorne também uma legenda curta para o instagram com hashtags e emojis e um título de vídeo.
    
    Use ganchos como: “A prova está aqui, esta é a melhor forma de se apaixonar por ${destination}…”, “Poucas pessoas sabem mas…”, “A maior mentira sobre…”, “Eu vou provar para você em 1 minuto…”, “Você sabia que…”
    
    O resultado deve ser um objeto JSON com as chaves "title", "script" e "caption". O script não deve passar de 500 caracteres.
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
    });
    const text = response.text.trim();
    // Clean potential markdown code block fences
    const cleanedJson = text.replace(/^```json\s*|```\s*$/g, '');
    return JSON.parse(cleanedJson);
  } catch (error) {
    console.error("Error generating script:", error);
    throw new Error("Não foi possível gerar o roteiro. Tente novamente.");
  }
};

export const generateSpeech = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Diga com entusiasmo: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Kore' },
              },
          },
        },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
        throw new Error("No audio data returned from API.");
    }
    return base64Audio;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw new Error("Não foi possível gerar o áudio. Tente novamente.");
  }
};


export const editImage = async (base64ImageData: string, mimeType: string, prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: {
                            data: base64ImageData,
                            mimeType: mimeType,
                        },
                    },
                    {
                        text: prompt,
                    },
                ],
            },
            config: {
                responseModalities: [Modality.IMAGE],
            },
        });

        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                return part.inlineData.data;
            }
        }
        throw new Error("Nenhuma imagem foi gerada. Tente um prompt diferente.");

    } catch (error) {
        console.error("Error editing image:", error);
        throw new Error("Falha ao editar a imagem. Verifique o prompt e tente novamente.");
    }
};

// Helper to convert file to base64
export const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = (reader.result as string).split(',')[1];
            resolve(result);
        };
        reader.onerror = (error) => reject(error);
    });
};
