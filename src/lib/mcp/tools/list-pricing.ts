import { defineTool } from "@lovable.dev/mcp-js";
import { pricing } from "../content";

export default defineTool({
  name: "list_pricing",
  title: "List pricing packages",
  description:
    "List Alwande Web Studio's website packages (Starter, Business, Premium and custom quotes) with prices in South African Rand.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(pricing, null, 2) }],
    structuredContent: { packages: pricing },
  }),
});
