'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { productCategories } from "@/content/products";
import { useLanguage } from "@/i18n/LanguageContext";

export function RangeContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.range.title}
        subtitle={t.range.subtitle}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.profile, href: "/about" },
          { label: t.range.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Agronomy Solutions
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.range.heading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            {t.range.subtitle}
          </p>
        </div>

        {/* All 9 Categories Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
              {t.home.viewAllCategories}
            </h3>
            <Link
              href="/products"
              className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
            >
              <span>{t.common.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => {
              const catData = t.categories[category.slug] || { name: category.name, description: category.description };
              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_16px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-surface-container p-3">
                      {category.image ? (
                        <Image
                          src={category.image}
                          alt={catData.name}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-outline text-sm">
                          No image
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-heading text-xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                        {catData.name}
                      </h4>
                      <p className="text-sm text-on-surface-variant mt-2 line-clamp-3">
                        {catData.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs font-bold text-primary">
                    <span>{t.home.exploreFormulations}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

