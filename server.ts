import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Server-side Gemini initialization
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

// API Health Check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Interaktiv AI Yordamchi - Chat API
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, message } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: "GEMINI_API_KEY sozlanmagan. Iltimos, server muhitida API kaliti mavjudligini tekshiring.",
      });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "Sun'iy intellekt xizmatiga ulanib bo'lmadi.",
      });
    }

    // Build chat content history
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

    // Fast and reliable: Try gemini-3.1-flash-lite, fallback to gemini-3.8-flash if needed
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
      console.warn('gemini-3.1-flash-lite error, attempting gemini-3.8-flash:', primaryErr?.message);
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

    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini Chat API Error:', error);
    const errorMessage =
      error?.message || "Sun'iy intellekt serverida kutilmagan xatolik yuz berdi.";
    return res.status(500).json({
      error: `Kechirasiz, javob olishda xatolik yuz berdi: ${errorMessage}`,
    });
  }
});

// Start server with Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[AI Future] Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[AI Future] Failed to start server:', err);
});
