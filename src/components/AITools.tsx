import React, { useState } from 'react';
import { AI_TOOLS } from '../data/aiData.ts';
import { AITool } from '../types.ts';
import { 
  MessageSquareText, 
  Sparkles, 
  Presentation, 
  Palette, 
  Cpu, 
  Code2, 
  ExternalLink, 
  Info, 
  X, 
  CheckCircle2, 
  Search,
  Filter
} from 'lucide-react';

export const AITools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getToolIcon = (name: string, className: string = 'w-6 h-6') => {
    switch (name) {
      case 'MessageSquareText':
        return <MessageSquareText className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Presentation':
        return <Presentation className={className} />;
      case 'Palette':
        return <Palette className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Code2':
        return <Code2 className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const categories = [
    { id: 'all', label: 'Barcha vositalar' },
    { id: 'text', label: 'Matn va Tahlil' },
    { id: 'assistant', label: 'Aqlli Yordamchilar' },
    { id: 'presentation', label: 'Prezentatsiya' },
    { id: 'design', label: 'Dizayn' },
    { id: 'coding', label: 'Dasturlash' },
  ];

  const filteredTools = AI_TOOLS.filter((tool) => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ai-vositalari" className="relative py-24 sm:py-32 bg-[#030712] border-t border-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            Zamonaviy Texnologiyalar
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Eng Foydali <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">AI Vositalari</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Kundalik ishlaringizni osonlashtiruvchi, matn yozishdan tortib slaydlar, grafika va dasturiy kod yaratishgacha bo‘lgan eng ilg‘or xalqaro platformalar.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Vositani qidirish..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Grid of Cards */}
        {filteredTools.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">Mos keladigan AI vositalari topilmadi.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 text-xs text-cyan-400 underline font-medium"
            >
              Filtrlarni tozalash
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group relative rounded-3xl p-6 bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 flex items-center justify-center p-3 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      {getToolIcon(tool.iconName, 'w-6 h-6 text-cyan-400')}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {tool.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3 tracking-wide">
                    {tool.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* Action Buttons: "Batafsil" & Direct Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 text-xs font-semibold transition-all duration-200 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-cyan-400" />
                    Batafsil
                  </button>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition-all duration-200 shadow-md shadow-cyan-500/20"
                    title={`${tool.name} rasmiy veb-saytiga o‘tish`}
                  >
                    <span>Sayt</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tool Detail Modal */}
        {selectedTool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div 
              className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center p-3 text-cyan-400 shrink-0">
                  {getToolIcon(selectedTool.iconName, 'w-7 h-7 text-cyan-400')}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white">{selectedTool.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {selectedTool.categoryLabel}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400 font-medium">{selectedTool.tagline}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Umumiy ma’lumot</h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedTool.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Asosiy imkoniyatlari</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedTool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-800/50 border border-slate-750">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-750">
                    <span className="text-xs text-slate-400 block mb-1">Narx siyosati</span>
                    <span className="text-sm font-semibold text-emerald-400">{selectedTool.pricingType}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-750">
                    <span className="text-xs text-slate-400 block mb-1">Kimlar uchun tavsiya etiladi</span>
                    <span className="text-xs font-medium text-slate-200">{selectedTool.recommendedFor}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Rasmiy manzil: <span className="text-slate-300 font-mono">{selectedTool.url}</span>
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Yopish
                  </button>
                  <a
                    href={selectedTool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <span>Saytga o‘tish</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
