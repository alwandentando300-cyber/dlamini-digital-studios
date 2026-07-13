import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";

const faqs = [
  { q: "How long does it take to build a website?", a: "Most Starter and Business projects launch in 2–4 weeks. E-commerce and Premium builds typically take 4–8 weeks depending on scope." },
  { q: "How much does a website cost?", a: "Our Starter package begins at R6 500. Business sites are R14 900, and Premium / e-commerce projects start at R24 900. We also offer custom quotes." },
  { q: "Do you offer SEO services?", a: "Yes. Every website we build includes on-page SEO, structured data, sitemaps and Google Search Console setup. We also offer ongoing SEO retainers." },
  { q: "Will my website work on mobile?", a: "Absolutely. Every site we design is mobile-first and thoroughly tested across phones, tablets and desktops." },
  { q: "Can you redesign my existing website?", a: "Yes — redesigns are one of our specialities. We'll modernize your design, improve speed and boost your SEO." },
  { q: "Do you provide hosting?", a: "We can host and manage your site through our Care & Maintenance plans, or deploy to your preferred provider." },
  { q: "Do you write the content for my site?", a: "We can. Our Premium package includes copywriting support, and we offer add-on copywriting for other packages." },
  { q: "What happens after my website launches?", a: "You own everything. We offer optional monthly Care plans for updates, backups, security and performance." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Answers About Our Web Design Services | Dlamini Web Studio" },
      {
        name: "description",
        content:
          "Answers to common questions about pricing, timelines, SEO, hosting and support at Dlamini Web Studio.",
      },
      { property: "og:title", content: "FAQ | Dlamini Web Studio" },
      { property: "og:description", content: "Everything you need to know about working with us." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Can't find what you're looking for? We're happy to answer any question."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card shadow-soft divide-y divide-border">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-6 border-0">
              <AccordionTrigger className="text-left text-base font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">Still have questions?</p>
          <Button asChild className="mt-3 rounded-full">
            <Link to="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
