const DEFAULT_SITE_URL = "https://springvox.com";

export const SITE_NAME = "SpringVox Solutions Limited";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
export const DEFAULT_OG_IMAGE = `${SITE_URL}/brand/springvox-logo.svg`;

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}

export function buildSeoMeta({ title, description, path = "/", type = "website" }: SeoOptions) {
  const url = `${SITE_URL}${path}`;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  ];
}

export function getOrganizationStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: "contact@springvox.com",
      logo: `${SITE_URL}/brand/springvox-logo.svg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      areaServed: ["Nigeria", "Africa"],
      sameAs: [SITE_URL],
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@springvox.com",
      areaServed: "NG",
      availableLanguage: ["en"],
    },
  ];
}
