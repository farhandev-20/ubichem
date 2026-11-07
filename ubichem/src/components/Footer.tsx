'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { productCategories } from '@/content/products';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { YoutubeIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#f0f4ec] text-on-surface border-t border-border-subtle" role="contentinfo">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Col 1: Brand & Summary */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block focus:outline-none" aria-label="Ubichem Home">
              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-border-subtle inline-block shadow-xs">
                <Image
                  src="/images/logo.png"
                  alt="Ubichem - Sanghvi Quality Products Pvt. Ltd."
                  width={220}
                  height={160}
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-on-surface-variant leading-relaxed">
              {t.footer.about}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white shadow-xs border border-border-subtle flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white shadow-xs border border-border-subtle flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white shadow-xs border border-border-subtle flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white shadow-xs border border-border-subtle flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading text-base font-bold text-primary tracking-wide">
              {t.footer.categoriesTitle}
            </h3>
            <ul className="flex flex-col space-y-2 text-sm text-on-surface-variant">
              {productCategories.slice(0, 6).map((cat) => {
                const categoryName = t.categories[cat.slug]?.name || cat.name;
                return (
                  <li key={cat.slug}>
                    <Link
                      href={`/products/${cat.slug}`}
                      className="hover:text-primary transition-colors hover:underline inline-flex items-center gap-1"
                    >
                      <span>{categoryName}</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/products"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                >
                  <span>{t.home.viewAllCategories}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company Profile */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading text-base font-bold text-primary tracking-wide">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="flex flex-col space-y-2 text-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.ourProfile}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.ourTeam}
                </Link>
              </li>
              <li>
                <Link href="/awareness" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.awareness}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/awards" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.awards}
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.clients}
                </Link>
              </li>
              <li>
                <Link href="/range" className="hover:text-primary transition-colors hover:underline">
                  {t.nav.range}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Factory */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-heading text-base font-bold text-primary tracking-wide">
              {t.footer.contactTitle}
            </h3>
            <div className="flex flex-col space-y-3 text-sm text-on-surface-variant">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span>{t.footer.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-primary font-medium"
                >
                  {t.footer.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary"
                >
                  {t.footer.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer row */}
        <div className="py-4 border-t border-border-subtle/80">
          <p className="text-xs text-outline leading-relaxed italic text-center md:text-left">
            <strong className="font-semibold text-on-surface">{t.home.disclaimerLabel}:</strong> {t.home.disclaimerText}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-border-subtle/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant text-center md:text-left">
          <p>{t.common.allRightsReserved}</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-primary hover:underline">
              {t.common.adminPortal}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
