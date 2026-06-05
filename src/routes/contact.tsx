import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { buildSeoMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Contact — SpringVox Solutions Limited",
      description:
        "Request a consultation with SpringVox Solutions Limited for enterprise software, AI, VoIP, PBX, or cybersecurity projects.",
      path: "/contact",
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wider text-teal">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s build the right solution for your business.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you need custom software, AI document retrieval, VoIP infrastructure, PBX
            deployment, cybersecurity monitoring, or a contact center platform, SpringVox Solutions
            Limited can help you design and deploy the right solution.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div
              data-reveal
              className="interactive-panel rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-teal" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-teal" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@springvox.com"
                      className="text-muted-foreground hover:text-teal"
                    >
                      contact@springvox.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-teal" />
                  <div>
                    <p className="font-medium">Consultations</p>
                    <p className="text-muted-foreground">By appointment</p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-reveal
              className="interactive-panel rounded-xl border border-border bg-navy p-6 text-navy-foreground"
            >
              <h3 className="text-lg font-semibold text-navy-foreground">What happens next?</h3>
              <ol className="mt-4 space-y-3 text-sm text-navy-foreground/85">
                <li className="flex gap-3">
                  <span className="font-semibold text-teal">1.</span> We review your request within
                  1-2 business days.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-teal">2.</span> A short discovery call to
                  scope your needs.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-teal">3.</span> A tailored proposal with
                  timeline and approach.
                </li>
              </ol>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            data-reveal
            className="interactive-panel rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-teal" />
                <h3 className="mt-4 text-2xl font-semibold">Thank you.</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Your request has been received. A member of our team will reach out shortly to
                  schedule your consultation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold">Request a Consultation</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us about your project and we&apos;ll get back to you.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Organization</Label>
                    <Input id="company" placeholder="Acme Ltd." />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+234 ..." />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="interest">Area of interest</Label>
                    <Input
                      id="interest"
                      placeholder="e.g. Rekall IQ, PBX deployment, custom software"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Briefly describe what you're trying to achieve..."
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full bg-navy text-navy-foreground hover:bg-navy/90 sm:w-auto"
                  data-analytics-event="contact_form_submit"
                  data-analytics-label="Request a Consultation"
                >
                  Request a Consultation
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by SpringVox Solutions Limited regarding
                  your request.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
