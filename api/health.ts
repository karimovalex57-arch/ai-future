import type { IncomingMessage, ServerResponse } from 'http';

interface ExtendedResponse extends ServerResponse {
  status: (statusCode: number) => ExtendedResponse;
  json: (data: any) => void;
}

export default function handler(_req: IncomingMessage, res: ExtendedResponse) {
  res.status(200).json({
    status: 'ok',
    platform: 'vercel',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
}
