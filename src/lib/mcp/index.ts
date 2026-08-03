import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listPricing from "./tools/list-pricing";
import listPortfolio from "./tools/list-portfolio";
import searchFaqs from "./tools/search-faqs";
import getContactDetails from "./tools/get-contact-details";

export default defineMcp({
  name: "alwande-web-studio",
  title: "Alwande Web Studio",
  version: "0.1.0",
  instructions:
    "Public tools for Alwande Web Studio, a South African web design agency. Use `list_services` for offerings, `list_pricing` for package prices in Rand, `list_portfolio` for past work, `search_faqs` for common questions, and `get_contact_details` for how to reach the studio.",
  tools: [
    listServices,
    listPricing,
    listPortfolio,
    searchFaqs,
    getContactDetails,
  ],
});
