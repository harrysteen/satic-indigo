"use client";

import { useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";

export default function HeroMain() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <HeroBackground isPlaying={isPlaying} onClose={() => setIsPlaying(false)}>
      {/* Disable video trigger for now, fallback to /about link */}
      <HeroText />
    </HeroBackground>
  );
}
