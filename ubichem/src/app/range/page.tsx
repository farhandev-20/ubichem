import { Metadata } from "next";
import { RangeContent } from "@/components/pages/RangeContent";

export const metadata: Metadata = {
  title: "Complete Agricultural Product Range",
  description: "Browse Ubichem's complete agricultural formulation range across 9 specialized categories.",
};

export default function RangePage() {
  return <RangeContent />;
}
