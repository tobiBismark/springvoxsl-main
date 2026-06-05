import {
  Banknote,
  Briefcase,
  Building2,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Radio,
  type LucideIcon,
} from "lucide-react";

export interface IndustryDetail {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  fullDescription: string;
  solutions: string[];
}

export const INDUSTRIES: IndustryDetail[] = [
  {
    id: "government",
    title: "Government & Public Sector",
    icon: Landmark,
    description:
      "Secure digital services, citizen engagement platforms, communication systems, and knowledge management solutions.",
    fullDescription:
      "Government agencies and public sector organizations require robust, secure, and compliant technology solutions. SpringVox provides secure document management systems for handling classified and sensitive information, citizen engagement platforms that simplify public communication, VoIP infrastructure for government operations, and advanced cybersecurity monitoring to protect critical infrastructure. We help government organizations digitize services, improve operational efficiency, and maintain the highest security standards required by public sector regulations.",
    solutions: [
      "Secure document management and retrieval (Rekall IQ)",
      "Citizen communication platforms",
      "VoIP infrastructure and unified communications",
      "Intrusion detection and cybersecurity monitoring (IDS)",
      "Enterprise software for case management",
      "Workflow automation for public services",
    ],
  },
  {
    id: "financial-services",
    title: "Financial Services",
    icon: Banknote,
    description:
      "Customer engagement platforms, secure communications, compliance-focused systems, and process automation.",
    fullDescription:
      "Financial institutions face strict regulatory requirements and must maintain the highest security standards. SpringVox provides contact center solutions (SpringVox Connect) for managing customer inquiries across multiple channels, secure communication systems that meet regulatory compliance, specialized compliance reporting that tracks all interactions for audit purposes, and workflow automation that reduces manual processes and improves accuracy. Our cybersecurity solutions (IDS Platform) monitor for suspicious activities and potential fraud, while our enterprise software helps with customer relationship management and loan processing automation.",
    solutions: [
      "Cloud contact center platform (SpringVox Connect)",
      "Secure communication systems",
      "Compliance-focused reporting and audit trails",
      "Process automation for loan management",
      "Intrusion detection for fraud prevention (IDS)",
      "Custom software for financial operations",
      "Document intelligence for KYC processes",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    description:
      "Patient communication systems, healthcare knowledge management, telephony solutions, and workflow automation.",
    fullDescription:
      "Healthcare organizations must balance patient care with regulatory compliance (HIPAA) and operational efficiency. SpringVox provides patient engagement platforms for appointment scheduling and reminders, healthcare knowledge management systems (Rekall IQ) that help medical staff access protocols and best practices quickly, VoIP solutions for secure internal communications, and workflow automation for patient intake and discharge processes. Our contact center platform enables hospitals and clinics to manage patient inquiries, appointment callbacks, and emergency communications from a single interface.",
    solutions: [
      "Patient communication and engagement platforms",
      "Healthcare knowledge retrieval system (Rekall IQ)",
      "Secure VoIP infrastructure",
      "Contact center for appointment management",
      "Workflow automation for patient intake",
      "HIPAA-compliant documentation systems",
      "Medical staff scheduling and coordination",
    ],
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    icon: Radio,
    description:
      "VoIP infrastructure, PBX solutions, customer support platforms, and communication analytics.",
    fullDescription:
      "Telecom companies require robust infrastructure, scalable solutions, and deep analytics. SpringVox provides enterprise VoIP deployments for carrier-grade voice services, IP PBX solutions (SpringVox PBX) for business communications, customer support platforms (SpringVox Connect) that handle millions of interactions, and advanced communication analytics for performance monitoring. We also provide SIP trunk integration, call quality monitoring, and infrastructure optimization to ensure reliable service delivery across all customer touchpoints.",
    solutions: [
      "VoIP infrastructure deployment and management",
      "Enterprise IP PBX solution (SpringVox PBX)",
      "Cloud contact center platform (SpringVox Connect)",
      "Call analytics and performance reporting",
      "SIP trunk integration and optimization",
      "Network monitoring and quality assurance",
      "Disaster recovery and redundancy",
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    description:
      "Learning management platforms, AI-powered knowledge systems, communication tools, and administrative automation.",
    fullDescription:
      "Educational institutions need systems that improve learning outcomes, streamline administration, and enhance communication. SpringVox provides AI-powered knowledge retrieval systems (Rekall IQ) that help students and educators quickly find policies, curriculum materials, and institutional knowledge, student communication platforms for announcements and alerts, administrative automation for enrollment and course management, and learning analytics that track student progress. Our solutions help universities and schools operate efficiently while providing better services to students and staff.",
    solutions: [
      "AI-powered knowledge management (Rekall IQ)",
      "Student information systems",
      "Communication platforms for announcements",
      "Administrative process automation",
      "Learning analytics and reporting",
      "Custom portals for students and faculty",
      "Virtual classroom and collaboration tools",
    ],
  },
  {
    id: "ngos",
    title: "NGOs & Development Organizations",
    icon: HandHeart,
    description:
      "Knowledge repositories, donor management solutions, collaboration tools, and operational reporting.",
    fullDescription:
      "NGOs and development organizations operate with limited resources and need efficient, cost-effective technology. SpringVox provides secure document repositories (Rekall IQ) for managing program materials, policies, and best practices, donor management systems that track contributions and impact, collaboration tools that enable remote teams to work together effectively, and operational reporting that demonstrates impact to stakeholders. Our solutions help nonprofits maximize their resources and focus on their mission.",
    solutions: [
      "Document retrieval and knowledge management (Rekall IQ)",
      "Donor relationship management systems",
      "Team collaboration and communication tools",
      "Program impact reporting and analytics",
      "Financial tracking and budgeting systems",
      "Volunteer management platforms",
      "Grant management and compliance tracking",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Housing Finance",
    icon: Building2,
    description:
      "Loan management systems, customer communication platforms, document intelligence, and workflow automation.",
    fullDescription:
      "Real estate and housing finance companies handle complex transactions with many stakeholders. SpringVox provides loan management systems that track applications through every stage, customer communication platforms (SpringVox Connect) for agent-client interactions, document intelligence (Rekall IQ) that extracts information from contracts and applications, and workflow automation that reduces processing times. Our solutions help companies close more deals faster, reduce errors, and improve customer satisfaction.",
    solutions: [
      "Loan management and tracking systems",
      "Customer engagement platform (SpringVox Connect)",
      "Document intelligence and OCR (Rekall IQ)",
      "Workflow automation for property transactions",
      "Agent communication and coordination tools",
      "Compliance and regulatory documentation",
      "Customer portals and self-service systems",
    ],
  },
  {
    id: "smes",
    title: "SMEs & Enterprises",
    icon: Briefcase,
    description:
      "Scalable software solutions, business automation, communications infrastructure, and digital transformation services.",
    fullDescription:
      "Small and medium enterprises need scalable, affordable technology that grows with their business. SpringVox provides custom software solutions tailored to specific business needs, communications infrastructure (VoIP and PBX) that rivals larger enterprises, AI-powered automation that reduces manual work, and digital transformation consulting to modernize operations. Our solutions help SMEs compete effectively, improve efficiency, and position themselves for growth.",
    solutions: [
      "Custom software development",
      "Business process automation",
      "VoIP and communication systems",
      "Cloud infrastructure and migration",
      "Enterprise software and ERP solutions",
      "Digital transformation consulting",
      "Systems integration and API development",
    ],
  },
];

export const INDUSTRY_BY_ID = Object.fromEntries(
  INDUSTRIES.map((industry) => [industry.id, industry]),
) as Record<string, IndustryDetail>;
