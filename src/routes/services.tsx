import { createFileRoute, Link } from "@tanstack/react-router";

import { buildSeoMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Services — SpringVox Solutions Limited",
      description:
        "Custom software development, VoIP, PBX deployment, AI, cybersecurity, cloud infrastructure, integration, consulting, and support from SpringVox Solutions.",
      path: "/services",
    }),
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wider text-teal">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Enterprise services we provide.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From custom development to long-term operations, we cover the full lifecycle of
            enterprise technology projects.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page space-y-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              data-reveal
              className="grid gap-8 items-center md:grid-cols-2"
            >
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-soft text-teal mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {service.fullDescription}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm font-semibold uppercase text-teal mb-3">Key capabilities:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                            {feature}
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
                        <service.icon className="h-8 w-8 text-teal/50" />
                      </div>
                      <p className="text-sm">Service imagery placeholder</p>
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
                        <service.icon className="h-8 w-8 text-teal/50" />
                      </div>
                      <p className="text-sm">Service imagery placeholder</p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-soft text-teal mb-4">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {service.fullDescription}
                    </p>
                    <div className="mb-6">
                      <p className="text-sm font-semibold uppercase text-teal mb-3">Key capabilities:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                            {feature}
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
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <SectionHeader eyebrow="Get started" title="Tell us what you're trying to build." />
          <Button
            asChild
            size="lg"
            className="bg-navy text-navy-foreground hover:bg-navy/90"
            data-analytics-event="services_cta_click"
            data-analytics-label="Request a Consultation"
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
