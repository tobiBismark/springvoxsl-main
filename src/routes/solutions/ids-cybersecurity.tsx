import { createFileRoute } from "@tanstack/react-router";

import { SolutionPageTemplate } from "@/components/site/SolutionPageTemplate";
import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS_BY_SLUG } from "@/lib/solutions";

const solution = SOLUTIONS_BY_SLUG["ids-cybersecurity"];

export const Route = createFileRoute("/solutions/ids-cybersecurity")({
  head: () => ({
    meta: buildSeoMeta({
      title: solution.pageTitle,
      description: solution.metaDescription,
      path: solution.path,
    }),
  }),
  component: IdsCybersecurityPage,
});

function IdsCybersecurityPage() {
  return <SolutionPageTemplate solution={solution} />;
}
