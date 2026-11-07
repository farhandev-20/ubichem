'use client';

import { Trophy } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { CertCarousel } from "@/components/CertCarousel";
import { useLanguage } from "@/i18n/LanguageContext";

export function AwardsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.awards.title}
        subtitle={t.awards.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.profile, href: "/about" },
          { label: t.awards.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Milestones of Excellence
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.awards.heading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            {t.awards.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.awards.items.map((ach, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-harvest-amber/20 text-[#121c2a] font-bold text-xs">
                  {ach.year}
                </span>
                <Trophy className="w-6 h-6 text-harvest-amber" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">
                {ach.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificates Showcase with Lightbox */}
        <div className="bg-[#eef4ea] rounded-3xl p-8 sm:p-12 border border-border-subtle space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              {t.home.certsHeading}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant">
              {t.home.certsHint}
            </p>
          </div>
          <CertCarousel />
        </div>
      </section>
    </>
  );
}

