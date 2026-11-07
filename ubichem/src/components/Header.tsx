'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Headphones,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  User,
} from 'lucide-react';
import { navigation } from '@/content/navigation';
import { siteConfig } from '@/content/site';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import MobileMenu from './MobileMenu';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getTranslatedLabel = (label: string, href: string) => {
    if (label === 'Profile') return t.nav.profile;
    if (label === 'Products') return t.nav.products;
    if (label === 'Home') return t.nav.home;
    if (label === 'Gallery') return t.nav.gallery;
    if (label === 'Enquiry') return t.nav.enquiry;
    if (label === 'Contact us') return t.nav.contact;

    switch (href) {
      case '/': return t.nav.home;
      case '/about': return t.nav.ourProfile;
      case '/team': return t.nav.ourTeam;
      case '/awareness': return t.nav.awareness;
      case '/services': return t.nav.services;
      case '/awards': return t.nav.awards;
      case '/clients': return t.nav.clients;
      case '/range': return t.nav.range;
      case '/products': return t.nav.products;
      case '/gallery': return t.nav.gallery;
      case '/enquiry': return t.nav.enquiry;
      case '/contact': return t.nav.contact;
      default:
        if (href.startsWith('/products/')) {
          const slug = href.replace('/products/', '');
          if (t.categories[slug]) {
            return t.categories[slug].name;
          }
        }
        return label;
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.06)]" role="banner">
        {/* Top Info Bar - Highly Responsive */}
        <div className="w-full bg-[#00450d] text-white text-xs border-b border-white/10">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-9 sm:h-10">
            {/* Left Contact Items */}
            <div className="flex items-center gap-2 sm:gap-4 overflow-hidden text-[11px] sm:text-xs">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 hover:text-secondary-fixed transition-colors whitespace-nowrap font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
                <span className="sm:hidden">{siteConfig.contact.phone}</span>
                <span className="hidden sm:inline">{t.common.call}: {siteConfig.contact.phone}, {siteConfig.contact.phone2}</span>
              </a>

              <span className="hidden lg:inline text-white/30">|</span>

              <a
                href={`tel:${siteConfig.contact.tollFree}`}
                className="hidden lg:flex items-center gap-1.5 hover:text-secondary-fixed transition-colors whitespace-nowrap"
              >
                <Headphones className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
                <span>{t.common.tollFree}: {siteConfig.contact.tollFree}</span>
              </a>

              <span className="hidden md:inline text-white/30">|</span>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hidden md:flex items-center gap-1.5 hover:text-secondary-fixed transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            {/* Right Location & Language Items */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-[11px] sm:text-xs">
              <span className="hidden sm:flex items-center gap-1.5 text-white/90">
                <MapPin className="w-3.5 h-3.5 text-harvest-amber shrink-0" />
                <span>{t.common.location}</span>
              </span>

              <span className="hidden sm:inline text-white/30">|</span>

              {/* Functional Language Selector with English, Marathi, Hindi buttons */}
              <LanguageSelector variant="header" />
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white/98 backdrop-blur-md border-b border-border-subtle">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[72px] sm:h-[80px] md:h-[88px]">
              {/* Brand Logo & Title */}
              <Link href="/" className="flex items-center shrink-0 py-1 focus:outline-none" aria-label="Ubichem Home">
                <div className="relative h-12 sm:h-14 md:h-16 lg:h-18 w-auto flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Ubichem - Sanghvi Quality Products Pvt. Ltd."
                    width={220}
                    height={160}
                    className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain drop-shadow-xs"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav Items */}
              <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
                {navigation.items.map((item) => {
                  const hasChildren = 'children' in item && item.children && item.children.length > 0;
                  const active = isActive(item.href);
                  const displayLabel = getTranslatedLabel(item.label, item.href);

                  if (hasChildren) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-1 px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                            active
                              ? 'text-primary bg-primary/8'
                              : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                          }`}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup="true"
                        >
                          <span>{displayLabel}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180 text-primary' : 'text-outline'
                            }`}
                          />
                        </Link>

                        {/* Dropdown Menu */}
                        {activeDropdown === item.label && (
                          <div
                            className="absolute top-full left-0 mt-1 min-w-[290px] bg-white rounded-xl shadow-xl border border-border-subtle py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                            role="menu"
                          >
                            {item.children!.map((child) => {
                              const childDisplay = getTranslatedLabel(child.label, child.href);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                                    pathname === child.href
                                      ? 'text-primary bg-surface-container font-semibold'
                                      : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
                                  }`}
                                  role="menuitem"
                                >
                                  <span>{childDisplay}</span>
                                  {pathname === child.href && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        active
                          ? 'text-primary bg-primary/8'
                          : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                      }`}
                    >
                      {displayLabel}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Mobile Quick Enquire Button */}
                <Link
                  href="/enquiry"
                  className="sm:hidden inline-flex items-center px-3 py-2 rounded-lg bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-xs shadow-xs transition-colors"
                >
                  {t.common.enquireNow}
                </Link>

                {/* Mobile Call Icon (direct tap on mobile) */}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="sm:hidden w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Call Ubichem"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Facebook icon (Desktop/Tablet) */}
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex w-9 h-9 rounded-full bg-surface-container hover:bg-primary hover:text-white items-center justify-center text-primary transition-all shadow-xs"
                  aria-label="Ubichem on Facebook"
                  title="Follow us on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* Quick Enquiry Button */}
                <Link
                  href="/enquiry"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-xs sm:text-sm shadow-xs transition-all transform hover:-translate-y-0.5"
                >
                  <span>{t.common.enquireNow}</span>
                </Link>

                {/* Admin Portal Icon (Desktop/Tablet) */}
                <Link
                  href="/admin"
                  className="hidden md:flex w-9 h-9 rounded-full bg-primary hover:bg-primary-hover text-white items-center justify-center transition-all shadow-xs"
                  aria-label="Admin Portal"
                  title="Admin Portal Login"
                >
                  <User className="w-4 h-4" />
                </Link>

                {/* Mobile Menu Hamburger (Touch-friendly 44px) */}
                <button
                  type="button"
                  className="xl:hidden w-11 h-11 flex items-center justify-center rounded-xl text-primary bg-primary/10 hover:bg-primary hover:text-white transition-all cursor-pointer"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
