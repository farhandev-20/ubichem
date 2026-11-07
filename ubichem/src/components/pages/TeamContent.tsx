'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { useLanguage } from "@/i18n/LanguageContext";

export function TeamContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.team.title}
        subtitle={t.team.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.profile, href: "/about" },
          { label: t.team.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
        {/* 1. EXECUTIVE LEADERSHIP SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.home.leadershipKicker}</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
              {t.home.leadershipHeading}
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant">
              {t.home.leadershipSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.home.leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                {/* Photo Frame */}
                <div className="relative w-full aspect-[3/4] max-w-[260px] rounded-2xl overflow-hidden bg-surface-container border-2 border-border-subtle group-hover:border-primary/40 shadow-md mb-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2.5 w-full">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#121c2a] group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm tracking-wide">
                      {leader.role}
                    </span>
                  </div>
                  <p className="text-xs text-outline mt-3 pt-3 border-t border-border-subtle/60">
                    {leader.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FUNCTIONAL AGRONOMY & TECHNICAL TEAMS */}
        <div className="space-y-12 pt-8 border-t border-border-subtle">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Dedicated Experts
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
              {t.team.heading}
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant">
              {t.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.team.members.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between space-y-4 hover:shadow-xl transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/50 flex items-center justify-between text-xs text-outline">
                  <span>Sanghvi Quality Products Pvt. Ltd.</span>
                  <span className="font-bold text-primary">Barshi Works</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#eef4ea] p-10 sm:p-14 rounded-3xl border border-border-subtle space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#121c2a]">
            {t.forms.enquiryCardTitle}
          </h3>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-base">
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

