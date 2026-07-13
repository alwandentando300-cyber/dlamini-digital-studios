import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Rocket,
  Search,
  Smartphone,
  MapPin,
  CheckCircle2,
  Star,
  Sparkles,
  Code2,
  ShoppingBag,
  Wrench,
  Compass,
  PenTool,
  Hammer,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import heroImg from "@/assets/hero.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dlamini Web Studio — Websites That Help Businesses Grow" },
      {
        name: "description",
        content:
          "We design beautiful, fast and SEO-friendly websites that help South African businesses attract customers, build trust and increase sales.",
      },
      { property: "og:title", content: "Dlamini Web Studio — Websites That Help Businesses Grow" },
      {
        property: "og:description",
        content:
          "Premium web design for South African small businesses. Fast, SEO-friendly, conversion-focused.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: PenTool, title: "Web Design", copy: "Beautiful, modern websites tailored to your brand and audience." },
  { icon: Search, title: "SEO Optimization", copy: "Rank higher on Google and get found by the right customers." },
  { icon: ShoppingBag, title: "E-Commerce", copy: "Online stores that convert visitors into loyal, paying customers." },
  { icon: Wrench, title: "Care & Maintenance", copy: "Fast, secure and always up to date — we handle the tech." },
];

const values = [
  { icon: Rocket, title: "Blazing Fast", copy: "Optimized for Core Web Vitals so pages load in under a second." },
  { icon: Search, title: "SEO-Ready", copy: "Clean semantic markup, metadata and sitemaps from day one." },
  { icon: Smartphone, title: "Mobile-First", copy: "Looks and works beautifully on every phone, tablet and screen." },
  { icon: MapPin, title: "Local Support", copy: "Proudly South African. Real people, real help, real fast." },
];

const process = [
  { icon: Compass, title: "Discover", copy: "We learn your business, audience and goals." },
  { icon: PenTool, title: "Design", copy: "Modern, on-brand designs approved before build." },
  { icon: Hammer, title: "Build", copy: "Hand-crafted, fast, SEO-friendly code." },
  { icon: Send, title: "Launch", copy: "Go live with confidence — and keep growing." },
];

const featured = [
  { img: p1, name: "Lumière Boutique", category: "E-Commerce" },
  { img: p2, name: "Marra Restaurant", category: "Hospitality" },
  { img: p3, name: "Langford Law", category: "Professional Services" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[color:var(--navy)] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(60% 60% at 80% 20%, oklch(0.55 0.22 262 / 0.5), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.72 0.17 162 / 0.25), transparent 60%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />

        <div className="container-page relative py-20 md:py-28 lg:py-32 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--emerald-brand)]" />
              South African web design studio
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Professional Websites <br className="hidden sm:block" />
              That Help Businesses{" "}
              <span className="bg-gradient-to-r from-[color:var(--royal)] to-[color:var(--emerald-brand)] bg-clip-text text-transparent">
                Grow
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
              We design beautiful, fast and SEO-friendly websites that help businesses
              attract customers, build trust and increase sales.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full shadow-glow h-12 px-6 text-base">
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-6 text-base bg-transparent border-white/25 text-white hover:bg-white hover:text-[color:var(--navy)]"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-[color:var(--emerald-brand)] text-[color:var(--emerald-brand)]" />
                <span className="text-white/90 font-medium">5.0</span> average rating
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--emerald-brand)]" />
                50+ websites launched
              </div>
            </div>
          </div>

          <div className="fade-up">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[color:var(--royal)]/40 to-[color:var(--emerald-brand)]/20 blur-2xl" aria-hidden />
              <img
                src={heroImg}
                alt="Abstract illustration of a modern website design workspace"
                width={1600}
                height={1200}
                className="relative rounded-3xl border border-white/10 shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-border bg-[color:var(--surface)]">
        <div className="container-page py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by growing South African businesses
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-display font-semibold tracking-tight text-foreground/60">
            <span>LUMIÈRE</span>
            <span>MARRA</span>
            <span>LANGFORD</span>
            <span>UBUNTU CO.</span>
            <span>KAROO&amp;SONS</span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Websites that work as hard as you do"
          description="From strategy to launch, we build the digital foundation your business needs to grow."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/services">
              Explore all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* WHY US */}
      <Section muted>
        <SectionHeader
          eyebrow="Why choose us"
          title="Built for growth, designed for trust"
          description="Every website we ship is fast, SEO-ready and made to convert."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-background border border-border p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--emerald-brand)]/10 text-[color:var(--emerald-brand)]">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader
          eyebrow="Our process"
          title="A simple, proven path to launch"
          description="No jargon, no surprises. Just a clear plan from first call to live site."
        />
        <div className="relative grid gap-6 md:grid-cols-4">
          {process.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                Step {i + 1}
              </span>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO PREVIEW */}
      <Section muted>
        <SectionHeader
          eyebrow="Featured work"
          title="Recent projects we're proud of"
          description="A glimpse of the websites we've designed for growing South African brands."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
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
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                  {p.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full">
            <Link to="/portfolio">
              View full portfolio <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader
          eyebrow="Client love"
          title="What our clients say"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Our new website tripled enquiries in the first month. The Dlamini team truly understood our brand.",
              name: "Thandi M.",
              role: "Founder, Lumière Boutique",
            },
            {
              quote:
                "Fast, professional and beautifully designed. We finally have a site that reflects our restaurant.",
              name: "Marco D.",
              role: "Owner, Marra Restaurant",
            },
            {
              quote:
                "SEO went from zero to page one for our key services. Serious return on investment.",
              name: "Sipho N.",
              role: "Partner, Langford Law",
            },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--emerald-brand)] text-[color:var(--emerald-brand)]" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-[color:var(--navy)] text-white p-10 md:p-16 shadow-elegant">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `radial-gradient(50% 80% at 90% 20%, oklch(0.55 0.22 262 / 0.55), transparent 60%), radial-gradient(40% 80% at 10% 100%, oklch(0.72 0.17 162 / 0.35), transparent 60%)`,
              }}
            />
            <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  Ready to grow your business online?
                </h2>
                <p className="mt-3 text-white/75 max-w-md">
                  Let's design a website that works around the clock to bring you new customers.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild size="lg" className="rounded-full h-12 px-6 shadow-glow">
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-6 bg-transparent border-white/25 text-white hover:bg-white hover:text-[color:var(--navy)]"
                >
                  <Link to="/services">See Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-8" />
      {/* keep Code2 import used to avoid tree-shake warning */}
      <span className="hidden"><Code2 /></span>
    </>
  );
}
