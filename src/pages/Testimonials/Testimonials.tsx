"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div id="testimonials" className="rounded-md flex flex-col antialiased bg-white dark:bg-[#0c0524] items-center justify-center relative overflow-hidden border-b-2">
      <h1 className="text-4xl font-bold tracking-widest py-6 bg-gradient-to-br from-fuchsia-600 to-white text-transparent bg-clip-text drop-shadow-xl md:text-4xl lg:text-5xl">
        What they Say
      </h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Layanan web development yang luar biasa! Timnya sangat profesional, cepat tanggap, dan menghasilkan website yang responsif serta fungsional. Hasil akhirnya melebihi ekspektasi saya. Sangat direkomendasikan!",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "Website kami kini lebih cepat, modern, dan user-friendly berkat layanan web development yang luar biasa!",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "Portofolio saya kini terlihat lebih profesional dan menarik. Website yang dibangun sangat cepat, responsif, dan mencerminkan identitas saya dengan sempurna!",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Luar biasa! Website yang dibangun tidak hanya terlihat estetis, tetapi juga memiliki performa yang cepat dan pengalaman pengguna yang mulus. Sangat puas dengan hasilnya!",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Tim ini berhasil mentransformasi website bisnis kami menjadi platform yang lebih profesional dan meningkatkan konversi pelanggan secara signifikan!",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
