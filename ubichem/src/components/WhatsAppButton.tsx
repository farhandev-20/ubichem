'use client';

import { siteConfig } from '@/content/site';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function WhatsAppButton() {
  const { t } = useLanguage();

  if (!siteConfig.features.whatsappButton) {
    return null;
  }

  const cleanNumber = siteConfig.features.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      <a
        href={`https://wa.me/${cleanNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Farmer Support on WhatsApp"
        className="flex items-center gap-2 sm:gap-2.5 bg-[#00450d] hover:bg-[#1b5e20] text-white px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_10px_25px_-4px_rgba(27,94,32,0.35)] hover:shadow-xl transition-all transform hover:-translate-y-0.5 group border border-white/20"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-fixed shrink-0 group-hover:scale-110 transition-transform" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          <span className="sm:hidden">WhatsApp</span>
          <span className="hidden sm:inline">{t.common.chatWhatsApp}</span>
        </span>
      </a>
    </div>
  );
}

export default WhatsAppButton;
