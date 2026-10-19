import React, { useState } from 'react';
import { AI_CONCEPTS } from '../data/aiData.ts';
import { BrainCircuit, Network, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Cpu, Binary } from 'lucide-react';

export const AboutAI: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('ml');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-7 h-7 text-cyan-400" />;
      case 'Network':
        return <Network className="w-7 h-7 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-fuchsia-400" />;
      default:
        return <Cpu className="w-7 h-7 text-cyan-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="ai-haqida" className="relative py-24 sm:py-32 bg-[#020617]/70 border-t border-slate-900 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Binary className="w-3.5 h-3.5 text-cyan-400" />
            Asosiy Tushunchalar
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Sun’iy Intellekt <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Nima O‘zi?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sun’iy intellekt (AI) — bu kompyuterlarga insondek fikrlash, ko‘rish, eshitish, o‘rganish va mustaqil qarorlar qabul qilish imkonini beruvchi ilg‘or dasturiy texnologiyalar to‘plamidir. U oddiy hisob-kitoblardan tortib, murakkab ijodiy loyihalar va tibbiy kashfiyotlargacha bo‘lgan sohalarda inqilob yasamoqda.
          </p>
        </div>

        {/* 3 Attractive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AI_CONCEPTS.map((concept, index) => {
            const isExpanded = expandedId === concept.id;

            return (
              <div
                key={concept.id}
                className="group relative rounded-3xl p-7 bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between backdrop-blur-xl"
              >
                {/* Glow accent inside card on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Card Header with Icon & Index badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300">
                      {getIcon(concept.icon)}
                    </div>
                    <span className="font-tech text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {concept.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 tracking-wide mt-0.5">
                      {concept.subtitle}
                    </p>
                  </div>

                  {/* Short Explanation */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {concept.description}
                  </p>
                </div>

                {/* Details Accordion */}
                <div className="pt-4 border-t border-slate-800/60 mt-auto">
                  <button
                    onClick={() => toggleExpand(concept.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Tafsilotlarni yopish' : 'Qanday qo‘llaniladi?'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3.5 space-y-2.5 pt-2 animate-fade-in">
                      {concept.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900/60 border border-cyan-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                AI inson aqlining o‘rnini bosmaydi — uni kuchaytiradi!
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Har qanday sohada sun’iy intellekt vositalaridan to‘g‘ri foydalanish ish unumdorligini kamida 3-5 baravarga oshiradi.
              </p>
            </div>
          </div>
          <a
            href="#ai-vositalari"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#030712] font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-cyan-500/20"
          >
            Vositalarni sinab ko‘ring
          </a>
        </div>
      </div>
    </section>
  );
};
