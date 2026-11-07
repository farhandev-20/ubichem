'use client';

import { Phone, Mail, MapPin, Headphones, Clock } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.nav.contact}
        subtitle={t.forms.enquiryCardSubtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.contact },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle space-y-6">
              <div className="space-y-1">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                  Registered Works
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121c2a]">
                  {t.footer.contactTitle}
                </h2>
              </div>

              <div className="space-y-6 text-base text-on-surface-variant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#121c2a]">
                      Works Address
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mt-1">
                      {t.footer.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#121c2a]">
                      {t.common.call}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-primary mt-1">
                      <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                        {t.footer.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#121c2a]">
                      {t.common.tollFree}
                    </h3>
                    <p className="text-sm sm:text-base font-medium mt-1">
                      {t.common.tollFree}: {siteConfig.contact.tollFree}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#121c2a]">
                      {t.common.email}
                    </h3>
                    <p className="text-sm sm:text-base mt-1">
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-primary font-semibold hover:underline">
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours card */}
            <div className="bg-[#eef4ea] rounded-3xl p-8 border border-border-subtle space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Office Hours</span>
              </div>
              <p className="text-sm text-on-surface-variant">
                Monday – Saturday: 9:30 AM to 6:30 PM (IST)<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle space-y-8">
              <div className="space-y-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                  Quick Message
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121c2a]">
                  {t.forms.sendMessage}
                </h2>
                <p className="text-base text-on-surface-variant">
                  {t.forms.enquiryCardSubtitle}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

