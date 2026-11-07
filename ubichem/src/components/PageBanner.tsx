'use client';

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-r from-[#00340a] via-[#00450d] to-[#1b5e20] py-16 md:py-20 text-white overflow-hidden">
      {/* Decorative ambient curve */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 rounded-l-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <li className="flex items-center gap-1.5">
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Home className="w-3.5 h-3.5 text-harvest-amber" />
                  <span>{t.common.home}</span>
                </Link>
              </li>
              {breadcrumbs.slice(1).map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-bold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageBanner;
