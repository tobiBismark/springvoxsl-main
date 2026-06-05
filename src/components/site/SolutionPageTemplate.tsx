import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import type { SolutionDetail } from "@/lib/solutions";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";

export function SolutionPageTemplate({ solution }: { solution: SolutionDetail }) {
  const Icon = solution.icon;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 0%, color-mix(in oklab, var(--teal) 18%, transparent), transparent 42%), radial-gradient(circle at 88% 6%, color-mix(in oklab, var(--navy) 14%, transparent), transparent 38%)",
          }}
        />
        <div className="container-page relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal>
            <p
              data-hero-copy
              className="inline-flex items-center gap-2 rounded-full border border-[#16d9ff]/20 bg-[#08111d]/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[#16d9ff] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {solution.sub}
            </p>
            <h1
              data-hero-title
              className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl"
            >
              {solution.name}
            </h1>
            <p
              data-hero-copy
              className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              {solution.tagline}
            </p>
            <p
              data-hero-copy
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
            >
              {solution.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[linear-gradient(135deg,#0faed4,#16d9ff)] text-[#041018] hover:brightness-105"
                data-analytics-event="solution_primary_cta_click"
                data-analytics-label={solution.primaryCta}
                data-hero-cta
              >
                <Link to="/contact">
                  {solution.primaryCta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0f7d98]/20 bg-white/72 text-[#0a3344] hover:bg-[#ddf8ff]"
                data-analytics-event="solution_secondary_cta_click"
                data-analytics-label={solution.secondaryCta}
                data-hero-cta
              >
                <Link to="/solutions">{solution.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          <div
            data-reveal
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-soft text-teal">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  SpringVox deployment model
                </p>
                <p className="text-lg font-semibold text-navy">{solution.statValue}</p>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {solution.statLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div
            data-reveal
            className="interactive-panel rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
          >
            <SectionHeader eyebrow="Key Features" title={`What ${solution.shortName} includes`} />
            <ul className="mt-8 grid gap-3">
              {solution.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            className="interactive-panel rounded-2xl border border-border bg-surface p-7"
          >
            <SectionHeader eyebrow="Where It Fits" title="Designed for real operating teams" />
            <ul className="mt-8 space-y-4">
              {solution.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <div
            data-reveal
            className="rounded-2xl border border-border bg-navy p-8 text-navy-foreground shadow-[var(--shadow-elevated)] md:p-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-navy-foreground">
                  Ready to evaluate {solution.name} for your organization?
                </h2>
                <p className="mt-3 max-w-2xl text-navy-foreground/80">
                  We can scope the deployment, integration, and support approach around your team,
                  infrastructure, and operating requirements.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal text-accent-foreground hover:bg-teal/90"
                  data-analytics-event="solution_footer_cta_click"
                  data-analytics-label={solution.primaryCta}
                >
                  <Link to="/contact">{solution.primaryCta}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-navy-foreground/20 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
                  data-analytics-event="solution_footer_cta_click"
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
