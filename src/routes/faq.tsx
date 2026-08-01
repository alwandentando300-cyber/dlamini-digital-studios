import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/contact";

const faqs = [
  { q: "How long does it take to build a website?", a: "Most Starter and Business projects launch in 2–4 weeks. E-commerce and Premium builds typically take 4–8 weeks depending on scope." },
  { q: "How much does a website cost?", a: "Our Starter package begins at R3 500, Business sites are R6 500, and Premium / e-commerce projects start at R12 000. Custom quotes are always available." },
  { q: "Do you offer SEO services?", a: "Yes. Every website we build includes on-page SEO, structured data, sitemaps and Google Search Console setup. We also offer ongoing SEO retainers." },
  { q: "Will my website work on mobile?", a: "Absolutely. Every site we design is mobile-first and thoroughly tested across phones, tablets and desktops." },
  { q: "Can you redesign my existing website?", a: "Yes — website redesigns are one of our specialities. We modernize your design, improve speed and boost your search rankings without losing your existing traffic." },
  { q: "Do you build landing pages for ads?", a: "We do. Our high-converting landing pages are built for Google and Facebook ad campaigns, with fast load times and clear calls to action." },
  { q: "Do you provide hosting and domains?", a: "We can host and manage your site through our Care & Maintenance plans, register your .co.za domain, or deploy to your preferred provider." },
  { q: "Do you write the content for my site?", a: "We can. Our Premium package includes copywriting support, and we offer add-on copywriting for the other packages." },
  { q: "How do I get started?", a: "Send us a message through the contact form, email alwandewebstudio@gmail.com, or WhatsApp 068 569 8680. We reply within one business day with a free quote." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Web Design Questions Answered | Alwande Web Studio" },
      {
        name: "description",
        content:
          "Answers to common questions about pricing, timelines, SEO, hosting and support at Alwande Web Studio.",
      },
      { property: "og:title", content: "FAQ | Alwande Web Studio" },
      {
        property: "og:description",
        content: "Everything you need to know about working with Alwande Web Studio.",
      },
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
        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-border rounded-2xl border border-border bg-card shadow-soft"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-6">
                <AccordionTrigger className="text-left text-base font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="text-muted-foreground">Still have questions?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="btn-shine rounded-full shadow-glow transition-transform duration-300 hover:-translate-y-0.5">
              <Link to="/contact">
                Get in touch <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
