import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-[color:var(--navy)] text-white/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="max-w-md md:col-span-2">
          <Logo variant="dark" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Alwande Web Studio designs fast, beautiful and SEO-optimized
            websites that help South African small businesses attract
            customers, build trust and grow online.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--emerald-brand)] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email us
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="transition-colors hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="transition-colors hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-white">About</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 break-all transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--emerald-brand)]" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-[color:var(--emerald-brand)]" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                <MessageCircle className="h-4 w-4 shrink-0 text-[color:var(--emerald-brand)]" />
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[color:var(--emerald-brand)]" />
              {LOCATION}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Alwande Web Studio. All rights reserved.</p>
          <p>Built for growth. Designed for trust.</p>
        </div>
      </div>
    </footer>
  );
}
