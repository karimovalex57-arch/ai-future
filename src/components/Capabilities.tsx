import React from 'react';
import { AI_CAPABILITIES } from '../data/aiData.ts';
import { Zap, Lightbulb, GraduationCap, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="imkoniyatlar" className="relative py-24 sm:py-32 bg-[#030712] border-t border-slate-900">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Cheksiz Ufqlar
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Sun’iy Intellekt <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Imkoniyatlari</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Zamonaviy AI nafaqat oddiy dastur, balki shaxsiy rivojlanish, ijodiy erkinlik va biznes samaradorligini eng yuqori darajaga olib chiquvchi kuchli katalizatordir.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {AI_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="group relative rounded-3xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Metric & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300">
                    {getIcon(cap.icon)}
                  </div>
                  <div className="text-right">
                    <span className="font-tech text-lg font-bold text-white block">
                      {cap.metric}
                    </span>
                    <span className="text-[10px] text-slate-400 block -mt-0.5">
                      {cap.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Highlights list */}
              <div className="pt-4 border-t border-slate-800/70 space-y-2 mt-auto">
                {cap.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
