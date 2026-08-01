import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PenTool,
  Search,
  ShoppingBag,
  Wrench,
  RefreshCw,
  Rocket,
  Check,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TrustBadges } from "@/components/site/TrustBadges";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Design, Redesign, SEO & Landing Pages | Alwande Web Studio" },
      {
        name: "description",
        content:
          "Custom web design, website redesigns, landing pages, SEO, e-commerce and care plans for South African small businesses. Transparent pricing from R3 500.",
      },
      { property: "og:title", content: "Services | Alwande Web Studio" },
      {
        property: "og:description",
        content:
          "Web design, redesigns, landing pages, SEO, e-commerce and maintenance packages that help small businesses grow.",
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
    features: [
      "Bespoke UI design",
      "Responsive on every device",
      "On-brand visuals & copy",
      "Up to 8 pages",
    ],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    copy: "Turn an outdated, slow website into a modern asset that wins trust instantly.",
    features: [
      "Full visual modernisation",
      "Speed & Core Web Vitals fixes",
      "Content restructure",
      "SEO preserved & improved",
    ],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    copy: "High-converting single pages built for Google and Facebook ad campaigns.",
    features: [
      "Conversion-focused layout",
      "Lead capture forms",
      "A/B ready structure",
      "Delivered in 5–7 days",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    copy: "Get found on Google with technical SEO, keyword strategy and on-page work.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Sitemap & schema markup",
      "Google Search Console setup",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    copy: "Sell online with confidence — secure, fast stores that convert browsers into buyers.",
    features: [
      "Payment gateway setup",
      "Product catalog",
      "Cart & checkout",
      "Inventory & orders",
    ],
  },
  {
    icon: Wrench,
    title: "Care & Maintenance",
    copy: "Ongoing updates, backups, security and speed monitoring so you never worry.",
    features: [
      "Monthly updates",
      "Automated backups",
      "Security monitoring",
      "Performance tuning",
    ],
  },
];

const tiers = [
  {
    name: "Starter",
    price: "R3 500",
    tagline: "Perfect for new small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Contact form & WhatsApp button",
      "1 round of revisions",
    ],
  },
  {
    name: "Business",
    price: "R6 500",
    tagline: "Our most popular package.",
    featured: true,
    features: [
      "Up to 10 pages",
      "Fully custom design",
      "Advanced SEO setup",
      "Blog / CMS integration",
      "Google Analytics & Search Console",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "From R12 000",
    tagline: "For scaling brands and online stores.",
    features: [
      "Unlimited pages",
      "E-commerce or online bookings",
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
          description="From custom web design and redesigns to landing pages, SEO and ongoing care — we handle every part of your digital presence."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="card-lift h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--emerald-brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent packages"
          description="Fixed pricing so you know exactly what you're getting — no surprises, no hidden fees."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`card-lift relative h-full rounded-3xl border p-8 shadow-soft ${
                  t.featured
                    ? "border-primary bg-card shadow-elegant ring-2 ring-primary/20"
                    : "border-border bg-background"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                <p className="mt-6 font-display text-4xl font-semibold text-foreground">
                  {t.price}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--emerald-brand)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={`mt-9 w-full rounded-full ${
                    t.featured ? "btn-shine shadow-glow" : ""
                  }`}
                  variant={t.featured ? "default" : "outline"}
                >
                  <Link to="/contact">
                    Get started <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-[color:var(--navy)] p-9 text-white md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--emerald-brand)]">
                  <Sparkles className="h-3.5 w-3.5" /> Something bigger in mind?
                </span>
                <h3 className="mt-5 text-balance font-display text-2xl font-semibold text-white md:text-3xl">
                  Request a custom quote
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-white/70">
                  Multi-language sites, booking systems, integrations or a full
                  brand refresh — tell us what you need and we'll price it
                  honestly within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button
                  asChild
                  size="lg"
                  className="btn-shine rounded-full shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/contact">
                    Request Custom Quote <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <TrustBadges />
        </Reveal>
      </Section>
    </>
  );
}
