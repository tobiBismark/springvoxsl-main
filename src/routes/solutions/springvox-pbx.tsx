import { createFileRoute } from "@tanstack/react-router";

import { SolutionPageTemplate } from "@/components/site/SolutionPageTemplate";
import { buildSeoMeta } from "@/lib/seo";
import { SOLUTIONS_BY_SLUG } from "@/lib/solutions";

const solution = SOLUTIONS_BY_SLUG["springvox-pbx"];

export const Route = createFileRoute("/solutions/springvox-pbx")({
  head: () => ({
    meta: buildSeoMeta({
      title: solution.pageTitle,
      description: solution.metaDescription,
      path: solution.path,
    }),
  }),
  component: SpringVoxPbxPage,
});

function SpringVoxPbxPage() {
  return <SolutionPageTemplate solution={solution} />;
}
