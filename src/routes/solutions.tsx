import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS, solutionOverviewMetrics } from "@/lib/solutions";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Solutions — SpringVox Solutions Limited",
      description:
        "Rekall IQ, SpringVox Connect, SpringVox PBX, and IDS Cybersecurity — enterprise platforms deployed and supported by SpringVox.",
      path: "/solutions",
    }),
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wider text-teal">Our Solutions</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Enterprise platforms designed for your organization.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each platform is deployed, configured, and supported around your operational, security,
            and communication requirements.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutionOverviewMetrics.map((metric) => (
              <div
                key={metric.label}
                data-reveal
                className="interactive-panel rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <metric.icon className="h-5 w-5 text-teal" />
                <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-navy">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-10">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.name}
              data-reveal
              className="interactive-panel grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10 lg:grid-cols-[1fr_1.2fr]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-soft text-teal">
                  <solution.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold md:text-3xl">{solution.name}</h2>
                <p className="mt-1 text-sm font-medium text-teal">{solution.sub}</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {solution.desc}
                </p>
                <Button
                  asChild
                  className="mt-6 bg-navy text-navy-foreground hover:bg-navy/90"
                  data-analytics-event="solutions_overview_cta_click"
                  data-analytics-label={solution.name}
                >
                  <Link to={solution.path}>
                    View solution page <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key features
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="link"
                  className="mt-5 px-0 text-navy"
                  data-analytics-event="solutions_overview_cta_click"
                  data-analytics-label={`${solution.name} contact`}
                >
                  <Link to="/contact">
                    Talk to our team <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <SectionHeader
            eyebrow="Need Help Choosing?"
            title="We can help map the right platform to your team and infrastructure."
          />
          <Button
            asChild
            size="lg"
            className="bg-navy text-navy-foreground hover:bg-navy/90"
            data-analytics-event="solutions_footer_cta_click"
            data-analytics-label="Request a Consultation"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
