import { Metadata } from "next";
import { TeamContent } from "@/components/pages/TeamContent";

export const metadata: Metadata = {
  title: "Our Team & Leadership | Ubichem",
  description: "Meet the leadership, scientists, and agronomy specialists behind Ubichem and Sanghvi Quality Products Pvt. Ltd.",
};

export default function TeamPage() {
  return <TeamContent />;
}
