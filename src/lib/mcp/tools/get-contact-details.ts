import { defineTool } from "@lovable.dev/mcp-js";
import { studio } from "../content";

export default defineTool({
  name: "get_contact_details",
  title: "Get contact details",
  description:
    "Get Alwande Web Studio's public contact details: email, phone, WhatsApp link and location.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(studio, null, 2) }],
    structuredContent: { studio },
  }),
});
