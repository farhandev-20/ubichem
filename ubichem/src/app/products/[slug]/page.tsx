import { Metadata } from "next";
import { notFound } from "next/navigation";
import { productCategories } from "@/content/products";
import { ProductDetailContent } from "@/components/pages/ProductDetailContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Product Category Not Found" };
  return {
    title: `${category.name} | Ubichem Agricultural Formulations`,
    description: `${category.description} Manufactured by Sanghvi Quality Products Pvt. Ltd., Barshi, Maharashtra.`,
  };
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  return <ProductDetailContent category={category} />;
}
