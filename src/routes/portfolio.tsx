import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TrustBadges } from "@/components/site/TrustBadges";
import { WHATSAPP_URL } from "@/lib/contact";
import workBoutique from "@/assets/work-boutique.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workLaw from "@/assets/work-law.jpg";
import workSalon from "@/assets/work-salon.jpg";
import workConstruction from "@/assets/work-construction.jpg";
import workConsulting from "@/assets/work-consulting.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Websites We've Designed | Alwande Web Studio" },
      {
        name: "description",
        content:
          "Explore recent websites designed by Alwande Web Studio for South African businesses — boutiques, restaurants, salons, builders, law firms and consultancies.",
      },
      { property: "og:title", content: "Portfolio | Alwande Web Studio" },
      {
        property: "og:description",
        content: "Recent websites we've built for growing South African brands.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    img: workBoutique,
    name: "Lumière Boutique",
    category: "E-Commerce",
    brief:
      "A minimalist online boutique with beautiful product photography and a friction-free checkout.",
    results: ["+62% online sales", "0.9s load time"],
    tags: ["Online store", "Payments", "SEO"],
  },
  {
    img: workRestaurant,
    name: "Marra Restaurant",
    category: "Hospitality",
    brief:
      "Warm, elegant restaurant site with online bookings, digital menus and a photo-driven homepage.",
    results: ["3× more bookings", "Google Maps ready"],
    tags: ["Bookings", "Menus", "Local SEO"],
  },
  {
    img: workLaw,
    name: "Stanton & Associates",
    category: "Professional Services",
    brief:
      "Trust-focused law firm site with clear practice areas, attorney bios and consultation enquiries.",
    results: ["+48% enquiries", "Top 3 local ranking"],
    tags: ["Lead capture", "Authority design"],
  },
  {
    img: workSalon,
    name: "Luxe Hair & Beauty",
    category: "Mobile-First Booking",
    brief:
      "Mobile-first salon website with real-time appointment booking and service showcases.",
    results: ["70% mobile bookings", "5-star reviews"],
    tags: ["Mobile-first", "Booking flow"],
  },
  {
    img: workConstruction,
    name: "Summit Builders",
    category: "Local Business",
    brief:
      "Bold construction company website with a project gallery and a quote request form above the fold.",
    results: ["+90% quote requests", "Fast on 3G"],
    tags: ["Quote form", "Gallery", "Speed"],
  },
  {
    img: workConsulting,
    name: "Summit Consulting",
    category: "Landing Page",
    brief:
      "High-converting consultancy landing page with pricing tiers and a single clear call to action.",
    results: ["4.8% conversion rate", "Ads ready"],
    tags: ["Landing page", "Pricing", "CRO"],
  },
];

function PortfolioPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Portfolio"
          title="Websites designed to grow the businesses we love"
          description="A selection of recent work across e-commerce, hospitality, professional services, trades and lead generation."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.name} delay={(i % 3) * 90}>
              <div className="card-lift group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={`${p.name} website design mockup`}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {p.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {p.brief}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.results.map((r) => (
                      <span
                        key={r}
                        className="rounded-full bg-[color:var(--emerald-brand)]/12 px-3 py-1 text-xs font-semibold text-[color:var(--emerald-brand)]"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <TrustBadges />
        </Reveal>

        <Reveal className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Like what you see? Let's build yours next.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="btn-shine rounded-full shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp us
                <ExternalLink className="ml-1.5 h-3.5 w-3.5 opacity-60" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
