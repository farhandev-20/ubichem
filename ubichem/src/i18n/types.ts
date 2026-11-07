export type Language = 'en' | 'mr' | 'hi';

export interface NavItemTranslation {
  label: string;
  children?: { label: string; href: string }[];
}

export interface Translations {
  common: {
    call: string;
    tollFree: string;
    email: string;
    location: string;
    lang: string;
    home: string;
    readMore: string;
    exploreProducts: string;
    viewAll: string;
    learnMore: string;
    contactUs: string;
    enquireNow: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    required: string;
    chatWhatsApp: string;
    adminPortal: string;
    allRightsReserved: string;
  };
  nav: {
    home: string;
    profile: string;
    ourProfile: string;
    ourTeam: string;
    awareness: string;
    services: string;
    awards: string;
    clients: string;
    range: string;
    products: string;
    gallery: string;
    enquiry: string;
    contact: string;
  };
  categories: Record<string, {
    name: string;
    description: string;
    products?: { name: string; description: string }[];
  }>;
  home: {
    heroBadge: string;
    heroHeading: string;
    heroSubheading: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    welcomeKicker: string;
    welcomeHeading: string;
    welcomeText: string;
    welcomeCta: string;
    welcomeBadgeYear: string;
    welcomeBadgeTrust: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    goalTitle: string;
    goalText: string;
    productsKicker: string;
    productsHeading: string;
    productsSubheading: string;
    viewAllCategories: string;
    exploreFormulations: string;
    leadershipKicker: string;
    leadershipHeading: string;
    leadershipSubheading: string;
    leaders: { name: string; role: string; company: string; image: string }[];
    chairmanName: string;
    chairmanRole: string;
    chairmanCompany: string;
    certsKicker: string;
    certsHeading: string;
    certsSubheading: string;
    certsHint: string;
    disclaimerLabel: string;
    disclaimerText: string;
  };
  about: {
    title: string;
    heading: string;
    subtitle: string;
    establishedBadge: string;
    story: string[];
    stats: { value: string; label: string }[];
    qualityTitle: string;
    qualityText: string;
    goalTitle: string;
    goalText: string;
  };
  team: {
    title: string;
    heading: string;
    subtitle: string;
    members: { name: string; role: string; bio: string }[];
  };
  awareness: {
    title: string;
    heading: string;
    subtitle: string;
    programmes: { title: string; description: string; frequency: string; location: string }[];
  };
  services: {
    title: string;
    heading: string;
    subtitle: string;
    servicesList: { title: string; description: string }[];
  };
  awards: {
    title: string;
    heading: string;
    subtitle: string;
    items: { year: string; title: string; description: string }[];
  };
  clients: {
    title: string;
    heading: string;
    subtitle: string;
    testimonials: { quote: string; author: string; location: string; crop: string }[];
  };
  range: {
    title: string;
    heading: string;
    subtitle: string;
    intro: string;
  };
  gallery: {
    title: string;
    heading: string;
    subtitle: string;
    all: string;
    fieldOps: string;
    horticulture: string;
    formulations: string;
    fieldTrials: string;
    products: string;
  };
  forms: {
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    state: string;
    statePlaceholder: string;
    district: string;
    districtPlaceholder: string;
    cropType: string;
    cropTypePlaceholder: string;
    acreage: string;
    acreagePlaceholder: string;
    productCategory: string;
    selectCategory: string;
    message: string;
    messagePlaceholder: string;
    submitEnquiry: string;
    sendMessage: string;
    enquirySuccess: string;
    contactSuccess: string;
    enquiryCardTitle: string;
    enquiryCardSubtitle: string;
  };
  footer: {
    about: string;
    categoriesTitle: string;
    quickLinksTitle: string;
    contactTitle: string;
    address: string;
    phone: string;
    email: string;
  };
}

