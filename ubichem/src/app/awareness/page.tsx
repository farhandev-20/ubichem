import { Metadata } from "next";
import { AwarenessContent } from "@/components/pages/AwarenessContent";

export const metadata: Metadata = {
  title: "Farmer Awareness Programmes",
  description: "Explore Ubichem farmer training, soil fertility workshops, and safe spraying demonstrations.",
};

export default function AwarenessPage() {
  return <AwarenessContent />;
}
