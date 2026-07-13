import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PenTool,
  Search,
  ShoppingBag,
  Wrench,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Design, SEO & E-Commerce | Dlamini Web Studio" },
      {
        name: "description",
        content:
          "Custom web design, SEO, e-commerce and website care packages built for South African small businesses. Transparent pricing, fast delivery.",
      },
      { property: "og:title", content: "Services | Dlamini Web Studio" },
      {
        property: "og:description",
        content:
          "Web design, SEO, e-commerce and maintenance packages that help small businesses grow.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: PenTool,
    title: "Custom Web Design",
    copy: "Beautiful, modern websites tailored to your brand, audience and goals.",
    features: ["Bespoke UI design", "Responsive on every device", "On-brand visuals & copy", "Up to 8 pages"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    copy: "Get found on Google with technical SEO, keyword strategy and on-page optimization.",
    features: ["Keyword research", "On-page SEO", "Sitemap & schema", "Google Search Console setup"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    copy: "Sell online with confidence — secure, fast stores that convert.",
    features: ["Payment gateway setup", "Product catalog", "Cart & checkout", "Inventory & orders"],
  },
  {
    icon: Wrench,
    title: "Care & Maintenance",
    copy: "Ongoing updates, backups, security and speed monitoring.",
    features: ["Monthly updates", "Automated backups", "Security monitoring", "Performance tuning"],
  },
];

const tiers = [
  {
    name: "Starter",
    price: "R6 500",
    tagline: "Perfect for new small businesses.",
    features: ["Up to 5 pages", "Mobile-friendly design", "Basic SEO setup", "Contact form", "1 round of revisions"],
  },
  {
    name: "Business",
    price: "R14 900",
    tagline: "Our most popular package.",
    featured: true,
    features: [
      "Up to 10 pages",
      "Custom design",
      "Advanced SEO setup",
      "Blog / CMS integration",
      "Google Analytics",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "From R24 900",
    tagline: "For scaling brands and e-commerce.",
    features: [
      "Unlimited pages",
      "E-commerce or bookings",
      "Full SEO strategy",
      "Copywriting support",
      "Priority support",
      "3 rounds of revisions",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Services"
          title="Everything your business needs to grow online"
          description="From custom web design to ongoing care, we handle every part of your digital presence."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.copy}</p>
              <ul className="mt-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-[color:var(--emerald-brand)]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent packages"
          description="Fixed pricing so you know exactly what you're getting. Custom quotes available."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 shadow-soft ${
                t.featured
                  ? "border-primary bg-card ring-2 ring-primary/20 shadow-elegant"
                  : "border-border bg-background"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              <p className="mt-5 font-display text-4xl font-semibold text-foreground">{t.price}</p>
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--emerald-brand)]" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 w-full rounded-full ${t.featured ? "" : ""}`}
                variant={t.featured ? "default" : "outline"}
              >
                <Link to="/contact">
                  Get started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
