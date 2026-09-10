export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  role: string;
  liveUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  keyMetric: string;
  metricsList: { label: string; value: string }[];
  technologies: string[];
  featured: boolean;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  architectureHighlights: string[];
}

export const portfolioData: CaseStudy[] = [
  {
    id: "red-chilli",
    slug: "red-chilli-billing-dashboard",
    title: "Red Chilli - Billing & Operational Dashboard",
    client: "Red Chilli Group",
    industry: "Retail & Restaurant Tech / Point-of-Sale (POS) System",
    role: "Custom full-stack billing and inventory operations platform.",
    liveUrl: "https://redchilli-frontend.onrender.com/",
    summary: "A high-concurrency cloud POS system featuring real-time order management, dynamic tax & discount calculation, low-latency digital receipt generation, and daily sales reconciliation telemetry.",
    challenge: "Red Chilli suffered from manual billing bottlenecks during peak operational hours, disjointed inventory tracking across counters, and delayed daily financial reconciliation.",
    solution: "Qorvane Labs designed and deployed a low-latency, role-based cloud POS and operational dashboard. Featuring instant receipt generation, automated inventory syncing, and daily reconciliation telemetry.",
    keyMetric: "45% reduction in checkout turnaround time",
    metricsList: [
      { label: "Checkout Queue Speed", value: "45% Faster" },
      { label: "Daily Order Volume", value: "15,000+ Txns" },
      { label: "Reconciliation Delay", value: "Reduced to 0 Mins" },
      { label: "System Uptime", value: "99.98%" },
    ],
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "Render", "REST APIs"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote: "Qorvane Labs transformed our peak-hour nightmare into a smooth, 1-click operation. The queue reduction directly increased our daily sales capacity.",
      author: "Operations Director",
      role: "Red Chilli Group",
    },
    architectureHighlights: [
      "Offline-first sync engine allowing uninterrupted billing during network flickering",
      "WebSocket real-time order status broadcasting to kitchen display units (KDU)",
      "Automated tax compliance & multi-payment gateway integration (UPI, Cards, Cash)",
    ],
  },
  {
    id: "basking-bakery",
    slug: "basking-bakery-ecommerce",
    title: "Basking Bakery - Artisanal Storefront & Brand Experience",
    client: "Basking Bakery Artisanal",
    industry: "Direct-to-Consumer / Artisanal Food & E-Commerce",
    role: "High-performance storefront website and digital product catalog.",
    liveUrl: "https://yashkumarx61.github.io/Basking-Bakery-WEB/",
    summary: "An artisanal storefront featuring an interactive menu showcase, brand discovery funnels, responsive product visualizer, and blazing fast load times.",
    challenge: "Basking Bakery lacked a dedicated digital storefront, relying on manual phone/WhatsApp orders that limited revenue scale and resulted in lost customized order specifications.",
    solution: "We engineered a visually stunning D2C web platform featuring an interactive product visualizer, automated slot booking for customized bakery items, integrated local delivery radius validation, and multi-currency checkout.",
    keyMetric: "2.8x increase in direct digital inbound orders",
    metricsList: [
      { label: "Inbound Digital Orders", value: "2.8x Growth" },
      { label: "Page Load Time", value: "0.6 Seconds" },
      { label: "Conversion Rate", value: "4.2%" },
      { label: "Custom Bookings", value: "+320% MoM" },
    ],
    technologies: ["HTML5", "Modern JavaScript", "Responsive CSS", "GitHub Pages", "UI/UX Design"],
    featured: true,
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote: "The interactive site created by Qorvane Labs gave us an online brand image that competes with international bakeries. Orders flooded in from day one.",
      author: "Founder & Head Chef",
      role: "Basking Bakery",
    },
    architectureHighlights: [
      "Sub-second page loads with mobile-first responsive architecture",
      "Interactive visual product catalog for bespoke artisanal bakery ordering",
      "Optimized conversion funnels with direct WhatsApp order routing",
    ],
  },
  {
    id: "detailing-raja",
    slug: "detailing-raja-automotive-studio",
    title: "Detailing Raja - Automotive Studio & Booking Portal",
    client: "Detailing Raja Automotive Studio",
    industry: "Automotive Detailing & Luxury Car Care Services",
    role: "High-converting premium brand website and service catalog.",
    liveUrl: "https://detailing-raja-automotive-studio-we.vercel.app/",
    summary: "A luxury automotive studio portal featuring Paint Protection Film (PPF), ceramic coating, bespoke interior detailing packages, before-and-after work showcases, and direct customer quote requests.",
    challenge: "Detailing Raja needed a high-end luxury digital brand identity to communicate premium detailing services (PPF & Ceramic Coating) and capture high-value customer inquiries.",
    solution: "Designed and engineered an ultra-sleek, dark-mode luxury studio web application with interactive package builders, gallery visualizers, and direct WhatsApp quote request integration.",
    keyMetric: "3.4x boost in online service inquiries & quote bookings",
    metricsList: [
      { label: "Inbound Quote Requests", value: "3.4x Growth" },
      { label: "High-Ticket PPF Conversions", value: "+180%" },
      { label: "Mobile Engagement", value: "88% Mobile Users" },
      { label: "Deployment Speed", value: "Vercel Edge SLA" },
    ],
    technologies: ["Next.js / React", "Tailwind CSS", "Vercel Edge Deployment", "Modern Web Animations"],
    featured: true,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
    testimonial: {
      quote: "Qorvane Labs gave Detailing Raja the luxury aesthetics our studio deserved. Customers book PPF and ceramic coating packages directly after visiting the portal.",
      author: "Managing Director",
      role: "Detailing Raja Studio",
    },
    architectureHighlights: [
      "High-contrast luxury dark UI design with dynamic micro-interactions",
      "Interactive before-and-after image slider highlighting ceramic coating results",
      "Instant WhatsApp & phone quote intake integration",
    ],
  },
];
