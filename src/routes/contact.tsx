import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeader } from "@/components/site/Section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Website Quote | Dlamini Web Studio" },
      {
        name: "description",
        content:
          "Contact Dlamini Web Studio for a free website quote. Fast, friendly replies from a South African web design team.",
      },
      { property: "og:title", content: "Contact | Dlamini Web Studio" },
      { property: "og:description", content: "Get a free website quote from Dlamini Web Studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // UI-only submission for now.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Thanks! We'll be in touch within one business day.");
    }, 700);
  }

  return (
    <Section>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great together"
        description="Tell us about your business and we'll come back with a free, no-obligation quote within one business day."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-soft">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--emerald-brand)]/15 text-[color:var(--emerald-brand)]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                Message sent
              </h3>
              <p className="mt-2 text-muted-foreground">
                Thanks for reaching out — we'll reply within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Thandi Dlamini" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@business.co.za" required />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+27 82 000 0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business name</Label>
                  <Input id="business" name="business" placeholder="Your business" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us a little about your project, goals and timeline."
                  required
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto" disabled={loading}>
                {loading ? "Sending..." : (
                  <>
                    Send message <Send className="ml-1.5 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <InfoCard icon={Mail} title="Email" value="hello@dlaminiweb.co.za" />
          <InfoCard icon={Phone} title="Phone" value="+27 82 000 0000" />
          <InfoCard icon={MapPin} title="Based in" value="Johannesburg, South Africa" />
          <InfoCard icon={Clock} title="Response time" value="Within 1 business day" />
        </aside>
      </div>
    </Section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft flex items-start gap-4">
      <div className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</p>
        <p className="mt-0.5 text-foreground font-medium">{value}</p>
      </div>
    </div>
  );
}
