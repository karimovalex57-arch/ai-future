import React from 'react';
import { Cpu, Mail, ArrowUp, Github, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020617] border-t border-slate-900 text-slate-400 py-14 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Logo & Short Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-tech text-xl font-bold tracking-wider text-white">
                  AI FUTURE
                </span>
                <span className="text-[10px] tracking-widest text-cyan-400 uppercase -mt-0.5">
                  Sun’iy Intellekt Olami
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Sun’iy intellekt texnologiyalarini o‘rganish, zamonaviy AI vositalarini amaliyotga tatbiq etish va kelajak innovatsiyalari sari yo‘l ochuvchi birinchi raqamli o‘zbekcha platforma.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:info@aifuture.uz"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg bg-slate-900/80 border border-slate-800"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>info@aifuture.uz</span>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors py-1.5 px-3 rounded-lg bg-slate-900/80 border border-slate-800"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-tech">
              Bo‘limlar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#bosh-sahifa" className="hover:text-cyan-400 transition-colors">
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a href="#ai-haqida" className="hover:text-cyan-400 transition-colors">
                  AI haqida
                </a>
              </li>
              <li>
                <a href="#ai-vositalari" className="hover:text-cyan-400 transition-colors">
                  AI vositalari
                </a>
              </li>
              <li>
                <a href="#ai-yordamchi" className="hover:text-cyan-400 transition-colors">
                  Interaktiv yordamchi
                </a>
              </li>
              <li>
                <a href="#imkoniyatlar" className="hover:text-cyan-400 transition-colors">
                  Imkoniyatlar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Ko‘p so‘raladigan savollar
                </a>
              </li>
              <li>
                <a href="#aloqa" className="hover:text-cyan-400 transition-colors">
                  Aloqa
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: AI Tools Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-tech">
              Mashhur Vositalar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  ChatGPT (OpenAI)
                </a>
              </li>
              <li>
                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Google Gemini
                </a>
              </li>
              <li>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Claude (Anthropic)
                </a>
              </li>
              <li>
                <a href="https://gamma.app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Gamma App
                </a>
              </li>
              <li>
                <a href="https://canva.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Canva AI
                </a>
              </li>
              <li>
                <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub Copilot
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice & Scroll To Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AI FUTURE. Barcha huquqlar himoyalangan.</p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium">
              Sun’iy intellekt kelajagi bugundan boshlanadi
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors flex items-center gap-1 cursor-pointer"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
