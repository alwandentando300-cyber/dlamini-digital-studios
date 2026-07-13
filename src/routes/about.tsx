import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Our Story & Mission | Dlamini Web Studio" },
      {
        name: "description",
        content:
          "Dlamini Web Studio is a South African web design agency helping small businesses grow with fast, beautiful, SEO-friendly websites.",
      },
      { property: "og:title", content: "About | Dlamini Web Studio" },
      { property: "og:description", content: "The story, mission and values behind Dlamini Web Studio." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Purpose-driven", copy: "Every design decision is made to help you grow — not just to look pretty." },
  { icon: HeartHandshake, title: "Partnership", copy: "We work with you, not for you. Your goals are ours." },
  { icon: Award, title: "Craftsmanship", copy: "We sweat the details so your website feels premium in every click." },
  { icon: Users, title: "Local roots", copy: "Proudly South African, serving businesses across the country." },
];

function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-brand)]" />
              About us
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              A South African studio building websites that mean business.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We started Dlamini Web Studio to give small South African businesses the kind of
              beautiful, fast, professional websites that usually only large brands can afford.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we help boutiques, restaurants, professionals and service businesses
              across the country attract more customers and grow with confidence — one thoughtfully
              designed website at a time.
            </p>
            <div className="mt-8 flex gap-3">
              <Button asChild className="rounded-full">
                <Link to="/contact">Work with us</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "50+", v: "Websites launched" },
              { k: "5.0", v: "Average client rating" },
              { k: "< 1s", v: "Typical load time" },
              { k: "100%", v: "Mobile-friendly" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-3xl md:text-4xl font-semibold text-primary">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
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
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
