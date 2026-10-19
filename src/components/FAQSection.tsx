import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/aiData.ts';
import { HelpCircle, ChevronDown, Sparkles, MessageCircleQuestion } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#020617] border-t border-slate-900">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            Ko‘p So‘raladigan Savollar
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Savollaringizga <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Javoblar</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Sun’iy intellekt haqida yangi boshlovchilar va foydalanuvchilarni eng ko‘p qiziqtiradigan savollarga aniq va tushunarli javoblar.
          </p>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-tech text-xs font-bold px-2 py-1 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-xl bg-slate-800/80 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Boshqa savolingiz bormi?</p>
              <p className="text-xs text-slate-400">Bizning AI yordamchimiz sizga istalgan mavzuda darhol javob beradi.</p>
            </div>
          </div>
          <a
            href="#ai-yordamchi"
            className="shrink-0 px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Yordamchidan so‘rash
          </a>
        </div>
      </div>
    </section>
  );
};
