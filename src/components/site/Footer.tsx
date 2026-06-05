import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { SOLUTIONS } from "@/lib/solutions";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#07111b] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2" data-footer-brand>
          <BrandLogo className="h-10 w-auto md:h-11" />
          <p className="mt-4 max-w-md text-sm text-white/72">
            SpringVox Solutions Limited — Enterprise Software · AI · VoIP · Cybersecurity ·
            Communication Systems.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/78">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#16d9ff]" /> Lagos, Nigeria
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#16d9ff]" /> contact@springvox.com
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/72">
            <li>
              <Link to="/about" className="hover:text-[#16d9ff]">
                About
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-[#16d9ff]">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#16d9ff]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Offerings</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/72">
            <li>
              <Link to="/solutions" className="hover:text-[#16d9ff]">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#16d9ff]">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Platforms</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/72">
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}>
                <Link to={solution.path} className="hover:text-[#16d9ff]">
                  {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {new Date().getFullYear()} SpringVox Solutions Limited. All rights reserved.</p>
          <p>Registered in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
