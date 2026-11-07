import { Metadata } from "next";
import { EnquiryContent } from "@/components/pages/EnquiryContent";

export const metadata: Metadata = {
  title: "Product Enquiry & Dealer Portal | Ubichem",
  description: "Submit product inquiries, dosage pricing, and dealership applications for Ubichem formulations.",
};

export default function EnquiryPage() {
  return <EnquiryContent />;
}
