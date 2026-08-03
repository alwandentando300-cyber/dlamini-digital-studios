// Public marketing content for Alwande Web Studio, shared by the MCP tools.

export const studio = {
  name: "Alwande Web Studio",
  tagline: "Professional websites that help businesses grow",
  location: "South Africa",
  email: "alwandewebstudio@gmail.com",
  phone: "068 569 8680",
  phoneInternational: "+27685698680",
  whatsapp: "https://wa.me/27685698680",
  summary:
    "Alwande Web Studio designs and builds fast, responsive, SEO-optimized websites for small businesses in South Africa.",
};

export const services = [
  {
    title: "Custom Web Design",
    summary:
      "Beautiful, modern websites tailored to your brand, audience and goals.",
    features: [
      "Bespoke UI design",
      "Responsive on every device",
      "On-brand visuals & copy",
      "Up to 8 pages",
    ],
  },
  {
    title: "Website Redesign",
    summary:
      "Turn an outdated, slow website into a modern asset that wins trust instantly.",
    features: [
      "Full visual modernisation",
      "Speed & Core Web Vitals fixes",
      "Content restructure",
      "SEO preserved & improved",
    ],
  },
  {
    title: "Landing Pages",
    summary:
      "High-converting single pages built for Google and Facebook ad campaigns.",
    features: [
      "Conversion-focused layout",
      "Lead capture forms",
      "A/B ready structure",
      "Delivered in 5–7 days",
    ],
  },
  {
    title: "SEO Optimization",
    summary:
      "Get found on Google with technical SEO, keyword strategy and on-page work.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Sitemap & schema markup",
      "Google Search Console setup",
    ],
  },
  {
    title: "E-Commerce",
    summary:
      "Sell online with confidence — secure, fast stores that convert browsers into buyers.",
    features: [
      "Payment gateway setup",
      "Product catalog",
      "Cart & checkout",
      "Inventory & orders",
    ],
  },
  {
    title: "Care & Maintenance",
    summary:
      "Ongoing updates, backups, security and speed monitoring so you never worry.",
    features: [
      "Monthly updates",
      "Automated backups",
      "Security monitoring",
      "Performance tuning",
    ],
  },
] as const;

export const pricing = [
  {
    name: "Starter",
    price: "R3 500",
    tagline: "Perfect for new small businesses.",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Contact form & WhatsApp button",
      "1 round of revisions",
    ],
  },
  {
    name: "Business",
    price: "R6 500",
    tagline: "Our most popular package.",
    featured: true,
    features: [
      "Up to 10 pages",
      "Fully custom design",
      "Advanced SEO setup",
      "Blog / CMS integration",
      "Google Analytics & Search Console",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Premium",
    price: "From R12 000",
    tagline: "For scaling brands and online stores.",
    features: [
      "Unlimited pages",
      "E-commerce or online bookings",
      "Full SEO strategy",
      "Copywriting support",
      "Priority support",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Custom Quote",
    price: "On request",
    tagline: "Bigger or unusual scope? We quote it for free.",
    features: ["Tailored scope", "Free consultation", "Fixed pricing upfront"],
  },
] as const;

export const projects = [
  {
    name: "Dlokovu Funerals",
    category: "Funeral Services",
    realClientProject: true,
    brief:
      "A dignified funeral services website with elegant black-and-gold branding, clear service pages and a fully mobile-responsive layout.",
    highlights: ["Live client project", "Mobile responsive"],
  },
  {
    name: "Lumière Boutique",
    category: "E-Commerce",
    realClientProject: false,
    brief:
      "A minimalist online boutique with beautiful product photography and a friction-free checkout.",
    highlights: ["+62% online sales", "0.9s load time"],
  },
  {
    name: "Marra Restaurant",
    category: "Hospitality",
    realClientProject: false,
    brief:
      "Warm, elegant restaurant site with online bookings, digital menus and a photo-driven homepage.",
    highlights: ["3× more bookings", "Google Maps ready"],
  },
  {
    name: "Stanton & Associates",
    category: "Professional Services",
    realClientProject: false,
    brief:
      "Trust-focused law firm site with clear practice areas, attorney bios and consultation enquiries.",
    highlights: ["+48% enquiries", "Top 3 local ranking"],
  },
  {
    name: "Luxe Hair & Beauty",
    category: "Mobile-First Booking",
    realClientProject: false,
    brief:
      "Mobile-first salon website with real-time appointment booking and service showcases.",
    highlights: ["70% mobile bookings", "5-star reviews"],
  },
  {
    name: "Summit Builders",
    category: "Local Business",
    realClientProject: false,
    brief:
      "Bold construction company website with a project gallery and a quote request form above the fold.",
    highlights: ["+90% quote requests", "Fast on 3G"],
  },
] as const;

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most Starter and Business projects launch in 2–4 weeks. E-commerce and Premium builds typically take 4–8 weeks depending on scope.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our Starter package begins at R3 500, Business sites are R6 500, and Premium / e-commerce projects start at R12 000. Custom quotes are always available.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes. Every website we build includes on-page SEO, structured data, sitemaps and Google Search Console setup. We also offer ongoing SEO retainers.",
  },
  {
    question: "Will my website work on mobile?",
    answer:
      "Absolutely. Every site we design is mobile-first and thoroughly tested across phones, tablets and desktops.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes — website redesigns are one of our specialities. We modernize your design, improve speed and boost your search rankings without losing your existing traffic.",
  },
  {
    question: "Do you build landing pages for ads?",
    answer:
      "We do. Our high-converting landing pages are built for Google and Facebook ad campaigns, with fast load times and clear calls to action.",
  },
  {
    question: "Do you provide hosting and domains?",
    answer:
      "We can host and manage your site through our Care & Maintenance plans, register your .co.za domain, or deploy to your preferred provider.",
  },
  {
    question: "Do you write the content for my site?",
    answer:
      "We can. Our Premium package includes copywriting support, and we offer add-on copywriting for the other packages.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us a message through the contact form, email alwandewebstudio@gmail.com, or WhatsApp 068 569 8680. We reply within one business day with a free quote.",
  },
] as const;
