import { Metadata } from "next";
import { AwardsContent } from "@/components/pages/AwardsContent";

export const metadata: Metadata = {
  title: "Awards & Achievements",
  description: "Recognitions, ISO certifications, and milestone achievements of Ubichem since 1988.",
};

export default function AwardsPage() {
  return <AwardsContent />;
}
