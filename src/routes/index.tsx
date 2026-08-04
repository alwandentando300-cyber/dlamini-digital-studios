import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  MessageCircle,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  ShoppingBag,
  Wrench,
  Star,
  Sparkles,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TrustBadges } from "@/components/site/TrustBadges";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import heroMockup from "@/assets/hero-mockup.jpg";
import workDlokovu from "@/assets/work-dlokovu.jpg";
import workBoutique from "@/assets/work-boutique.jpg";

import workRestaurant from "@/assets/work-restaurant.jpg";
import workConstruction from "@/assets/work-construction.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Alwande Web Studio — Websites That Help You Grow",
      },
      {
        name: "description",
        content:
          "Alwande Web Studio builds fast, responsive, SEO-optimized websites for South African small businesses. Free quotes from R3 500 — WhatsApp 068 569 8680.",
      },
      {
        property: "og:title",
        content: "Alwande Web Studio — Websites That Help You Grow",
      },
      {
        property: "og:description",
        content:
          "Beautiful, fast and SEO-optimized websites for South African small businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: PenTool, title: "Custom Web Design", copy: "Bespoke, on-brand websites built to impress from the first scroll." },
  { icon: RefreshCw, title: "Website Redesign", copy: "Modernise an outdated site and win back the trust you're losing." },
  { icon: Rocket, title: "Landing Pages", copy: "High-converting pages built for your Google and Facebook ads." },
  { icon: Search, title: "SEO Optimization", copy: "Rank higher on Google with technical and on-page SEO done right." },
  { icon: ShoppingBag, title: "E-Commerce", copy: "Secure, fast online stores with payments and order management." },
  { icon: Wrench, title: "Care & Maintenance", copy: "Updates, backups, security and speed monitoring every month." },
];

const reasons = [
  "Launch-ready in 2–4 weeks",
  "Mobile-first on every screen",
  "Built for Google from day one",
  "Loads in under one second",
  "Transparent, fixed pricing",
  "Direct WhatsApp support",
];

const process = [
  { n: "01", t: "Discover", c: "A quick call to understand your business, customers and goals." },
  { n: "02", t: "Design", c: "We design a premium layout and refine it with your feedback." },
  { n: "03", t: "Build", c: "We develop a fast, responsive, SEO-ready website." },
  { n: "04", t: "Launch & grow", c: "We publish, monitor performance and keep improving." },
];

const work = [
  { img: workDlokovu, name: "Dlokovu Funerals", cat: "Funeral Services" },
  { img: workBoutique, name: "Lumière Boutique", cat: "E-Commerce" },

  { img: workConstruction, name: "Summit Builders", cat: "Local Business" },
];

const testimonials = [
  {
    quote:
      "Our new website looks like it belongs to a much bigger company. Enquiries doubled in the first month.",
    name: "Nomsa M.",
    role: "Boutique owner, Durban",
  },
  {
    quote:
      "Fast, professional and easy to talk to. They redesigned our old site and our Google ranking jumped.",
    name: "Pieter V.",
    role: "Builder, Pretoria",
  },
  {
    quote:
      "The booking page pays for itself every week. Best money we've spent on the business.",
    name: "Lerato K.",
    role: "Salon owner, Johannesburg",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-soft opacity-[0.35]" aria-hidden="true" />
        <div
          className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/12 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 top-24 h-[24rem] w-[24rem] rounded-full bg-[color:var(--emerald-brand)]/12 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--emerald-brand)]" />
                South African web design studio
              </span>

              <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                Professional Websites That{" "}
                <span className="text-gradient-brand">Help Businesses Grow</span>
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                We design beautiful, lightning-fast and SEO-optimized websites
                that turn visitors into paying customers — built for South
                African small businesses that are ready to be taken seriously.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="btn-shine rounded-full px-7 text-base shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 text-base transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-[color:var(--emerald-brand)]"
                >
                  <MessageCircle className="h-4 w-4 text-[color:var(--emerald-brand)]" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" /> Call us
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[color:var(--emerald-brand)] text-[color:var(--emerald-brand)]" />
                  5.0 from 30+ happy clients
                </span>
              </div>
            </div>

            <div className="fade-up relative">
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
                <img
                  src={heroMockup}
                  alt="Laptop and smartphone showing a modern website designed by Alwande Web Studio"
                  width={1200}
                  height={912}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-elegant backdrop-blur sm:block">
                <p className="font-display text-2xl font-semibold text-primary">0.8s</p>
                <p className="text-xs text-muted-foreground">Average load time</p>
              </div>
              <div className="absolute -right-2 -top-6 hidden rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-elegant backdrop-blur sm:block">
                <p className="font-display text-2xl font-semibold text-[color:var(--emerald-brand)]">
                  100%
                </p>
                <p className="text-xs text-muted-foreground">Mobile friendly</p>
              </div>
            </div>
          </div>

          <div className="mt-24 md:mt-28">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section muted id="services">
        <SectionHeader
          eyebrow="What we do"
          title="Websites, redesigns and everything in between"
          description="Six focused services that cover every stage of your online presence."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="card-lift h-full rounded-3xl border border-border bg-background p-8 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/services">
              See services & pricing <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* WHY US */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-brand)]" />
              Why choose us
            </span>
            <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
              A studio that treats your website like a business asset
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Anyone can put a website online. We build sites that load fast,
              rank on Google and give customers a reason to trust you before
              they've even spoken to you.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--emerald-brand)]" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
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
                <a href={`mailto:${EMAIL}`}>Email us</a>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="card-lift h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <p className="font-display text-sm font-bold tracking-widest text-primary/60">
                    {p.n}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.c}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* WORK */}
      <Section muted>
        <SectionHeader
          eyebrow="Recent work"
          title="Designs that look premium and perform"
          description="A quick look at websites we've recently designed and launched."
        />
        <div className="grid gap-7 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.name} delay={i * 90}>
              <Link
                to="/portfolio"
                className="card-lift group block h-full overflow-hidden rounded-3xl border border-border bg-background shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={w.img}
                    alt={`${w.name} website design mockup`}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-6">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {w.cat}
                    </p>
                    <h3 className="mt-1 truncate font-display text-lg font-semibold text-foreground">
                      {w.name}
                    </h3>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/portfolio">
              View full portfolio <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Client love"
          title="Trusted by growing South African businesses"
        />
        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-[color:var(--emerald-brand)] text-[color:var(--emerald-brand)]"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--navy)] px-8 py-14 text-center shadow-elegant md:px-16 md:py-20">
              <div
                className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--emerald-brand)]/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="text-balance font-display text-3xl font-semibold text-white md:text-4xl lg:text-[2.75rem]">
                  Ready for a website your business deserves?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-white/70">
                  Get a free, no-obligation quote within one business day. Tell
                  us your goals and we'll show you exactly what's possible.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="btn-shine rounded-full px-7 text-base shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <Link to="/contact">
                      Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/25 bg-transparent px-7 text-base text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp{" "}
                      {PHONE_DISPLAY}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
