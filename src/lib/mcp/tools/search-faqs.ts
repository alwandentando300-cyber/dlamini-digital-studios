import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { faqs } from "../content";

export default defineTool({
  name: "search_faqs",
  title: "Search FAQs",
  description:
    "Search Alwande Web Studio's frequently asked questions about timelines, pricing, SEO, hosting and getting started.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .optional()
      .describe("Optional keyword to filter questions and answers."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const matches = q
      ? faqs.filter(
          (f) =>
            f.question.toLowerCase().includes(q) ||
            f.answer.toLowerCase().includes(q),
        )
      : [...faqs];

    return {
      content: [{ type: "text", text: JSON.stringify(matches, null, 2) }],
      structuredContent: { faqs: matches },
    };
  },
});
