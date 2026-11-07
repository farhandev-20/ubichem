import { Metadata } from "next";
import { ProductsContent } from "@/components/pages/ProductsContent";

export const metadata: Metadata = {
  title: "Agricultural Products & Formulations Catalog",
  description: "Browse all 9 agricultural product categories by Ubichem, Sanghvi Quality Products Pvt. Ltd.",
};

export default function ProductsPage() {
  return <ProductsContent />;
}
