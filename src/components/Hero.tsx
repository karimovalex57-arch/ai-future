import React from 'react';
import { NeuralCanvas } from './NeuralCanvas.tsx';
import { Sparkles, ArrowRight, Compass, Layers, Bot, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onToolsClick: () => void;
  onChatClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onToolsClick, onChatClick }) => {
  return (
    <section id="bosh-sahifa" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Neural Canvas Background */}
      <NeuralCanvas />

      {/* Futuristic ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-md shadow-cyan-500/10 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide">Kelajak texnologiyalari — O‘zbekistonda yangi bosqich</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          Kelajakni Sun’iy Intellekt{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            Bilan Yarat!
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          AI imkoniyatlarini kashf eting, zamonaviy texnologiyalarni o‘rganing va kelajak sari birinchi qadamingizni qo‘ying.
        </p>

        {/* Two Main Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl text-base font-bold text-white transition-all duration-300 cursor-pointer focus:outline-none"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]" />
            <span className="relative flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-200 transition-transform duration-300 group-hover:rotate-45" />
              AI olamini o‘rganish
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          <button
            onClick={onToolsClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/30 cursor-pointer"
          >
            <Layers className="w-5 h-5 text-cyan-400" />
            Vositalarni ko‘rish
          </button>
        </div>

        {/* Interactive Quick Assistant Banner */}
        <div 
          onClick={onChatClick}
          className="max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/25 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group shadow-xl shadow-cyan-950/20 text-left flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
              <Bot className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Interaktiv AI yordamchi
              </div>
              <p className="text-sm text-slate-200 font-medium mt-0.5">
                O‘zbek tilida savolingiz bormi? Gemini asosidagi AI bilan hoziroq suhbatlashing!
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-cyan-300 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
            Savol berish
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Stats and Credibility Banner */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-tech">
              <Zap className="w-5 h-5 text-cyan-400" />
              6+
            </div>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Yetakchi AI vositalari</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-tech">
              <Bot className="w-5 h-5 text-purple-400" />
              100%
            </div>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">O‘zbek tilidagi tushuntirish</span>
          </div>

          <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-3">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-tech">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Google Gemini
            </div>
            <span className="text-xs sm:text-sm text-slate-400 mt-1">Haqiqiy server integratsiyasi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
