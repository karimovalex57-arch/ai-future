import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  Loader2, 
  AlertCircle, 
  RefreshCw, 
  Trash2, 
  Copy, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { ChatMessage } from '../types.ts';
import { CHAT_SUGGESTIONS } from '../data/aiData.ts';

export const AIChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Assalomu alaykum! Men AI Future platformasining virtual yordamchisiman. Sun’iy intellekt, mashhur AI vositalari (ChatGPT, Gemini, Claude, Gamma va boshqalar), ularning ishlash tamoyillari yoki dasturlash bo‘yicha istalgan savolingizni berishingiz mumkin. Sizga qanday yordam bera olaman?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setErrorMessage(null);

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Secure server-side call: Never send or ask for API key in client code
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Serverdan xatolik qaytdi.');
      }

      const botMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      // Friendly Uzbek error message per requirement
      const errorText = err?.message || 'Kechirasiz, javob olishda xatolik yuz berdi. Iltimos qaytadan urinib ko‘ring.';
      setErrorMessage(errorText);

      const errorBotMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `Xatolik: ${errorText}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };

      setMessages((prev) => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: 'Suhbat tozalandi. Sun’iy intellekt bo‘yicha yangi savolingizni bering!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setErrorMessage(null);
  };

  return (
    <section id="ai-yordamchi" className="relative py-24 sm:py-32 bg-[#020617] border-t border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Interaktiv AI Yordamchi
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            AI Bilan <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">O‘zbek Tilida</span> Muloqot Qiling
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Google Gemini modeli yordamida ishlaydi. Sun’iy intellekt, vositalar, dasturlash va boshqa qiziqtirgan mavzularda savol bering.
          </p>
        </div>

        {/* Suggestion Chips */}
        <div className="mb-6">
          <p className="text-xs text-slate-400 font-medium mb-2.5 text-center sm:text-left">
            Tezkor savol namunalari:
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {CHAT_SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                disabled={isLoading}
                className="text-xs px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer disabled:opacity-50 text-left flex items-center gap-1.5"
              >
                <span>{suggestion}</span>
                <ArrowRight className="w-3 h-3 text-cyan-400 opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window Container */}
        <div className="relative rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl overflow-hidden flex flex-col h-[580px]">
          {/* Chat Window Top Bar */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">AI Future Bot</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium">
                    Google Gemini
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Onlayn va savollarga tayyor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 rounded-lg transition-colors text-xs flex items-center gap-1"
                title="Suhbatni tozalash"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Tozalash</span>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((message) => {
              const isUser = message.role === 'user';
              const isError = message.isError;

              return (
                <div
                  key={message.id}
                  className={`flex gap-3 max-w-[88%] sm:max-w-[80%] ${
                    isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs font-bold ${
                      isUser
                        ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950'
                        : isError
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : 'bg-slate-800 border border-slate-700 text-cyan-400'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : isError ? <AlertCircle className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`group relative rounded-2xl p-4 text-sm leading-relaxed ${
                      isUser
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/20'
                        : isError
                        ? 'bg-rose-950/40 border border-rose-800/60 text-rose-200'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 shadow-md shadow-black/40'
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words">{message.content}</div>

                    {/* Bubble Bottom: Timestamp & Copy */}
                    <div
                      className={`mt-2 flex items-center gap-2 text-[10px] ${
                        isUser ? 'text-cyan-200 justify-end' : 'text-slate-400 justify-between'
                      }`}
                    >
                      <span>{message.timestamp}</span>

                      {!isUser && !isError && (
                        <button
                          onClick={() => handleCopy(message.id, message.content)}
                          className="opacity-0 group-hover:opacity-100 hover:text-cyan-300 transition-opacity p-0.5 rounded cursor-pointer flex items-center gap-1"
                          title="Nusxa olish"
                        >
                          {copiedId === message.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Nusxalandi</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Nusxa olish</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[80%] mr-auto items-center animate-fade-in">
                <div className="w-8 h-8 rounded-xl shrink-0 bg-slate-800 border border-slate-700 text-cyan-400 flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-bounce" />
                </div>
                <div className="rounded-2xl p-4 bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  <span className="text-xs text-slate-300 font-medium">
                    AI javob tayyorlamoqda...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Error Banner if any */}
          {errorMessage && (
            <div className="px-4 py-2 bg-rose-950/60 border-t border-rose-900/60 flex items-center justify-between text-xs text-rose-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
              <button
                onClick={() => setErrorMessage(null)}
                className="text-xs text-rose-400 hover:text-rose-200 underline"
              >
                Yopish
              </button>
            </div>
          )}

          {/* Input Form Bar */}
          <div className="p-3.5 bg-slate-900/95 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Savolingizni o‘zbek tilida yozing (masalan: Generativ AI nima?)..."
                disabled={isLoading}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 disabled:opacity-50"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-500/20 cursor-pointer shrink-0"
                aria-label="Xabarni yuborish"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 text-slate-950 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-slate-950" />
                )}
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Enter tugmasi orqali yuboring</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400/70" />
                Google Gemini API bilan himoyalangan server aloqasi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
