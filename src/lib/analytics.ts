type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", eventName: string, params?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackAnalyticsEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const detail = {
    event: eventName,
    path: window.location.pathname,
    ...payload,
  };

  window.dispatchEvent(new CustomEvent("springvox:analytics", { detail }));
  window.dataLayer?.push(detail);
  window.gtag?.("event", eventName, detail);
  window.plausible?.(eventName, { props: detail });

  if (import.meta.env.DEV) {
    console.debug("[analytics]", detail);
  }
}
