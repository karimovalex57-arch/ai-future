import type { IncomingMessage, ServerResponse } from 'http';
import { GoogleGenAI } from '@google/genai';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

interface ExtendedResponse extends ServerResponse {
  status: (statusCode: number) => ExtendedResponse;
  json: (data: any) => void;
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

export default async function handler(req: ExtendedRequest, res: ExtendedResponse) {
  // Enable CORS if needed
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Faqat POST so‘rovlari qabul qilinadi.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        // ignore
      }
    }

    const { messages, message } = body || {};

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "GEMINI_API_KEY sozlanmagan. Iltimos, Vercel Environment Variables bo‘limida GEMINI_API_KEY qo‘shilganligini tekshiring.",
      });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "Sun'iy intellekt xizmatiga ulanib bo'lmadi.",
      });
    }

    let contents: any;
    if (Array.isArray(messages) && messages.length > 0) {
      contents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
        parts: [{ text: String(m.content || '') }],
      }));
    } else if (message && typeof message === 'string') {
      contents = message;
    } else {
      return res.status(400).json({
        error: 'Iltimos, xabar matnini kiriting.',
      });
    }

    const systemInstruction = `Siz "AI Future — Sun’iy Intellekt Olami" platformasining rasmiy va yuqori intellektli virtual yordamchisisiz.
Asosiy vazifalaringiz:
1. Foydalanuvchilar bilan faqat va faqat o‘zbek tilida (zamonaviy lotin yozuvida), samimiy, aniq, muloyim va tushunarli tarzda muloqot qilish.
2. Sun’iy intellekt tushunchalari, uning tarixi, kelajak istiqbollari, mashinaviy o‘rganish, chuqur neyron tarmoqlari, generativ AI haqidagi savollarga batafsil javob berish.
3. Mashhur AI vositalari (ChatGPT, Google Gemini, Claude, Canva AI, Gamma, GitHub Copilot va boshqalar) bilan ishlash, promptlar yozish madaniyati va dasturlash bo‘yicha maslahatlar berish.
4. Javoblaringizni o‘qish oson bo‘lishi uchun chiroyli paragraflar, lozim bo‘lsa punktlar (ro‘yxatlar) va qalin shriftlar bilan tartibli bayon eting.`;

    let reply: string | undefined;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
      reply = response.text;
    } catch (primaryErr: any) {
      console.warn('Vercel api fallback to gemini-3.8-flash:', primaryErr?.message);
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
      reply = fallbackResponse.text;
    }

    if (!reply) {
      return res.status(500).json({
        error: "AI modelidan javob olinmadi. Iltimos qaytadan urinib ko'ring.",
      });
    }

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Vercel API error:', error);
    const errorMessage = error?.message || "Sun'iy intellekt serverida kutilmagan xatolik yuz berdi.";
    return res.status(500).json({
      error: `Kechirasiz, javob olishda xatolik yuz berdi: ${errorMessage}`,
    });
  }
}
