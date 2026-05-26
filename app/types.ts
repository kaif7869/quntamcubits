export type NavLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type StepItem = {
  step: string;
  title: string;
  summary: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type SocialItem = {
  name: string;
  href: string;
};
