export interface Product {
  name: string;
  image?: string;
  description?: string;
}

export interface ProductCategory {
  name: string;
  slug: string;
  image: string;
  description: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    name: "Agro Chemicals",
    slug: "agro-chemicals",
    image: "/images/img1.jpg",
    description: "High-efficacy chemical solutions engineered to protect crops from stubborn pests and safeguard overall harvest integrity.",
    products: [
      {
        name: "Uracil Crop Shield",
        description: "Specialized crop protection formulation for broad-spectrum defense against field pests.",
      },
      {
        name: "Pro-Crop Advanced",
        description: "Targeted systemic protection ensuring healthy foliage and pest resistance.",
      },
    ],
  },
  {
    name: "Disease Resistance Products",
    slug: "disease-resistance-products",
    image: "/images/img2.jpg",
    description: "Advanced formulations designed to fortify crops against fungal and bacterial pathogens naturally.",
    products: [
      {
        name: "Bio-Defend Forte",
        description: "Natural elicitor enhancing systemic acquired resistance against fungal infections.",
      },
      {
        name: "Immuno-Guard Ag",
        description: "Botanical formulation protecting vine, fruit, and field crops against blast and mildew.",
      },
    ],
  },
  {
    name: "Humic Acid Fertilisers",
    slug: "humic-acid-fertilisers",
    image: "/images/img4.jpg",
    description: "Organic soil conditioners that improve nutrient uptake, root vitality, and water retention capacity.",
    products: [
      {
        name: "Ubichem Humic 98",
        description: "100% water-soluble potassium humate promoting intense white root proliferation.",
      },
      {
        name: "Fulvi-Max Liquid",
        description: "Chelating soil conditioner enhancing cation exchange capacity and mineral absorption.",
      },
    ],
  },
  {
    name: "Keeping Quality Enhancer",
    slug: "keeping-quality-enhancer",
    image: "/images/img5.jpg",
    description: "Specialized inputs that prolong post-harvest freshness, texture, and market shelf life of agricultural produce.",
    products: [
      {
        name: "Ubi-Shiner Post Harvest",
        description: "Enhances fruit lustre, skin elasticity, and transport endurance for export quality.",
      },
      {
        name: "Anti-Sunstress Protective",
        description: "Reflective and thermo-protective barrier preventing sunburn and dehydration.",
      },
    ],
  },
  {
    name: "Micronutrients Fertilizers",
    slug: "micronutrients-fertilizers",
    image: "/images/img6.jpg",
    description: "Essential trace elements carefully blended to correct nutritional deficiencies and boost metabolic efficiency.",
    products: [
      {
        name: "Power Foliar Grade 2",
        description: "Maharashtra State Grade micronutrient mix for zinc, ferrous, boron, and manganese balance.",
      },
      {
        name: "Micro-Mix Chelated Formula",
        description: "EDTA-chelated trace element package for instantaneous foliar assimilation.",
      },
    ],
  },
  {
    name: "Plant Growth Enhancer",
    slug: "plant-growth-enhancer",
    image: "/images/img7.jpg",
    description: "Biostimulants that accelerate vegetative growth, flowering, and overall resilience against environmental stress.",
    products: [
      {
        name: "Vigor-Grow Biostimulant",
        description: "Bio-active seaweed and amino complex stimulating vegetative flushes and flowering.",
      },
      {
        name: "Yield-Booster Special",
        description: "Cytokinin-active nutrient promoter for flower drop prevention and fruit sizing.",
      },
    ],
  },
  {
    name: "NPK Water Soluble Fertilizer",
    slug: "npk-water-soluble-fertilizer",
    image: "/images/img4.jpg",
    description: "High-purity soluble plant nutrients formulated for drip fertigation and foliar nutrition.",
    products: [
      {
        name: "Ubichem 19:19:19 All Round",
        description: "Balanced drip grade nutrition for continuous vegetative and reproductive stages.",
      },
      {
        name: "Ubichem 00:52:34 Flower Special",
        description: "Mono Potassium Phosphate boosting flower bud initiation and root branching.",
      },
      {
        name: "Ubichem 13:00:45 Fruit Finisher",
        description: "Potassium Nitrate enhancing grain filling, fruit brix, and color development.",
      },
    ],
  },
  {
    name: "Solvents for Agrochemicals",
    slug: "solvents-for-agrochemicals",
    image: "/images/img1.jpg",
    description: "Specialized industrial solvents and carriers ensuring stable emulsion and optimal chemical delivery.",
    products: [
      {
        name: "Agro-Solv Pure Carrier",
        description: "High-purity solvent system for EC formulations ensuring clear dilution and stability.",
      },
    ],
  },
  {
    name: "Spreader & Dispersing Agent",
    slug: "spreader-dispersing-agent",
    image: "/images/img2.jpg",
    description: "Advanced non-ionic wetting agents and penetrants designed for uniform droplet coverage.",
    products: [
      {
        name: "Super-Spread Silicon Adjuvant",
        description: "Organosilicone surfactant reducing surface tension for rapid stomatal infiltration.",
      },
    ],
  },
];

// Featured homepage products
export const homepageProducts = productCategories.filter((c) =>
  [
    "agro-chemicals",
    "disease-resistance-products",
    "humic-acid-fertilisers",
    "keeping-quality-enhancer",
    "micronutrients-fertilizers",
    "plant-growth-enhancer",
  ].includes(c.slug)
);
