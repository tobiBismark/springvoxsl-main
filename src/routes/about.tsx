import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { buildSeoMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildSeoMeta({
      title: "About — SpringVox Solutions Limited",
      description:
        "SpringVox Solutions Limited is an enterprise solutions company building secure, scalable technology for businesses, institutions, and public-sector organizations.",
      path: "/about",
    }),
  }),
  component: AboutPage,
});

const VALUES = [
  {
    t: "Practical",
    d: "Solutions built around real operational needs, not technology for its own sake.",
  },
  {
    t: "Secure",
    d: "Security-focused architecture and role-based access across every product we deploy.",
  },
  {
    t: "Scalable",
    d: "Systems that grow with your organization, from a single branch to nationwide deployments.",
  },
  { t: "Supported", d: "Deployment, configuration, and long-term technical maintenance." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wider text-teal">About</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            We build practical enterprise technology for organizations that need it to work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            SpringVox Solutions Limited is an enterprise solutions company based in Nigeria, serving
            businesses, government agencies, NGOs, schools, healthcare institutions, financial
            organizations, and growing enterprises.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader eyebrow="Who We Are" title="Our focus." />
          <div data-reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We help organizations modernize their operations through custom software development,
              AI-powered systems, VoIP communication solutions, cybersecurity tools, and enterprise
              automation.
            </p>
            <p>
              Our goal is to help organizations reduce manual work, improve communication, secure
              their digital infrastructure, and make better use of their data.
            </p>
            <p>
              We work directly with internal teams, IT leadership, and operations stakeholders to
              design solutions that fit the way your business actually runs, and we stay involved
              after deployment to keep them running well.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader eyebrow="What we value" title="How we approach every engagement." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.t}
                data-reveal
                className="interactive-panel rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <CheckCircle2 className="h-5 w-5 text-teal" />
                <h3 className="mt-3 text-lg font-semibold">{value.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div
            data-reveal
            className="interactive-panel flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:p-12"
          >
            <div>
              <h3 className="text-2xl font-semibold">Ready to discuss your project?</h3>
              <p className="mt-2 text-muted-foreground">
                We&apos;ll help scope, design, and deploy the right solution.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-navy text-navy-foreground hover:bg-navy/90"
              data-analytics-event="about_cta_click"
              data-analytics-label="Request a Consultation"
            >
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
