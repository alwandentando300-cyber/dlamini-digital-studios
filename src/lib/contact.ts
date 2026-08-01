export const BRAND = "Alwande Web Studio";
export const EMAIL = "alwandewebstudio@gmail.com";
export const PHONE_DISPLAY = "068 569 8680";
export const PHONE_TEL = "+27685698680";
export const WHATSAPP_URL =
  "https://wa.me/27685698680?text=" +
  encodeURIComponent("Hi Alwande Web Studio, I'd like a free website quote.");
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Website enquiry",
)}`;
export const LOCATION = "South Africa";

export function buildEnquiryMailto(data: {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  const subject = `Website enquiry — ${data.name}${
    data.business ? ` (${data.business})` : ""
  }`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.business ? `Business: ${data.business}` : null,
    data.service ? `Service needed: ${data.service}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    "",
    "Project details:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
