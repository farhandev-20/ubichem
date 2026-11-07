import { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us & Factory Office | Ubichem",
  description: "Connect with Sanghvi Quality Products Pvt. Ltd., Barshi, Maharashtra. Phone numbers, factory address, and enquiry desk.",
};

export default function ContactPage() {
  return <ContactContent />;
}
