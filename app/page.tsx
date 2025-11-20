// pages/index.tsx (or app/page.tsx if you're using app router)
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Define your hash -> URL map
    const routes: Record<string, string> = {
      "#github": "https://www.github.com/SweHostingPoland",
      "#discord": "https://discord.gg/morot-moderation-support-981247140519108658",
    };

    const hash = window.location.hash;

    if (hash && routes[hash]) {
      // Redirect to the mapped link
      window.location.href = routes[hash];
    } else {
      // Default redirect
      window.location.href = "https://www.solidqode.org";
    }
  }, []);

  // This will never render because redirect is instant
  return <p>Redirecting...</p>;
}
