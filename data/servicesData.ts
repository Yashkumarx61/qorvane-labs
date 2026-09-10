export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  badge?: string;
  metrics: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Custom Web Development",
    shortDesc: "High-performance enterprise web applications, customer portals, and headless e-commerce architectures built for scale.",
    fullDesc: "We engineer resilient, SEO-optimized, ultra-fast web platforms using modern frameworks like Next.js, React, and Node.js. From complex enterprise dashboards to high-conversion customer web apps, our solutions blend sleek UX with robust backend systems.",
    iconName: "Globe",
    badge: "Most Requested",
    metrics: "Sub-second Page Loads & 99.9% Uptime",
    features: [
      "Next.js App Router & Server Side Rendering (SSR)",
      "Headless CMS & API-first Architecture",
      "Progressive Web Apps (PWA) & Offline Capabilities",
      "Custom Enterprise Admin Dashboards & Roles",
      "Payment Gateway Integrations (Stripe, Razorpay, UPI)",
    ],
    deliverables: [
      "Production-ready codebase with full CI/CD pipeline setup",
      "Custom component design system & pattern library",
      "Automated testing suite & security audit compliance",
      "Complete API documentation and cloud deployment architecture",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
  },
  {
    id: "mobile-dev",
    slug: "mobile-apps",
    title: "Mobile App Engineering",
    shortDesc: "Native iOS/Android apps and cross-platform Flutter & React Native solutions delivering desktop-class performance on mobile.",
    fullDesc: "Empower your business with intuitive, fast, and secure mobile applications. We build native iOS/Android experiences and cost-effective cross-platform solutions that seamlessly interface with hardware, APIs, and offline databases.",
    iconName: "Smartphone",
    badge: "Cross-Platform Experts",
    metrics: "4.8+ Average App Store Rating Standard",
    features: [
      "Cross-Platform Development using Flutter & React Native",
      "Native iOS (Swift) & Android (Kotlin) High-Performance Modules",
      "Biometric Authentication & Hardware Integration",
      "Real-time Push Notifications & Offline Syncing",
      "App Store & Google Play Store Optimization & Publishing",
    ],
    deliverables: [
      "iOS App Store & Android Play Store build submissions",
      "Native device API wrappers and background sync engines",
      "User onboarding flows and analytics telemetry setup",
      "Comprehensive App Store Optimization (ASO) asset package",
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL"],
  },
  {
    id: "ai-data",
    slug: "ai-data",
    title: "AI & Intelligent Data Solutions",
    shortDesc: "Bespoke AI model integrations, LLM fine-tuning, automated data pipelines, and intelligent workflow agents.",
    fullDesc: "Transform raw organizational data into actionable intelligence. We design custom AI agents, fine-tune Large Language Models (LLMs) on enterprise knowledge bases, and automate repetitive workflows to slash operating costs and unlock competitive advantages.",
    iconName: "Sparkles",
    badge: "Enterprise AI",
    metrics: "Up to 60% Reduction in Operational Overhead",
    features: [
      "Custom LLM Fine-Tuning & Retrieval-Augmented Generation (RAG)",
      "Autonomous AI Agents for Customer Support & Operations",
      "Computer Vision & Document Processing Automation",
      "Automated ETL Pipelines & Vector Database Setup",
      "Enterprise AI Governance, Guardrails & Privacy Controls",
    ],
    deliverables: [
      "Custom RAG pipeline configured for internal knowledge bases",
      "Autonomous agent execution engines with human-in-the-loop controls",
      "Data ingestion, cleaning, and vector embedding pipelines",
      "Interactive AI telemetry dashboard monitoring token usage & accuracy",
    ],
    technologies: ["Python", "PyTorch", "LangChain", "OpenAI / Claude API", "Pinecone", "Milvus", "FastAPI", "Docker"],
  },
  {
    id: "analytics",
    slug: "business-analytics",
    title: "Business Analytics & BI",
    shortDesc: "Real-time executive dashboards, automated KPI telemetry, predictive tracking, and enterprise data warehousing.",
    fullDesc: "Stop operating in the dark. We unify scattered business data from CRMs, ERPs, billing systems, and web analytics into unified, real-time executive dashboards powered by automated data warehouses.",
    iconName: "BarChart3",
    badge: "Real-Time Telemetry",
    metrics: "100% Unified Business Visibility",
    features: [
      "Real-time Executive & Operational KPI Dashboards",
      "Custom Data Warehousing on Snowflake, BigQuery & Redshift",
      "Automated Multi-Channel Sales & Financial Reconciliation",
      "Predictive Customer Churn & Inventory Forecasting Models",
      "Role-based Granular Access Control & Exporting Tools",
    ],
    deliverables: [
      "Centralized cloud data warehouse architecture",
      "Interactive PowerBI / Metabase / Tableau dashboard suites",
      "Automated scheduled PDF/Slack report distribution systems",
      "Data governance and compliance documentation",
    ],
    technologies: ["PowerBI", "Metabase", "Snowflake", "Google BigQuery", "PostgreSQL", "dbt", "Python", "React"],
  },
  {
    id: "managed-it",
    slug: "managed-it",
    title: "Managed IT & Cloud Support",
    shortDesc: "24/7 cloud infrastructure management, DevOps automation, cybersecurity hygiene, and disaster recovery.",
    fullDesc: "Ensure zero-downtime reliability for your critical digital assets. Our managed IT services provide round-the-clock monitoring, automated infrastructure scaling, proactive security patching, and rapid incident response.",
    iconName: "ShieldCheck",
    badge: "24/7 Uptime SLA",
    metrics: "99.99% Infrastructure Uptime Guaranteed",
    features: [
      "DevOps Automation (CI/CD, Terraform, Kubernetes)",
      "Cloud Cost Optimization & AWS/GCP/Azure Governance",
      "24/7 Automated Health Telemetry & Incident Escalation",
      "Cybersecurity Audits, Penetration Testing & Patching",
      "Disaster Recovery Protocols & Automated Multi-Region Backups",
    ],
    deliverables: [
      "Infrastructure-as-Code (IaC) templates (Terraform / Pulumi)",
      "24/7 SOC monitoring dashboard & incident response runbooks",
      "Cloud spending optimization report (average 30% cost savings)",
      "Disaster recovery drill validation report",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
  },
];
