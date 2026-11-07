'use client';

import Link from "next/link";
import { Quote, MapPin, ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { useLanguage } from "@/i18n/LanguageContext";

export function ClientsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.clients.title}
        subtitle={t.clients.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.profile, href: "/about" },
          { label: t.clients.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Field Endorsements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.clients.heading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            {t.clients.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.clients.testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-primary/20" />
                <p className="text-base sm:text-lg text-on-surface-variant italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle/60 space-y-1">
                <h4 className="font-heading font-bold text-base text-primary">
                  {item.author}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-outline font-medium">
                  <MapPin className="w-3.5 h-3.5 text-harvest-amber" />
                  <span>{item.location}</span>
                </div>
                <p className="text-xs text-primary font-semibold">
                  {item.crop}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#eef4ea] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 border border-border-subtle">
          <h3 className="font-heading text-2xl font-bold text-primary">
            {t.forms.enquiryCardTitle}
          </h3>
          <p className="text-base text-on-surface-variant">
            {t.forms.enquiryCardSubtitle}
          </p>
          <div className="pt-2">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-base transition-all shadow-md"
            >
              <span>{t.common.enquireNow}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

