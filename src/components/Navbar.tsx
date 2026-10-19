import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  onStartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('bosh-sahifa');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['bosh-sahifa', 'ai-haqida', 'ai-vositalari', 'ai-yordamchi', 'imkoniyatlar', 'faq', 'aloqa'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#bosh-sahifa' },
    { label: 'AI haqida', href: '#ai-haqida' },
    { label: 'AI vositalari', href: '#ai-vositalari' },
    { label: 'AI yordamchi', href: '#ai-yordamchi' },
    { label: 'Imkoniyatlar', href: '#imkoniyatlar' },
    { label: 'Aloqa', href: '#aloqa' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#bosh-sahifa"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#bosh-sahifa');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-xl -z-10 group-hover:bg-cyan-400/40 transition-colors" />
            </div>

            <div className="flex flex-col">
              <span className="font-tech text-xl font-bold tracking-wider bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                AI FUTURE
              </span>
              <span className="text-[10px] font-medium tracking-widest text-cyan-400/80 uppercase -mt-1">
                Sun’iy Intellekt Olami
              </span>
            </div>
          </a>

          {/* Desktop Nav items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Glowing CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onStartClick}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full group cursor-pointer focus:outline-none"
            >
              <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 group-hover:opacity-90 transition-opacity" />
              <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
              <span className="relative flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200 animate-spin-slow" />
                Boshlash
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onStartClick}
              className="px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20"
            >
              Boshlash
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 border-t border-slate-800/80 bg-[#030712]/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/15'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
