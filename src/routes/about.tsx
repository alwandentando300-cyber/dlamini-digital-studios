import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  HeartHandshake,
  Target,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Our Story & Mission | Alwande Web Studio" },
      {
        name: "description",
        content:
          "Alwande Web Studio is a South African web design studio helping small businesses grow with fast, beautiful, SEO-optimized websites.",
      },
      { property: "og:title", content: "About | Alwande Web Studio" },
      {
        property: "og:description",
        content: "The story, mission and values behind Alwande Web Studio.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Target,
    title: "Purpose-driven",
    copy: "Every design decision is made to help you win customers — not just to look pretty.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    copy: "We work with you, not for you. Your goals become our brief.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    copy: "We sweat the details so your website feels premium in every single click.",
  },
  {
    icon: Users,
    title: "Local roots",
    copy: "Proudly South African, serving businesses in every province.",
  },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-brand)]" />
              About us
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              A South African studio building websites that mean business.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We started Alwande Web Studio to give small South African
              businesses the kind of beautiful, fast, professional websites that
              usually only big brands can afford.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today we help boutiques, restaurants, salons, builders, law firms
              and service businesses across the country attract more customers
              and grow with confidence — one thoughtfully designed website at a
              time.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="btn-shine rounded-full shadow-glow transition-transform duration-300 hover:-translate-y-0.5">
                <Link to="/contact">
                  Work with us <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "50+", v: "Websites launched" },
              { k: "5.0", v: "Average client rating" },
              { k: "< 1s", v: "Typical load time" },
              { k: "100%", v: "Mobile-friendly" },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 90}>
                <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                    {s.k}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          eyebrow="Our values"
          title="What we care about"
          description="The principles that guide every project we take on."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-border bg-background p-7 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
