import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/pixel";

/** Fires Meta Pixel PageView on every SPA route change. */
const PixelTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);
  return null;
};

export default PixelTracker;