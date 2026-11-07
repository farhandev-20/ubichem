'use client';

import { ShieldCheck, Truck, PhoneCall } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function EnquiryContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.nav.enquiry}
        subtitle={t.forms.enquiryCardSubtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.enquiry },
        ]}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        {/* Top 3 Assurance Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#121c2a]">100% Quality Assured</h3>
              <p className="text-xs text-on-surface-variant">Lab standardized formulations</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-harvest-amber/20 text-[#121c2a] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-harvest-amber" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#121c2a]">Multi-State Supply</h3>
              <p className="text-xs text-on-surface-variant">Prompt transit across 6 states</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm text-[#121c2a]">Direct Factory Desk</h3>
              <p className="text-xs text-on-surface-variant">Call: {siteConfig.contact.phone}</p>
            </div>
          </div>
        </div>

        {/* Enquiry Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle space-y-8">
          <div className="space-y-2 border-b border-border-subtle/80 pb-6">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Official Form
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121c2a]">
              {t.forms.enquiryCardTitle}
            </h2>
            <p className="text-base text-on-surface-variant">
              {t.forms.enquiryCardSubtitle}
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

