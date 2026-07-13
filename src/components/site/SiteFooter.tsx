import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[color:var(--navy)] text-white/80">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground font-display font-bold">
              D
            </span>
            <span className="font-display text-lg font-semibold text-white">
              Dlamini Web Studio
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            We design fast, beautiful and SEO-friendly websites that help South African
            small businesses attract customers, build trust and grow online.
          </p>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--emerald-brand)]" /> hello@dlaminiweb.co.za</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--emerald-brand)]" /> +27 82 000 0000</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[color:var(--emerald-brand)]" /> Johannesburg, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Dlamini Web Studio. All rights reserved.</p>
          <p>Built for growth. Designed for trust.</p>
        </div>
      </div>
    </footer>
  );
}
