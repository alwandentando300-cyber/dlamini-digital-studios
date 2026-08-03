import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../content";

export default defineTool({
  name: "list_portfolio",
  title: "List portfolio projects",
  description:
    "List the websites in Alwande Web Studio's portfolio, including which are completed real client projects.",
  inputSchema: {
    onlyRealClientProjects: z
      .boolean()
      .optional()
      .describe("When true, return only completed real client projects."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ onlyRealClientProjects }) => {
    const matches = onlyRealClientProjects
      ? projects.filter((p) => p.realClientProject)
      : [...projects];

    return {
      content: [{ type: "text", text: JSON.stringify(matches, null, 2) }],
      structuredContent: { projects: matches },
    };
  },
});
