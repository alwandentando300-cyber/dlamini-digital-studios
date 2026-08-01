import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import {
  EMAIL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  buildEnquiryMailto,
} from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Website Quote | Alwande Web Studio" },
      {
        name: "description",
        content:
          "Contact Alwande Web Studio for a free website quote. Email alwandewebstudio@gmail.com or WhatsApp 068 569 8680 — we reply within one business day.",
      },
      { property: "og:title", content: "Contact | Alwande Web Studio" },
      {
        property: "og:description",
        content: "Get a free website quote from Alwande Web Studio.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Custom Web Design",
  "Website Redesign",
  "Landing Page",
  "E-Commerce Store",
  "SEO Optimization",
  "Care & Maintenance",
  "Not sure yet",
];

const budgetOptions = [
  "Starter — around R3 500",
  "Business — around R6 500",
  "Premium — R12 000+",
  "I'd like a custom quote",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const name = get("name");
    const email = get("email");
    const message = get("message");

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setLoading(true);
    const href = buildEnquiryMailto({
      name,
      email,
      phone: get("phone"),
      business: get("business"),
      service: get("service"),
      budget: get("budget"),
      message,
    });

    window.location.href = href;
    setLoading(false);
    setSubmitted(true);
    toast.success("Your email is ready to send — we'll reply within one business day.");
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great together"
        description="Tell us about your business and we'll come back with a free, no-obligation quote within one business day."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--emerald-brand)]/15 text-[color:var(--emerald-brand)]">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Almost there
                </h3>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
                  We've opened your email app with your enquiry ready to send to{" "}
                  {EMAIL}. If nothing opened, WhatsApp us instead — it's the
                  fastest way to reach us.
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="btn-shine rounded-full shadow-glow"
                  >
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp us
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Alwande Ngcobo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@business.co.za"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp (optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="068 000 0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business name</Label>
                    <Input id="business" name="business" placeholder="Your business" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">What do you need?</Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget range</Label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    >
                      <option value="">Select a budget</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    placeholder="Tell us a little about your project, goals and timeline."
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="submit"
                    size="lg"
                    className="btn-shine rounded-full shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                    disabled={loading}
                  >
                    {loading ? (
                      "Preparing..."
                    ) : (
                      <>
                        Send message <Send className="ml-1.5 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-1.5 h-4 w-4" /> Or WhatsApp us
                    </a>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        <aside className="space-y-4 lg:col-span-2">
          <Reveal delay={80}>
            <a
              href={`mailto:${EMAIL}`}
              className="card-lift block rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <InfoBody icon={Mail} title="Email" value={EMAIL} />
            </a>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={`tel:${PHONE_TEL}`}
              className="card-lift block rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <InfoBody icon={Phone} title="Call us" value={PHONE_DISPLAY} />
            </a>
          </Reveal>
          <Reveal delay={240}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift block rounded-2xl border border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/8 p-5 shadow-soft"
            >
              <InfoBody
                icon={MessageCircle}
                title="WhatsApp"
                value={`${PHONE_DISPLAY} — fastest reply`}
              />
            </a>
          </Reveal>
          <Reveal delay={320}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <InfoBody icon={MapPin} title="Based in" value={LOCATION} />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <InfoBody
                icon={Clock}
                title="Response time"
                value="Within 1 business day"
              />
            </div>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}

function InfoBody({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        <p className="mt-0.5 break-words font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
