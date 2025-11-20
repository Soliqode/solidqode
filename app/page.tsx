"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const routes: Record<string, string> = {
      "#youtube": "https://www.youtube.com/your-channel-here",
      "#discord": "https://discord.gg/your-discord-here",
    };

    const hash = window.location.hash;

    if (hash && routes[hash]) {
      window.location.href = routes[hash];
    } else {
      window.location.href = "https://solidqode.org";
    }
  }, []);

  return <p>Redirecting...</p>;
}
