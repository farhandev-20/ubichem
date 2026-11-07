import { Metadata } from "next";
import { ClientsContent } from "@/components/pages/ClientsContent";

export const metadata: Metadata = {
  title: "Client Satisfaction & Grower Testimonials",
  description: "Read testimonials from progressive farmers and agricultural dealers partnering with Ubichem.",
};

export default function ClientsPage() {
  return <ClientsContent />;
}
