import { useEffect } from "react";

// Hook to animate elements with [data-animate] on scroll
export default function useScrollAnimation() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("[data-animate]").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
