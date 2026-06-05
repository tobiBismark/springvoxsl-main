import { createFileRoute } from "@tanstack/react-router";

import { SolutionPageTemplate } from "@/components/site/SolutionPageTemplate";
import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS_BY_SLUG } from "@/lib/solutions";

const solution = SOLUTIONS_BY_SLUG["springvox-connect"];

export const Route = createFileRoute("/solutions/springvox-connect")({
  head: () => ({
    meta: buildSeoMeta({
      title: solution.pageTitle,
      description: solution.metaDescription,
      path: solution.path,
    }),
  }),
  component: SpringVoxConnectPage,
});

function SpringVoxConnectPage() {
  return <SolutionPageTemplate solution={solution} />;
}
