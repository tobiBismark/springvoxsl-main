import {
  ArrowRightLeft,
  Brain,
  Headphones,
  type LucideIcon,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

export interface SolutionDetail {
  slug: "rekall-iq" | "springvox-connect" | "springvox-pbx" | "ids-cybersecurity";
  path:
    | "/solutions/rekall-iq"
    | "/solutions/springvox-connect"
    | "/solutions/springvox-pbx"
    | "/solutions/ids-cybersecurity";
  name: string;
  shortName: string;
  sub: string;
  icon: LucideIcon;
  tagline: string;
  desc: string;
  pageTitle: string;
  metaDescription: string;
  benefits: string[];
  features: string[];
  useCases: string[];
  primaryCta: string;
  secondaryCta: string;
  statLabel: string;
  statValue: string;
}

export const SOLUTIONS: SolutionDetail[] = [
  {
    slug: "rekall-iq",
    path: "/solutions/rekall-iq",
    name: "Rekall IQ",
    shortName: "Rekall IQ",
    sub: "Enterprise Document Retrieval AI",
    icon: Brain,
    tagline:
      "Transform your organization's documents into a secure, intelligent knowledge assistant.",
    desc: "Rekall IQ enables employees to retrieve accurate answers from policies, manuals, reports, contracts, SOPs, and internal knowledge repositories using natural language. Transform your organization's documents into a secure, intelligent knowledge assistant.",
    pageTitle: "Rekall IQ — Enterprise Document Retrieval AI | SpringVox",
    metaDescription:
      "Discover Rekall IQ, SpringVox's enterprise document retrieval AI for secure knowledge search, source-grounded answers, and private internal intelligence.",
    benefits: [
      "Reduce time spent searching for information",
      "Improve employee productivity",
      "Eliminate knowledge silos",
      "Ensure information accuracy",
      "Preserve institutional knowledge",
    ],
    features: [
      "AI-powered document search",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Source-cited answers",
      "Multi-document knowledge retrieval",
      "Semantic search",
      "Role-based access control",
      "Department-specific knowledge bases",
      "Private AI deployment options",
      "Document version tracking",
      "Multi-tenant architecture",
      "Knowledge analytics and reporting",
      "Secure document storage",
      "OCR for scanned documents",
      "Voice-to-text knowledge queries",
      "User activity auditing",
    ],
    useCases: [
      "Operations teams retrieving SOPs and policy guidance",
      "NGOs and public-sector teams navigating large document archives",
      "HR, legal, and compliance teams answering internal knowledge queries",
    ],
    primaryCta: "Request a Rekall IQ Demo",
    secondaryCta: "Explore All Solutions",
    statLabel: "Knowledge Retrieval",
    statValue: "Source-backed AI",
  },
  {
    slug: "springvox-connect",
    path: "/solutions/springvox-connect",
    name: "SpringVox Connect",
    shortName: "Connect",
    sub: "Cloud Contact Center Platform",
    icon: Headphones,
    tagline: "A modern customer engagement platform for managing interactions across all channels.",
    desc: "SpringVox Connect enables organizations to manage customer interactions across voice, email, chat, social media, and messaging channels from a single interface. A modern customer engagement platform that enables organizations to manage customer interactions across voice, email, chat, social media, and messaging channels from a single interface.",
    pageTitle: "SpringVox Connect — Cloud Contact Center Platform | SpringVox",
    metaDescription:
      "Explore SpringVox Connect, a cloud contact center platform with IVR, call routing, agent dashboards, omnichannel engagement, and reporting.",
    benefits: [
      "Improve customer experience",
      "Increase agent productivity",
      "Reduce operational costs",
      "Gain real-time visibility into operations",
    ],
    features: [
      "Inbound call management",
      "Outbound call management",
      "Interactive Voice Response (IVR)",
      "Automatic Call Distribution (ACD)",
      "Call recording",
      "Queue management",
      "Call transfer",
      "Call monitoring",
      "Conference calling",
      "Voicemail",
      "Predictive dialer",
      "Progressive dialer",
      "Preview dialer",
      "Power dialer",
      "WhatsApp integration",
      "Email management",
      "SMS communication",
      "Web chat",
      "Facebook integration",
      "Instagram integration",
      "Unified customer inbox",
      "Agent management",
      "Team management",
      "Shift scheduling",
      "Performance tracking",
      "Quality monitoring",
      "Real-time dashboards",
      "Historical reporting",
      "Agent performance metrics",
      "Queue analytics",
      "SLA monitoring",
      "Customer interaction insights",
      "Call transcription",
      "Conversation summaries",
      "Sentiment analysis",
      "Agent assist suggestions",
      "Knowledge recommendations",
    ],
    useCases: [
      "Customer support and service desks",
      "Collections, outreach, and appointment teams",
      "Multi-site organizations managing high call volumes",
    ],
    primaryCta: "Book a SpringVox Connect Walkthrough",
    secondaryCta: "Talk to Our Team",
    statLabel: "Customer Engagement",
    statValue: "Omnichannel Ready",
  },
  {
    slug: "springvox-pbx",
    path: "/solutions/springvox-pbx",
    name: "SpringVox PBX",
    shortName: "PBX",
    sub: "Enterprise IP PBX Solution",
    icon: PhoneCall,
    tagline: "A robust business communication system for reliable voice communications.",
    desc: "A robust business communication system designed to provide reliable voice communications for organizations of all sizes. SpringVox PBX is a ready-to-deploy IP PBX solution configured per client, with the routing, extensions, recordings, trunks, and branch connectivity needed for enterprise voice operations.",
    pageTitle: "SpringVox PBX — Enterprise IP PBX Deployment | SpringVox",
    metaDescription:
      "Learn about SpringVox PBX, an enterprise IP PBX deployment solution with IVR, extensions, SIP trunking, recordings, and multi-branch connectivity.",
    benefits: [
      "Reduce communication costs",
      "Improve business collaboration",
      "Enable remote workforce communication",
      "Centralize communication management",
    ],
    features: [
      "Extension management",
      "Internal calling",
      "SIP trunk integration",
      "DID management",
      "Call forwarding",
      "Call parking",
      "Call pickup",
      "IVR",
      "Voicemail",
      "Ring groups",
      "Auto attendant",
      "Call recording",
      "Music on hold",
      "Multi-branch connectivity",
      "Remote extensions",
      "Mobile extensions",
      "Softphone support",
      "WebRTC support",
      "Video calling support",
      "User management",
      "Call reporting",
      "Call logs",
      "Security controls",
      "Permission management",
    ],
    useCases: [
      "Growing businesses replacing fragmented phone systems",
      "Organizations with branch offices or field teams",
      "Operations that need controlled voice infrastructure and support",
    ],
    primaryCta: "Request PBX Deployment",
    secondaryCta: "View Our Services",
    statLabel: "Voice Infrastructure",
    statValue: "Business-Specific Setup",
  },
  {
    slug: "ids-cybersecurity",
    path: "/solutions/ids-cybersecurity",
    name: "IDS Platform",
    shortName: "IDS",
    sub: "Intrusion Detection System",
    icon: ShieldAlert,
    tagline: "Monitor, detect, analyze, and alert about malicious activities and security threats.",
    desc: "An enterprise cybersecurity solution designed to monitor, detect, analyze, and alert organizations about malicious activities and security threats across networks and systems.",
    pageTitle: "IDS Platform — Intrusion Detection System | SpringVox",
    metaDescription:
      "Explore SpringVox IDS Platform for intrusion detection, network monitoring, suspicious activity alerts, and enterprise security visibility.",
    benefits: [
      "Detect cyber threats early",
      "Improve security visibility",
      "Reduce security incidents",
      "Support regulatory compliance",
    ],
    features: [
      "Real-time network monitoring",
      "Host monitoring",
      "Traffic analysis",
      "Device activity monitoring",
      "Intrusion detection",
      "Malware detection",
      "Anomaly detection",
      "Unauthorized access detection",
      "Insider threat detection",
      "Security event correlation",
      "Threat analytics",
      "Risk assessment",
      "Behavioral analysis",
      "Real-time alerts",
      "Incident reporting",
      "Security dashboards",
      "Audit logs",
      "Compliance reporting",
    ],
    useCases: [
      "IT teams monitoring office and branch network activity",
      "Organizations with compliance or internal audit requirements",
      "Security-conscious teams that need early detection and visibility",
    ],
    primaryCta: "Talk to Us About IDS",
    secondaryCta: "Request a Consultation",
    statLabel: "Threat Visibility",
    statValue: "Continuous Monitoring",
  },
];

export const SOLUTIONS_BY_SLUG = Object.fromEntries(
  SOLUTIONS.map((solution) => [solution.slug, solution]),
) as Record<SolutionDetail["slug"], SolutionDetail>;

export const solutionOverviewMetrics = [
  { label: "AI Search", value: "Private Retrieval", icon: Brain },
  { label: "Contact Center", value: "Omnichannel Flows", icon: Headphones },
  { label: "PBX Deployment", value: "Multi-Branch Voice", icon: ArrowRightLeft },
  { label: "Cybersecurity", value: "Threat Visibility", icon: ShieldAlert },
];
