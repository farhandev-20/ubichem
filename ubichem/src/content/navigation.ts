export const navigation = {
  logo: {
    src: "/images/logo.png",
    alt: "Ubichem Logo",
    brandName: "UBICHEM",
    tagline: "Sanghvi Quality Products",
  },
  items: [
    {
      label: "Home",
      href: "/",
      icon: true,
    },
    {
      label: "Profile",
      href: "/about",
      children: [
        { label: "Our Profile", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Awareness Programme", href: "/awareness" },
        { label: "Our Services", href: "/services" },
        { label: "Awards And Achievements", href: "/awards" },
        { label: "Client Satisfaction", href: "/clients" },
        { label: "Our Product Range", href: "/range" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Agro Chemicals", href: "/products/agro-chemicals" },
        { label: "Disease Resistance Products", href: "/products/disease-resistance-products" },
        { label: "Humic Acid Fertilisers", href: "/products/humic-acid-fertilisers" },
        { label: "Keeping Quality Enhancer", href: "/products/keeping-quality-enhancer" },
        { label: "Micronutrients Fertilizers", href: "/products/micronutrients-fertilizers" },
        { label: "NPK Water Soluble Fertilizer", href: "/products/npk-water-soluble-fertilizer" },
        { label: "Plant Growth Enhancer", href: "/products/plant-growth-enhancer" },
        { label: "Solvents for Agrochemicals", href: "/products/solvents-for-agrochemicals" },
        { label: "Spreader & Dispersing Agent", href: "/products/spreader-dispersing-agent" },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Enquiry",
      href: "/enquiry",
    },
    {
      label: "Contact us",
      href: "/contact",
    },
  ],
};
