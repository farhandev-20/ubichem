'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { ProductCategory } from "@/content/products";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductDetailContentProps {
  category: ProductCategory;
}

export function ProductDetailContent({ category }: ProductDetailContentProps) {
  const { t } = useLanguage();

  const catData = t.categories[category.slug] || {
    name: category.name,
    description: category.description,
    products: category.products,
  };

  const productsList = catData.products && catData.products.length > 0
    ? catData.products
    : category.products;

  return (
    <>
      <PageBanner
        title={catData.name}
        subtitle={catData.description}
        breadcrumbs={[
          { label: t.common.home, href: "/" },
          { label: t.nav.products, href: "/products" },
          { label: catData.name },
        ]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        {/* Category Hero Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_-2px_rgba(27,94,32,0.06)] border border-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {category.image ? (
            <div className="lg:col-span-5 relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-surface-container p-4 border border-border-subtle/50">
              <Image
                src={category.image}
                alt={catData.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          ) : null}

          <div className={category.image ? "lg:col-span-7 space-y-6" : "col-span-12 space-y-6"}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Agricultural Formulation</span>
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121c2a] tracking-tight leading-tight">
              {catData.name}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant leading-relaxed">
              {catData.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C7A831] hover:bg-[#F57F17] text-[#121c2a] font-bold text-base transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <span>{t.common.enquireNow}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border-subtle text-on-surface hover:bg-surface-container font-semibold text-base transition-all"
              >
                <span>{t.common.contactUs}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Available Formulations */}
        <div className="space-y-8">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Formulation Portfolio
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121c2a] tracking-tight">
              Available Formulations & Grades
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-2px_rgba(27,94,32,0.06)] border border-border-subtle flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-primary">
                    {prod.name}
                  </h4>
                  {prod.description && (
                    <p className="text-base text-on-surface-variant leading-relaxed">
                      {prod.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-border-subtle/50">
                  <Link
                    href="/enquiry"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <span>{t.common.enquireNow}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

