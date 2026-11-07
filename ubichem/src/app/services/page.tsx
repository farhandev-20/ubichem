import { Metadata } from "next";
import { ServicesContent } from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Agricultural Services & Agronomic Support",
  description: "Comprehensive agronomy, soil diagnostics, dealership support, and bulk supply services from Ubichem.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
