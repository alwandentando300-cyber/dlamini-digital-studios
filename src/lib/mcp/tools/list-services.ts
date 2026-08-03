import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the web design and marketing services Alwande Web Studio offers, with their features.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional keyword to filter services by title or summary."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const matches = q
      ? services.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.summary.toLowerCase().includes(q),
        )
      : [...services];

    return {
      content: [{ type: "text", text: JSON.stringify(matches, null, 2) }],
      structuredContent: { services: matches },
    };
  },
});
