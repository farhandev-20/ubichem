export interface TeamMember {
  name: string;
  role: string;
  image: string;
  company?: string;
  bio?: string;
}

export const leadershipMembers: TeamMember[] = [
  {
    name: "Mr. Manoharlal Sanghvi",
    role: "Founder",
    image: "/images/team/manoharlal-sanghvi.jpg",
    company: "Sanghvi Quality Products Pvt. Ltd.",
    bio: "Pioneered the founding of Sanghvi Quality Products Pvt. Ltd. and Ubichem in 1988 at Barshi, laying the foundation for trustworthy, high-efficacy agricultural crop inputs and farmer prosperity.",
  },
  {
    name: "Mr. Naynesh Sanghvi",
    role: "Managing Director",
    image: "/images/team/naynesh-sanghvi.jpg",
    company: "Sanghvi Quality Products Pvt. Ltd.",
    bio: "Steering operational excellence, manufacturing scalability, advanced bio-formulation technology, and Pan-India market penetration across key agricultural states.",
  },
  {
    name: "Mr. Vinay Sanghvi",
    role: "Chairman",
    image: "/images/team/vinay-sanghvi.jpg",
    company: "Sanghvi Quality Products Pvt. Ltd.",
    bio: "Providing strategic direction, ethical corporate governance, international expansion vision, and enduring commitment to sustainable agricultural research and quality standards.",
  },
];

export const teamMembers: TeamMember[] = leadershipMembers;
