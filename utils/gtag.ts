
export const GA_TRACKING_ID = "G-7N6TYTJCZZ";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  const {gtag}:any = window;
  gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label }: GTagEvent) => {
  const {gtag}:any = window;
  gtag("event", action, {
    event_category: category,
    event_label: label
  });
};