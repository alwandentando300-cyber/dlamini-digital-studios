# Update the WhatsApp number only

## Changes

- Keep the business call number `068 569 8680`, email, design, content, pricing, and all other site details unchanged.
- Add a separate WhatsApp display number, `068 076 2227`, while retaining the existing call-number constants.
- Change the shared WhatsApp destination to `https://wa.me/27680762227`, using digits only as required by WhatsApp's `wa.me` format, and preserve the existing encoded pre-filled quote message.
- Update every WhatsApp-specific visible number and metadata reference on the Home, Contact, and FAQ pages to the new WhatsApp number.
- Update the public agent-integration contact data so its WhatsApp link and WhatsApp number return the new destination without changing the listed business phone number.
- Leave the sitewide structured-data telephone value unchanged because it represents the business call number, not the separate WhatsApp number.

## Coverage and verification

- All existing WhatsApp buttons and links in the navigation areas, footer, Home, Services, Portfolio, About, FAQ, and Contact pages already share the central WhatsApp link, so the central update will switch them together.
- No floating WhatsApp button currently exists in the inspected site; no new button will be added because the request prohibits layout changes.
- Search the full project after editing to confirm the old WhatsApp destination is absent from WhatsApp links while the unchanged business call number remains intact.
- Open the site on desktop and mobile, inspect the WhatsApp anchors, and confirm they resolve to `https://wa.me/27680762227` with the existing pre-filled message still encoded correctly.
- Confirm the current preview remains error-free after the changes.

## Files expected to change

- `src/lib/contact.ts`
- `src/lib/mcp/content.ts`
- `src/routes/index.tsx`
- `src/routes/contact.tsx`
- `src/routes/faq.tsx`