import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top on normal navigation
    if (hash) return;

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]); // include hash

  return null;
}