import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/fbq";

/** Fires a Meta Pixel PageView on each route change (the initial one comes from index.html). */
const PixelPageView = () => {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
};

export default PixelPageView;
