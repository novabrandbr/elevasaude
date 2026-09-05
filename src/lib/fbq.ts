declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackLead = () => {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Lead");
};

export const trackPageView = () => {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "PageView");
};
