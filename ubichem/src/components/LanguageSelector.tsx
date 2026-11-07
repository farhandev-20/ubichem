'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/types';
import { Languages } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'header' | 'mobile' | 'floating';
  className?: string;
}

export function LanguageSelector({ variant = 'header', className = '' }: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'mr', label: 'मराठी', short: 'मराठी' },
    { code: 'hi', label: 'हिन्दी', short: 'हिन्दी' },
  ];

  if (variant === 'mobile') {
    return (
      <div className={`p-3 bg-surface-container-low rounded-2xl border border-border-subtle ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-primary">
            <Languages className="w-4 h-4 text-primary" />
            <span>{t.common.lang}:</span>
          </span>
          <span className="text-[11px] text-on-surface-variant font-medium">
            {language === 'en' ? 'English' : language === 'mr' ? 'मराठी' : 'हिन्दी'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {languages.map((item) => {
            const isActive = language === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`py-2 px-2 text-xs font-bold rounded-xl transition-all text-center ${
                  isActive
                    ? 'bg-primary text-white shadow-sm ring-2 ring-primary/20 scale-[1.02]'
                    : 'bg-white text-on-surface hover:bg-white/80 border border-border-subtle/80'
                }`}
                aria-pressed={isActive}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Header variant (compact top-bar)
  return (
    <div className={`flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs text-white/90 ${className}`}>
      <Languages className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
      <span className="hidden sm:inline font-semibold text-white/70">{t.common.lang}:</span>
      <div className="inline-flex items-center bg-black/20 backdrop-blur-xs p-0.5 rounded-lg border border-white/10">
        {languages.map((item, index) => {
          const isActive = language === item.code;
          return (
            <div key={item.code} className="flex items-center">
              {index > 0 && <span className="text-white/20 text-[10px] mx-0.5">|</span>}
              <button
                type="button"
                onClick={() => setLanguage(item.code)}
                className={`px-2 py-0.5 rounded-md font-medium transition-all ${
                  isActive
                    ? 'bg-secondary-fixed text-primary font-bold shadow-xs scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                title={`Switch to ${item.label}`}
                aria-pressed={isActive}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.short}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageSelector;
