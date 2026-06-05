import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { SOLUTIONS } from "@/lib/solutions";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09111c]/82 shadow-[0_10px_30px_rgba(2,10,20,0.18)] backdrop-blur supports-[backdrop-filter]:bg-[#09111c]/74">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="SpringVox home" data-nav-brand>
          <BrandLogo className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/74 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              data-nav-link
            >
              {item.label}
            </Link>
          ))}

          <div className="group relative ml-1">
            <Link
              to="/solutions"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/74 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              data-nav-link
            >
              Solutions <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full z-20 w-80 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 motion-reduce:transition-none">
              <div className="rounded-2xl border border-white/10 bg-[#0c1726] p-3 shadow-[var(--shadow-elevated)]">
                <p className="px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                  Solution Portfolio
                </p>
                <div className="mt-2 grid gap-1">
                  {SOLUTIONS.map((solution) => (
                    <Link
                      key={solution.slug}
                      to={solution.path}
                      className="rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                    >
                      <span className="block text-sm font-semibold text-white">
                        {solution.name}
                      </span>
                      <span className="mt-1 block text-xs text-white/58">{solution.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/15 bg-white/4 text-white hover:bg-white/8 hover:text-white"
            data-analytics-event="navbar_cta_click"
            data-analytics-label="Explore Our Solutions"
            data-nav-cta
          >
            <a href="/#solutions">Explore Our Solutions</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-[linear-gradient(135deg,#0faed4,#16d9ff)] text-[#041018] hover:brightness-105"
            data-analytics-event="navbar_cta_click"
            data-analytics-label="Request a Consultation"
            data-nav-cta
          >
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => {
            trackAnalyticsEvent("mobile_menu_toggle", { state: open ? "closed" : "open" });
            setOpen((value) => !value);
          }}
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#09111c] md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/78 hover:bg-white/6 hover:text-white"
                activeProps={{ className: "bg-white/8 text-white" }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/solutions"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/78 hover:bg-white/6 hover:text-white"
              activeProps={{ className: "bg-white/8 text-white" }}
            >
              Solutions
            </Link>

            <div className="mt-2 rounded-xl border border-white/10 bg-[#0c1726] p-3">
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-white/48">
                Solution Portfolio
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {SOLUTIONS.map((solution) => (
                  <Link
                    key={solution.slug}
                    to={solution.path}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/78 hover:bg-white/6 hover:text-white"
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>
            </div>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="mt-2 border-white/15 bg-white/4 text-white hover:bg-white/8 hover:text-white"
              data-analytics-event="navbar_cta_click"
              data-analytics-label="Explore Our Solutions"
            >
              <a href="/#solutions" onClick={() => setOpen(false)}>
                Explore Our Solutions
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="mt-2 bg-[linear-gradient(135deg,#0faed4,#16d9ff)] text-[#041018] hover:brightness-105"
              data-analytics-event="navbar_cta_click"
              data-analytics-label="Request a Consultation"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Request a Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
