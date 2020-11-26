
export const GA_TRACKING_ID = "G-7N6TYTJCZZ";

const {gtag}:any = window;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
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
  gtag("event", action, {
    event_category: category,
    event_label: label
  });
};