// Meta Pixel helper — types + event tracking
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const fbqTrack = (
  event: string,
  params?: Record<string, unknown>,
  custom = false
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  if (custom) {
    window.fbq("trackCustom", event, params);
  } else {
    window.fbq("track", event, params);
  }
};

export const trackPageView = () => fbqTrack("PageView");
export {};