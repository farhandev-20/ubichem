import { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "Our Profile & Company History",
  description: "Learn about Ubichem - Sanghvi Quality Products Pvt. Ltd., established in 1988 in Barshi, Maharashtra.",
};

export default function AboutPage() {
  return <AboutContent />;
}
