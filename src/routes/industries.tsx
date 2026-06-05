import { createFileRoute, Link } from "@tanstack/react-router";

import { buildSeoMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/industries";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Industries — SpringVox Solutions Limited",
      description:
        "SpringVox serves government, financial services, healthcare, education, NGOs, telecommunications, real estate, and SMEs across Nigeria.",
      path: "/industries",
    }),
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wider text-teal">Industries</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Industries we serve.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We work with organizations across the public and private sector to design solutions that
            fit the way they actually operate.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-16">
          {INDUSTRIES.map((industry, idx) => (
            <div
              key={industry.id}
              data-reveal
              className="grid gap-8 items-center md:grid-cols-2"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-soft text-teal mb-4">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {industry.fullDescription}
                    </p>
                    <div>
                      <p className="text-sm font-semibold uppercase text-teal mb-3">Solutions:</p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    data-reveal
                    className="interactive-panel rounded-2xl border border-border bg-card h-96 flex items-center justify-center text-muted-foreground"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-teal-soft/20 mx-auto mb-3 flex items-center justify-center">
                        <industry.icon className="h-8 w-8 text-teal/50" />
                      </div>
                      <p className="text-sm">Industry imagery placeholder</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    data-reveal
                    className="interactive-panel rounded-2xl border border-border bg-card h-96 flex items-center justify-center text-muted-foreground order-2 md:order-1"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-xl bg-teal-soft/20 mx-auto mb-3 flex items-center justify-center">
                        <industry.icon className="h-8 w-8 text-teal/50" />
                      </div>
                      <p className="text-sm">Industry imagery placeholder</p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-soft text-teal mb-4">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {industry.fullDescription}
                    </p>
                    <div>
                      <p className="text-sm font-semibold uppercase text-teal mb-3">Solutions:</p>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <div
            data-reveal
            className="interactive-panel rounded-2xl border border-border bg-card p-8 md:p-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Operating in another sector?</h3>
                <p className="mt-2 text-muted-foreground">
                  We work with organizations across all industries. Tell us about your business.
                </p>
              </div>
              <Button asChild size="lg" className="bg-navy text-navy-foreground hover:bg-navy/90">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
