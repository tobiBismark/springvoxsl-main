import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  Cpu,
  Lock,
  PhoneCall,
  ShieldCheck,
  ShieldHalf,
  Sparkles,
} from "lucide-react";

import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS } from "@/lib/solutions";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildSeoMeta({
      title: "SpringVox Solutions — Enterprise Technology for Modern Businesses",
      description:
        "SpringVox Solutions Limited designs and deploys secure software, AI, VoIP, cybersecurity, and communication systems for businesses, governments, and institutions.",
      path: "/",
    }),
  }),
  component: Home,
});

const TRUST = [
  { label: "Enterprise Ready", icon: Code2 },
  { label: "AI-Powered Systems", icon: Cpu },
  { label: "Secure Voice Infrastructure", icon: PhoneCall },
  { label: "Cybersecurity First", icon: Lock },
  { label: "Custom Delivery", icon: ShieldCheck },
];

const WHY = [
  "Practical enterprise solutions built around real business needs",
  "Strong experience in software, VoIP, AI, and cybersecurity",
  "Scalable systems designed for growth",
  "Secure architecture and role-based access",
  "Local understanding with global standards",
  "Deployment, support, and long-term maintenance",
];

const FLOATING_BADGES = [
  {
    label: "Enterprise Security",
    icon: ShieldHalf,
    className: "right-0 top-8 md:right-2",
  },
  {
    label: "AI Powered",
    icon: Sparkles,
    className: "bottom-[7.5rem] right-[-1rem] md:right-[-3.5rem]",
  },
  {
    label: "99.9% Uptime",
    icon: Clock3,
    className: "bottom-6 right-4 md:right-0",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/6">
        <div className="hero-grid" aria-hidden />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 10%, rgba(11, 190, 231, 0.14), transparent 30%), radial-gradient(circle at 82% 22%, rgba(11, 133, 255, 0.08), transparent 24%)",
          }}
        />
        <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.05fr]">
          <div data-reveal className="max-w-2xl">
            <p
              data-hero-copy
              className="dark-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#16d9ff]" />
              SpringVox Solution Limited
            </p>
            <h1
              data-hero-title
              className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-6xl lg:text-7xl"
            >
              Building Intelligent
              <span className="mt-2 block text-[#14c6ed]">Software Solutions</span>
              <span className="mt-2 block text-white/88">for the Future</span>
            </h1>
            <p
              data-hero-copy
              className="mt-8 max-w-xl text-lg leading-relaxed text-white/62 md:text-xl"
            >
              AI, enterprise software, cybersecurity, and digital innovation empowering businesses
              with cutting-edge technology solutions that drive transformation and growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-[linear-gradient(135deg,#10b8db,#18d7ff)] px-8 text-[#051019] shadow-[0_18px_40px_rgba(14,195,231,0.18)] hover:brightness-105"
                data-analytics-event="hero_cta_click"
                data-analytics-label="Explore Our Solutions"
                data-hero-cta
              >
                <a href="/#solutions">
                  Explore Solutions <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl border-[#16d9ff]/24 bg-transparent px-8 text-[#18d7ff] hover:bg-[#0e202b] hover:text-white"
                data-analytics-event="hero_cta_click"
                data-analytics-label="Request a Consultation"
                data-hero-cta
              >
                <Link to="/contact">Request Consultation</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/58">
              {["Enterprise Ready", "SOC 2 Compliant", "99.9% Uptime"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#18d7ff]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal className="orb-shell">
            <div data-orbital-wrapper className="relative w-full max-w-[42rem]">
              {FLOATING_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  data-floating-badge
                  className={`floating-badge ${badge.className} hidden md:flex`}
                >
                  <div className="floating-badge-icon">
                    <badge.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-white/84">{badge.label}</span>
                </div>
              ))}
              <div data-orbital-core className="orb-core mx-auto">
                <div data-orbital-grid className="orb-grid">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span
                      key={`v-${index}`}
                      data-grid-line
                      className="orb-grid-line"
                      style={{ transform: `translate(-50%, -50%) rotate(${index * 30}deg)` }}
                    />
                  ))}
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={`h-${index}`}
                      data-grid-line
                      className="orb-grid-line is-horizontal"
                      style={{ transform: `translate(-50%, -50%) rotate(${index * 60}deg)` }}
                    />
                  ))}
                </div>
                {[
                  { size: "h-2.5 w-2.5", top: "20%", left: "65%", tx: "12px", ty: "-12px" },
                  { size: "h-2 w-2", top: "35%", left: "25%", tx: "-10px", ty: "8px" },
                  { size: "h-3 w-3", top: "55%", left: "18%", tx: "-14px", ty: "0px" },
                  { size: "h-2.5 w-2.5", top: "70%", left: "60%", tx: "10px", ty: "10px" },
                  { size: "h-2 w-2", top: "72%", left: "40%", tx: "0px", ty: "12px" },
                  { size: "h-2 w-2", top: "45%", left: "55%", tx: "8px", ty: "-8px" },
                ].map((particle, index) => (
                  <span
                    key={index}
                    data-particle
                    className={`orb-particle ${particle.size}`}
                    style={
                      {
                        top: particle.top,
                        left: particle.left,
                        "--tx": particle.tx,
                        "--ty": particle.ty,
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {TRUST.map((item) => (
              <div
                key={item.label}
                data-reveal
                className="interactive-panel rounded-2xl px-4 py-5 text-sm text-white/66"
              >
                <item.icon className="h-5 w-5 text-[#18d7ff]" />
                <p className="mt-3 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            eyebrow="Who We Are"
            title="Practical, secure technology for organizations."
          />
          <div data-reveal className="space-y-4 text-base leading-relaxed text-white/62">
            <p>
              SpringVox Solutions Limited is an enterprise solutions company focused on building
              practical, secure, and scalable technology for organizations. We help businesses
              modernize their operations through custom software development, AI-powered systems,
              VoIP communication solutions, cybersecurity tools, and enterprise automation.
            </p>
            <p>
              Our goal is to help organizations reduce manual work, improve communication, secure
              their digital infrastructure, and make better use of their data.
            </p>
            <Button
              asChild
              variant="link"
              className="px-0 text-[#18d7ff]"
              data-analytics-event="section_cta_click"
              data-analytics-label="More about SpringVox"
            >
              <Link to="/about">
                More about SpringVox <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="solutions" className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Solutions"
            title="Products built for enterprise reliability."
            description="Each platform is designed to be deployed, configured, and supported around the specific needs of your organization."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SOLUTIONS.map((solution) => (
              <div
                key={solution.name}
                data-reveal
                className="interactive-panel rounded-3xl p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#18d7ff]">{solution.sub}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/62">{solution.desc}</p>
                <Button
                  asChild
                  variant="link"
                  className="mt-3 px-0 text-[#9feeff]"
                  data-analytics-event="solution_card_click"
                  data-analytics-label={solution.name}
                >
                  <Link to={solution.path}>
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader eyebrow="Why SpringVox" title="Why businesses choose SpringVox." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((reason) => (
              <div
                key={reason}
                data-reveal
                className="interactive-panel rounded-2xl p-5 text-white/72"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#18d7ff]" />
                  <p className="text-sm">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Services"
            title="Enterprise services we provide."
            description="From custom development to long-term operations, we cover the full lifecycle of enterprise technology projects."
          />
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-[#16d9ff]/24 bg-transparent px-8 text-[#18d7ff] hover:bg-[#0e202b] hover:text-white"
              data-analytics-event="services_cta_click"
              data-analytics-label="View All Services"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="industries" className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Enterprise solutions for every sector."
            description="We work with organizations across the public and private sector to design solutions that fit the way they actually operate."
          />
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-[#16d9ff]/24 bg-transparent px-8 text-[#18d7ff] hover:bg-[#0e202b] hover:text-white"
              data-analytics-event="industries_cta_click"
              data-analytics-label="View All Industries"
            >
              <Link to="/industries">
                View All Industries <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div data-reveal className="glass-panel rounded-[2rem] p-10 text-white md:p-14">
            <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Let&apos;s build the right solution for your business.
                </h2>
                <p className="mt-3 max-w-2xl text-white/62">
                  From custom software to AI document retrieval, VoIP infrastructure, PBX
                  deployment, cybersecurity monitoring, or contact center platforms, we&apos;ll help
                  you design and deploy it.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  asChild
                  size="lg"
                  className="rounded-2xl bg-[linear-gradient(135deg,#10b8db,#18d7ff)] text-[#051019] hover:brightness-105"
                  data-analytics-event="footer_cta_click"
                  data-analytics-label="Request a Consultation"
                >
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-[#16d9ff]/24 bg-transparent text-[#b3f3ff] hover:bg-[#0d202b] hover:text-white"
                  data-analytics-event="footer_cta_click"
                  data-analytics-label="View Services"
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
