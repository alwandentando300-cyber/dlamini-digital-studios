import { Smartphone, Search, Zap, ShieldCheck, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const badges = [
  { icon: Smartphone, label: "Mobile Friendly" },
  { icon: Search, label: "SEO Optimized" },
  { icon: Zap, label: "Fast Loading" },
  { icon: ShieldCheck, label: "Secure SSL" },
  { icon: MapPin, label: "South African Based" },
];

export function TrustBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {badges.map((b, i) => (
        <Reveal as="li" key={b.label} delay={i * 70}>
          <div
            className={`flex h-full items-center gap-3 rounded-2xl border px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 ${
              tone === "dark"
                ? "border-white/12 bg-white/5 text-white/85 hover:border-white/25"
                : "border-border bg-card text-foreground shadow-soft hover:shadow-elegant"
            }`}
          >
            <b.icon
              className={`h-5 w-5 shrink-0 ${
                tone === "dark"
                  ? "text-[color:var(--emerald-brand)]"
                  : "text-primary"
              }`}
            />
            <span className="min-w-0 text-sm font-medium leading-tight">
              {b.label}
            </span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
