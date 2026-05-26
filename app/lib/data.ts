import type { NavLink, PricingPlan, ProjectItem, ServiceItem, SocialItem, StepItem, TestimonialItem } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: ServiceItem[] = [
  {
    title: "Website Development",
    description: "High-performance websites with conversion-focused layouts and modern interactions.",
    icon: "Code",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    title: "Mobile App Development",
    description: "Native-level experiences for iOS and Android with scalable architecture.",
    icon: "Smartphone",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Custom Software",
    description: "Enterprise-grade applications built to solve complex business challenges.",
    icon: "Server",
    accent: "from-sky-400 to-cyan-400",
  },
  {
    title: "AI Chatbots",
    description: "Conversational agents, automation workflows, and intelligent support systems.",
    icon: "MessageCircle",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    title: "UI/UX Design",
    description: "Futuristic interfaces with intuitive interactions and polished branding.",
    icon: "Palette",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    title: "Cloud Solutions",
    description: "Secure cloud architecture, deployment automation, and cost-optimized scaling.",
    icon: "Cloud",
    accent: "from-slate-500 to-sky-500",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Lokmanya Software",
    category: "Web App",
    description: "Modern SaaS analytics dashboard for financial operations and forecasting.",
    tags: ["Dashboard", "SaaS", "React"],
    image: "/project-1.jpg",
  },
  {
    title: "E-Commerce",
    category: "Mobile App",
    description: "Patient engagement and telehealth app with seamless cross-platform UX.",
    tags: ["Health", "Flutter", "Mobile"],
    image: "/project-2.jpg",
  },
  {
    title: "Lokmaya Software",
    category: "Enterprise Software",
    description: "Executive intelligence portal for data-driven decision making.",
    tags: ["Analytics", "Cloud", "AI"],
    image: "/project-3.jpg",
  },
  {
    title: "Expritmart",
    category: "Website",
    description: "Premium brand presence with immersive visuals and onboarding flow.",
    tags: ["Web", "Design", "Marketing"],
    image: "/project-4.jpg",
  },
  {
    title: "Zen Commerce Platform",
    category: "Software",
    description: "Retail workflow system for product management and customer fulfillment.",
    tags: ["Commerce", "API", "Cloud"],
    image: "/project-5.jpg",
  },
  {
    title: "Lumen Chat Assistant",
    category: "AI Product",
    description: "Smart assistant with knowledge search and automated support.",
    tags: ["Chatbot", "AI", "Automation"],
    image: "/project-6.jpg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Belgaum Fashion Hub",
    role: "Owner, Belgaum Fashion Hub",
    quote: "QuntamCubits transformed our product vision into a polished experience faster than we imagined.",
    rating: 5,
    avatar: "/logo/avatar.jpeg",
  },
  {
    name: "Ethan Chaudhry",
    role: "Founder, Starlight Systems",
    quote: "Their team delivered a seamless app with stunning design and exceptional performance.",
    rating: 5,
    avatar: "/logo/avatar.jpeg",
  },
  {
    name: "Leila Moreno",
    role: "Head of Growth, Atlas Labs",
    quote: "The sprint cadence, creative execution, and quality made the decision to partner obvious.",
    rating: 5,
    avatar: "/logo/avatar.jpeg",
  },
];

export const processSteps: StepItem[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    summary: "Align product goals with business outcomes and technical scope.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    summary: "Craft polished interfaces and immersive interactions with brand-first visuals.",
  },
  {
    step: "03",
    title: "Development",
    summary: "Build performant, scalable experiences using modern web and mobile stacks.",
  },
  {
    step: "04",
    title: "Testing",
    summary: "Validate quality across devices, accessibility, and edge scenarios.",
  },
  {
    step: "05",
    title: "Deployment",
    summary: "Launch secure, monitored infrastructure with fast CI/CD pipelines.",
  },
  {
    step: "06",
    title: "Support",
    summary: "Deliver continuous improvement, updates, and maintenance support.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹22k",
    description:
      "Perfect for static websites, portfolio sites, and early-stage startup launches.",
    features: [
      "Static website development",
      "Landing page design",
      "Responsive UI design",
      "Basic SEO setup",
      "1 month support",
    ],
  },
  {
    name: "Professional",
    price: "₹55k",
    description:
      "A premium package for dynamic websites, mobile apps, and scalable business solutions.",
    features: [
      "Dynamic website development",
      "Custom mobile app development",
      "Admin dashboard integration",
      "Database integration",
      "Cloud deployment setup",
      "3 months support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Tailored software solutions for enterprises, SaaS platforms, and large-scale systems.",
    features: [
      "Custom software development",
      "Enterprise web applications",
      "Advanced API integrations",
      "Scalable cloud architecture",
      "Dedicated engineering support",
      "Ongoing maintenance & retainers",
    ],
  },
];

export const socialLinks: SocialItem[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-kaif-devalapur-948929222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Dribbble", href: "https://dribbble.com" },
];
