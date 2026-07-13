import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Websites We've Designed | Dlamini Web Studio" },
      {
        name: "description",
        content:
          "Explore recent websites designed by Dlamini Web Studio for South African small businesses — boutiques, restaurants, professional services and more.",
      },
      { property: "og:title", content: "Portfolio | Dlamini Web Studio" },
      { property: "og:description", content: "Recent websites we've built for growing South African brands." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const projects = [
  { img: p1, name: "Lumière Boutique", category: "E-Commerce", brief: "A minimalist online boutique with a focus on beautiful product photography and a friction-free checkout." },
  { img: p2, name: "Marra Restaurant", category: "Hospitality", brief: "Warm, elegant restaurant site with online bookings, menus and a photo-driven homepage." },
  { img: p3, name: "Langford Law", category: "Professional Services", brief: "Trust-focused law firm site with clear practice areas, team bios and enquiry forms." },
  { img: p1, name: "Ubuntu & Co.", category: "Consulting", brief: "Modern consulting brand site with case studies and lead-capture landing pages." },
  { img: p2, name: "Karoo & Sons", category: "Local Business", brief: "Family-run business site optimized for local search across the Western Cape." },
  { img: p3, name: "Everline Studio", category: "Portfolio", brief: "Creative studio portfolio with a bold typographic identity and case-study layouts." },
];

function PortfolioPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Portfolio"
          title="Websites designed to grow the businesses we love"
          description="A selection of recent work across e-commerce, hospitality, professional services and more."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`${p.name} website design`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.brief}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Like what you see? Let's build yours next.</p>
          <Button asChild className="mt-4 rounded-full">
            <Link to="/contact">
              Start your project <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
