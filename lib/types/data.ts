// Data types for W Spa content

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ResponsiveImageData extends ImageData {
  desktop?: string;
  mobile?: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

// Home Page Types
export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: ResponsiveImageData;
  cta: CTAButton;
}

export interface ServiceGridItem {
  id: string;
  title: string;
  href: string;
  image: ImageData;
}

export interface CallToActionSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageData;
  cta: CTAButton;
}

export interface HomePageData {
  hero: {
    slides: HeroSlide[];
  };
  intro: {
    preTitle: string;
    title: string;
    description: string;
  };
  services: {
    grid: ServiceGridItem[];
  };
  callToAction: CallToActionSection[];
}

// Treatments Page Types
export interface Treatment {
  id: number;
  name: string;
  description: string;
  price: number;
  bookingLink: string;
  giftLink: string;
}

export interface TreatmentSection {
  id: string;
  preTitle: string;
  title: string;
  treatments: Treatment[];
}

export interface TreatmentsPageData {
  pageTitle: {
    title: string;
    backgroundImage: string;
  };
  sections: TreatmentSection[];
  callToAction: {
    preTitle: string;
    title: string;
    cta: CTAButton;
    backgroundImage: string;
  };
}

// Circuits Page Types
export interface CircuitService {
  type: 'treatment' | 'circuit' | 'gastronomy';
  text: string;
  subServices?: string[];
}

export interface CircuitPricing {
  description: string;
  price: number;
  priceNote?: string;
  link: string;
}

export interface Circuit {
  id: string;
  title: string;
  duration: string;
  badge?: string;
  image: ImageData;
  services: CircuitService[];
  pricing: CircuitPricing[];
}

export interface CircuitsPageData {
  pageTitle: {
    title: string;
    backgroundImage: string;
  };
  circuits: Circuit[];
  callToAction: {
    title: string;
    cta: CTAButton;
    backgroundImage: string;
  };
}

// Memberships Page Types
export interface Membership {
  id: string;
  name: string;
  validity: number;
  price: number;
  image: ImageData;
  treatments: string[];
  link: string;
}

export interface WaterCircuitPricing {
  title: string;
  options: {
    duration: string;
    price: number;
  }[];
}

export interface MembershipsPageData {
  pageTitle: {
    title: string;
    backgroundImage: string;
  };
  memberships: Membership[];
  waterCircuit: {
    title: string;
    validity: string;
    guestPricing: WaterCircuitPricing;
    externalPricing: WaterCircuitPricing;
  };
  callToAction: {
    preTitle: string;
    title: string;
    cta: CTAButton;
    backgroundImage: string;
  };
}

// Contact Page Types
export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
  link?: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface Policy {
  title: string;
  content: string;
}

export interface ContactPageData {
  pageTitle: {
    title: string;
    backgroundImage: string;
  };
  contact: {
    title: string;
    map: {
      embedUrl: string;
    };
    info: ContactInfo[];
    social: SocialLink[];
  };
  policies: Policy[];
}

// Terms Page Types
export interface TermsSection {
  subtitle: string;
  text: string;
}

export interface TermsPageData {
  pageTitle: {
    title: string;
    backgroundImage: string;
  };
  sections: {
    title: string;
    content: TermsSection[];
  }[];
}

// Content Pages Union Type
export type PageData =
  | HomePageData
  | TreatmentsPageData
  | CircuitsPageData
  | MembershipsPageData
  | ContactPageData
  | TermsPageData;
