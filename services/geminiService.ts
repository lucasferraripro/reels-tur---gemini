import { GoogleGenAI, Modality, Type } from "@google/genai";

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

export const generateCampaign = async (goal: string, destination: string, audience: string, companyName: string): Promise<string> => {
      const prompt = `
        Crie uma campanha de marketing digital estratégica para a agência de viagens "${companyName}".

        **Objetivo da Campanha:** ${goal} (Foco em ${goal === 'Topo de Funil' ? 'atrair e engajar um novo público' : 'converter leads em clientes'}).
        **Destino Principal:** ${destination}
        **Público-Alvo:** ${audience}

        Estruture a resposta em Markdown com as seguintes seções, usando emojis para deixar mais visual:
        
        ### 🎯 Conceito da Campanha
        **Título:** [Um título criativo e chamativo]
        **Slogan:** [Um slogan curto e memorável]

        ### 💡 Estratégia de Conteúdo
        **Instagram Reels/TikTok (3 ideias):**
        1.  **Ideia 1:** [Descrição de um vídeo curto]
        2.  **Ideia 2:** [Descrição de outro vídeo curto]
        3.  **Ideia 3:** [Descrição de um terceiro vídeo curto]
        **Instagram Stories (2 ideias):**
        1.  **Enquete/Quiz:** [Ideia de enquete ou quiz interativo]
        2.  **Caixa de Perguntas:** [Ideia para uma sessão de "Pergunte-me qualquer coisa"]

        ### ✍️ Sugestões de Anúncios (Copy)
        Crie 2 exemplos de texto para anúncios pagos (Facebook/Instagram Ads), com um CTA claro.
        **Anúncio 1 (${goal}):**
        > [Texto do anúncio 1]
        
        **Anúncio 2 (${goal}):**
        > [Texto do anúncio 2]

        ### 👥 Sugestões de Segmentação
        *   **Interesses:** [Lista de 3-5 interesses para segmentar]
        *   **Comportamentos:** [Lista de 2-3 comportamentos de compra ou viagem]
      `;
      try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: prompt,
        });
        return response.text.trim();
      } catch (error) {
        console.error("Error generating campaign:", error);
        throw new Error("Não foi possível gerar a campanha. Tente novamente.");
      }
};

export const generateContentFromPdf = async (pdfBase64: string, mimeType: string): Promise<{ title: string; script: string; caption: string; destination: string; audience: string; }> => {
  const prompt = `
    Você é um especialista em marketing para agências de viagem. Analise o PDF de um pacote de viagem em anexo.
    Com base nas informações do PDF, extraia o destino principal e o público-alvo sugerido.
    Depois, crie um conteúdo para um vídeo curto (Reel) para Instagram.
    Sua resposta DEVE ser um objeto JSON válido com a seguinte estrutura e chaves: "title", "script", "caption", "destination", "audience".

    - "destination": O nome do local de destino principal.
    - "audience": Uma breve descrição do público-alvo ideal para este pacote (ex: "Casais em lua de mel", "Famílias com crianças").
    - "title": Um título chamativo para o vídeo.
    - "script": Um roteiro de 30-60 segundos usando o método AIDA (Atenção, Interesse, Desejo, Ação). O roteiro deve ser cativante e terminar com uma chamada para ação clara. O roteiro não deve passar de 500 caracteres.
    - "caption": Uma legenda para o post do Instagram, incluindo 3-5 hashtags relevantes e emojis.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: {
        parts: [
          { text: prompt },
          {
            inlineData: {
              data: pdfBase64,
              mimeType: mimeType,
            },
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                destination: { type: Type.STRING },
                audience: { type: Type.STRING },
                title: { type: Type.STRING },
                script: { type: Type.STRING },
                caption: { type: Type.STRING },
            },
            required: ["destination", "audience", "title", "script", "caption"],
        }
      },
    });
    const text = response.text.trim();
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating content from PDF:", error);
    throw new Error("Não foi possível processar o PDF. Verifique o arquivo e tente novamente.");
  }
};

export const analyzeSpreadsheetData = async (csvData: string, question: string): Promise<string> => {
  const prompt = `
    Você é um analista de dados e negócios sênior, especialista em planilhas de gestão para agências de viagem.
    Sua tarefa é analisar os dados em formato CSV fornecidos abaixo e responder à pergunta do usuário de forma clara, direta e em português.

    **Instruções:**
    1. Analise os dados CSV com atenção. O separador de colunas é a vírgula (,).
    2. Responda APENAS à pergunta feita pelo usuário com base nos dados.
    3. Se os dados não permitirem responder à pergunta, informe educadamente que a informação não está disponível na planilha.
    4. Se precisar fazer cálculos (somas, médias, etc.), faça-os e apresente o resultado final.
    5. Formate a resposta de maneira amigável. Use negrito para destacar valores importantes e resultados.

    **Dados CSV:**
    ---
    ${csvData}
    ---

    **Pergunta do Usuário:**
    "${question}"
  `;
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: prompt,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error analyzing spreadsheet:", error);
    throw new Error("Não foi possível analisar a planilha. Tente novamente.");
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

// Helper to convert file to text
export const fileToText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            resolve(reader.result as string);
        };
        reader.onerror = (error) => reject(error);
    });
};