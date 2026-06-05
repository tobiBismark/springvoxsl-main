import {
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Lock,
  Smartphone,
  Network,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored business applications built to fit your workflows and integrations.",
    fullDescription:
      "We design and develop tailored software solutions that align with your business processes, operational requirements, and strategic objectives. Our custom software development service goes beyond off-the-shelf solutions to create applications specifically designed for your organization. We work closely with your team to understand your unique challenges, then build enterprise-grade applications that streamline operations, reduce manual work, and integrate seamlessly with your existing systems.",
    icon: Code2,
    features: [
      "Enterprise applications built to your specifications",
      "Business process automation to eliminate manual work",
      "Workflow management systems for complex operations",
      "Customer portals for self-service interactions",
      "Internal management systems for operations",
      "ERP integrations for unified data",
      "API development for third-party connectivity",
      "SaaS platforms for scalable delivery",
      "Database design for performance and reliability",
      "Reporting systems for data-driven decisions",
    ],
  },
  {
    id: "voip-communication",
    title: "VoIP & Communication Systems",
    description: "End-to-end voice infrastructure for distributed teams and customer operations.",
    fullDescription:
      "We deliver modern communication solutions that help organizations connect employees, customers, and stakeholders efficiently. Our VoIP and communication systems provide reliable, scalable voice infrastructure whether you're managing internal team communications, customer support operations, or branch office connectivity. We handle complete deployment, configuration, and ongoing optimization to ensure your communication infrastructure supports business growth.",
    icon: Network,
    features: [
      "Full VoIP deployment and configuration",
      "SIP trunk integration with carriers",
      "Unified communications platform",
      "Call center solutions for customer operations",
      "IP PBX deployment and management",
      "Softphone solutions for remote work",
      "Communication audits and optimization",
      "Multi-branch connectivity and failover",
      "Call recording and quality monitoring",
      "Infrastructure optimization for performance",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Intrusion detection, monitoring, and security visibility across your network.",
    fullDescription:
      "Protect your organization against cyber threats through proactive security assessments, monitoring, and security architecture design. Our cybersecurity solutions provide comprehensive threat detection, continuous monitoring, and incident response capabilities. We help organizations identify vulnerabilities before attackers do, maintain visibility across network activity, and respond quickly to security incidents. Our approach combines technology deployment with security awareness training.",
    icon: Lock,
    features: [
      "Vulnerability assessments and penetration testing",
      "Comprehensive security audits",
      "Intrusion detection system deployment (IDS)",
      "Continuous security monitoring and alerting",
      "Threat analysis and incident response",
      "Security awareness programs for staff",
      "Security architecture design and consulting",
      "Risk assessments and compliance planning",
      "Malware and anomaly detection",
      "Security policy development and enforcement",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation Solutions",
    description: "Document AI, retrieval, and automation for knowledge-heavy operations.",
    fullDescription:
      "Leverage artificial intelligence and automation technologies to improve efficiency, decision-making, and operational performance. Our AI and automation solutions transform knowledge-heavy operations by making information instantly accessible and automating repetitive tasks. From document intelligence that extracts data from unstructured files to workflow automation that eliminates manual handoffs, we help organizations reduce costs, improve accuracy, and free up staff for higher-value work.",
    icon: Cpu,
    features: [
      "Enterprise AI assistants for knowledge access",
      "Document intelligence and OCR processing",
      "Workflow automation for repetitive tasks",
      "Intelligent chatbots for customer service",
      "AI-powered search and retrieval (Rekall IQ)",
      "Predictive analytics for forecasting",
      "Intelligent reporting and insights",
      "Process automation and business rules",
      "Natural language processing",
      "Machine learning model training and deployment",
    ],
  },
  {
    id: "web-development",
    title: "Web Application Development",
    description: "Modern, secure web platforms for internal and customer-facing services.",
    fullDescription:
      "Build modern, scalable web applications that support business growth and digital transformation. Our web development service creates responsive, secure applications that work flawlessly across devices and browsers. From corporate websites that showcase your brand to complex SaaS platforms with thousands of users, we build web applications that deliver results. We use the latest technologies and best practices to ensure your application is fast, secure, and easy to maintain.",
    icon: Globe,
    features: [
      "Corporate websites and branding",
      "Customer portals for self-service",
      "SaaS applications with user management",
      "Business applications and tools",
      "Responsive design for all devices",
      "Progressive Web Apps for offline capability",
      "API integrations with third parties",
      "Admin dashboards and reporting",
      "User authentication and authorization",
      "Performance optimization and CDN integration",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    description: "Native and cross-platform applications optimized for engagement and performance.",
    fullDescription:
      "Design and develop mobile applications that deliver seamless user experiences across devices. Our mobile development service creates applications for iOS and Android platforms, or cross-platform solutions that reach both audiences with a single codebase. We focus on user experience, performance, and reliability to ensure your app stands out in competitive app stores.",
    icon: Smartphone,
    features: [
      "Native Android applications",
      "Native iOS applications",
      "Cross-platform applications",
      "Business mobile apps and tools",
      "Customer engagement and loyalty apps",
      "Mobile dashboards and analytics",
      "Push notifications and alerts",
      "API integrations",
      "App store deployment and optimization",
      "Offline functionality and data sync",
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Services",
    description: "Design, deploy, and manage cloud-native infrastructure for scale and resilience.",
    fullDescription:
      "Build secure, scalable, and resilient cloud environments that support modern enterprise workloads. Our cloud infrastructure service handles everything from migrating existing applications to designing cloud-native architectures. We work with AWS and Azure to create high-availability systems with automatic failover, disaster recovery, and performance optimization. Your infrastructure scales automatically to handle demand while optimizing costs.",
    icon: Cloud,
    features: [
      "AWS deployment and optimization",
      "Azure deployment and management",
      "Cloud migration from on-premise systems",
      "Cloud security and compliance",
      "High availability and redundancy",
      "Disaster recovery and backup",
      "Infrastructure as Code automation",
      "Continuous monitoring and alerts",
      "Cost optimization and right-sizing",
      "Multi-region deployment",
    ],
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    description: "Connect existing systems, vendors, and data sources into a single workflow.",
    fullDescription:
      "Connect business applications and systems to create a unified technology ecosystem. Our systems integration service breaks down data silos by connecting your CRM, ERP, accounting software, communication platforms, and other business systems. Data flows seamlessly between systems, manual data entry is eliminated, and your team has a single view of all business information.",
    icon: Boxes,
    features: [
      "CRM integration and sync",
      "ERP integration and data mapping",
      "API development and integration",
      "Payment gateway integration",
      "Communication platform integration",
      "Real-time data synchronization",
      "Workflow integration and automation",
      "Third-party vendor integration",
      "Data transformation and mapping",
      "Error handling and monitoring",
    ],
  },
  {
    id: "consulting",
    title: "IT Consulting & Digital Transformation",
    description: "Architecture reviews, technology selection, and digital transformation planning.",
    fullDescription:
      "Help organizations identify technology opportunities and implement solutions that drive business value. Our IT consulting service helps you navigate the complex technology landscape, make informed decisions, and execute transformation initiatives. We assess your current state, define your target vision, and create a roadmap with realistic timelines and resource requirements.",
    icon: Users,
    features: [
      "Technology strategy and roadmap",
      "Digital transformation planning",
      "IT assessments and gap analysis",
      "Solution architecture and design",
      "Vendor evaluation and selection",
      "Technology capability development",
      "Business process optimization",
      "Change management support",
      "Organizational alignment",
      "Competitive analysis and benchmarking",
    ],
  },
  {
    id: "support-maintenance",
    title: "Support & Managed Services",
    description: "Ongoing operations, patches, monitoring, and incident response.",
    fullDescription:
      "Provide ongoing support, maintenance, monitoring, and management of critical business systems. Our support and managed services ensure your systems run smoothly 24/7. We handle security updates, performance monitoring, incident response, and proactive optimization so you can focus on your business.",
    icon: Wrench,
    features: [
      "24/7 technical support and helpdesk",
      "System monitoring and alerting",
      "Preventive maintenance services",
      "Security patches and updates",
      "Performance optimization",
      "Incident management and resolution",
      "Managed infrastructure services",
      "SLA-based support guarantees",
      "Regular health checks and reporting",
      "Capacity planning and growth support",
    ],
  },
];

export const SERVICE_BY_ID = Object.fromEntries(
  SERVICES.map((service) => [service.id, service]),
) as Record<string, ServiceDetail>;
