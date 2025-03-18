"use client";

import Navbar from "@/pages/Navbar/Navbar";
import Image from "next/image";
import Waves from "@/components/ui/Waves";
import Hero from "@/pages/Hero/Hero";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import Portfolio from "@/pages/Porftfolio/Portfolio";
import InfiniteMovingCardsDemo from "@/pages/Testimonials/Testimonials";
import Contact from "@/pages/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(7, 5, 4)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={30}
        yGap={16}
        className="-z-50"
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <InfiniteMovingCardsDemo />
      <Contact />
    </div>
  );
}
