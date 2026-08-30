import React from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-3 text-center text-[11px] sm:text-xs font-sans text-slate-400 select-none ${className}`}>
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        <span>&copy; {currentYear}</span>
        <span className="text-slate-600">•</span>
        <span>Desenvolvido por</span>
        <a
          href="https://nexuscleo.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium transition-colors inline-flex items-center gap-1"
          title="Acessar portfólio de nexus.DS"
        >
          nexus.DS
        </a>
      </div>
    </footer>
  );
};

