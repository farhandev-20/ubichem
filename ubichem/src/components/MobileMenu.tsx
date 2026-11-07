'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Phone, Mail, User, ArrowRight, MessageCircle } from 'lucide-react';
import { navigation } from '@/content/navigation';
import { siteConfig } from '@/content/site';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Products']);
  const { t } = useLanguage();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const handleLinkClick = () => {
    onClose();
  };

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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[100] w-full max-w-sm sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header with Logo & Close */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border-subtle bg-white">
          <Link href="/" onClick={handleLinkClick} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Ubichem - Sanghvi Quality Products"
              width={220}
              height={160}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-surface-container-low border border-border-subtle flex items-center justify-center text-on-surface hover:text-primary transition-colors cursor-pointer shadow-xs"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Language Selection in Mobile Drawer */}
        <div className="px-4 pt-3 pb-1 border-b border-border-subtle/50">
          <LanguageSelector variant="mobile" />
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
          {navigation.items.map((item) => {
            const hasChildren = 'children' in item && item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.label);
            const active = isActive(item.href);
            const displayLabel = getTranslatedLabel(item.label, item.href);

            if (hasChildren) {
              return (
                <div key={item.label} className="border-b border-border-subtle/50 pb-1">
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-bold text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors"
                  >
                    <span>{displayLabel}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-outline transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-3 pr-2 py-1.5 space-y-1 bg-surface-container-low/70 rounded-xl my-1 border border-border-subtle/40">
                      {item.children!.map((child) => {
                        const childDisplay = getTranslatedLabel(child.label, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={handleLinkClick}
                            className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                              pathname === child.href
                                ? 'text-primary bg-white shadow-xs font-bold'
                                : 'text-on-surface-variant hover:text-primary'
                            }`}
                          >
                            {childDisplay}
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
                onClick={handleLinkClick}
                className={`block px-3.5 py-3 rounded-xl text-base font-bold transition-colors ${
                  active
                    ? 'text-primary bg-primary/10'
                    : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                {displayLabel}
              </Link>
            );
          })}

          {/* Quick CTAs */}
          <div className="pt-4 space-y-2.5">
            <Link
              href="/enquiry"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-sm shadow-md transition-all text-center"
            >
              <span>{t.common.enquireNow}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.features.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#00450d] hover:bg-[#1b5e20] text-white font-bold text-sm shadow-xs transition-colors text-center"
            >
              <MessageCircle className="w-4 h-4 text-secondary-fixed" />
              <span>{t.common.chatWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="p-4 border-t border-border-subtle bg-surface-container-low space-y-2.5 text-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary font-bold">
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary font-medium">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <Link
              href="/admin"
              onClick={handleLinkClick}
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary font-semibold"
            >
              <User className="w-4 h-4" />
              <span>{t.common.adminPortal}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
