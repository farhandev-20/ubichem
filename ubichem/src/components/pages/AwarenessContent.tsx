'use client';

import Link from "next/link";
import { GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { useLanguage } from "@/i18n/LanguageContext";

export function AwarenessContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.awareness.title}
        subtitle={t.awareness.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.profile, href: "/about" },
          { label: t.awareness.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Farmer Outreach
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.awareness.heading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            {t.awareness.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.awareness.programmes.map((prog, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  {prog.title}
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {prog.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle/60 space-y-2 text-xs text-on-surface-variant font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-harvest-amber shrink-0" />
                  <span>{prog.frequency}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{prog.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule a workshop banner */}
        <div className="bg-[#eef4ea] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 border border-border-subtle">
          <h3 className="font-heading text-2xl font-bold text-primary">
            {t.forms.enquiryCardTitle}
          </h3>
          <p className="text-base text-on-surface-variant">
            {t.forms.enquiryCardSubtitle}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base transition-all shadow-md"
            >
              <span>{t.common.contactUs}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

