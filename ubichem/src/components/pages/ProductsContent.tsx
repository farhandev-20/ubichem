'use client';

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { productCategories } from "@/content/products";
import { useLanguage } from "@/i18n/LanguageContext";

export function ProductsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageBanner
        title={t.nav.products}
        subtitle={t.home.productsSubheading}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.products },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            {t.home.productsKicker}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight">
            {t.home.productsHeading}
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant">
            {t.home.productsSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const catData = t.categories[category.slug] || { name: category.name, description: category.description };
            return (
              <div
                key={category.slug}
                className="bg-white rounded-3xl p-7 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="space-y-5">
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-surface-container p-4">
                    {category.image ? (
                      <Image
                        src={category.image}
                        alt={catData.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-outline text-sm text-center p-4">
                        <span className="font-semibold text-primary">{catData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                      {catData.name}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {catData.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-auto border-t border-border-subtle/50 flex items-center justify-between">
                  <Link
                    href={`/products/${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-secondary transition-colors"
                  >
                    <span>{t.home.exploreFormulations}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/enquiry"
                    className="text-xs font-semibold text-harvest-amber hover:underline"
                  >
                    {t.common.enquireNow}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

