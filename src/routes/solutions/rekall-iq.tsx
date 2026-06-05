import { createFileRoute } from "@tanstack/react-router";

import { SolutionPageTemplate } from "@/components/site/SolutionPageTemplate";
import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS_BY_SLUG } from "@/lib/solutions";

const solution = SOLUTIONS_BY_SLUG["rekall-iq"];

export const Route = createFileRoute("/solutions/rekall-iq")({
  head: () => ({
    meta: buildSeoMeta({
      title: solution.pageTitle,
      description: solution.metaDescription,
      path: solution.path,
    }),
  }),
  component: RekallIqPage,
});

function RekallIqPage() {
  return <SolutionPageTemplate solution={solution} />;
}
