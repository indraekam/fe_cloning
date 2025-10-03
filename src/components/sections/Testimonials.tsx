"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating?: number;
};

const ITEMS: Testimonial[] = [
  {
    name: "Galuh Andini",
    role: "Senior Property Agent",
    avatar: "/images/testimonials/t1.png",
    quote:
      "Velogo AI helps me acquire and manage leads more effectively. With CRM Leads, we don’t just gain leads , we also get database that supports our sales development.",
    rating: 5,
  },
  {
    name: "Anjasmara",
    role: "Senior Property Agent",
    avatar: "/images/testimonials/t2.png",
    quote:
      "Velogo AI is incredibly easy to use, even for someone my age😁. The features are simple, practical, and truly support my daily work.",
    rating: 5,
  },
  {
    name: "Michel Azarin",
    role: "Property Seeker",
    avatar: "/images/testimonials/t3.png",
    quote:
      "Searching and uploading listings has become more efficient. By simply entering a prompt in WhatsApp, similar to using ChatGPT, the relevant properties results appear instantly. This feature is especially valuable when I'm in rush.",
    rating: 5,
  },
];

export default function Testimonials() {
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const step = (card?.offsetWidth ?? 320) + gap;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 sm:px-6">
      {/* WRAPPER */}
      <div
        className={[
          "max-w-[1280px] w-full min-h-[634px] mx-auto",
          "rounded-[32px] p-4 sm:p-6 md:p-10 border border-transparent",
          "[background:linear-gradient(226.86deg,#E6EFFF_-95.15%,#F9F9F9_57.72%)_padding-box,linear-gradient(135.88deg,#FFFFFF_-24.8%,#D6D6D6_55.55%)_border-box]",
          "backdrop-blur-[40px]",
          "shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
          "dark:bg-[rgba(255,255,255,0.06)] dark:border-white/10 dark:backdrop-blur-md",
          "flex flex-col gap-10 md:gap-20",
        ].join(" ")}
      >
        {/* header */}
        <div className="text-center">
          <p className="text-2xl md:text-base text-neutral-500 dark:text-neutral-400">
            Testimonials
          </p>
          <h2 className="heading-page text-foreground">
            What Do They Say About Velogo AI?
          </h2>
        </div>

        {/* slider + controls */}
        <div className="relative">
          <div
            ref={trackRef}
            aria-label="Testimonials"
            className={[
              // gunakan gutters & snap yang konsisten di mobile
              "flex gap-[20px] overflow-x-auto no-scrollbar",
              "gap-0 sm:gap-[20px]",
              "scroll-px-4 px-1", // gutters agar kartu tidak nempel tepi
              "snap-x snap-mandatory pb-2 rounded-[32px]",
            ].join(" ")}
          >
            {ITEMS.map((t, i) => (
              <TestimonialCard key={t.name + i} data-card t={t} />
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button
              variant="outline"
              className="h-12 w-12 rounded-sm"
              onClick={() => scrollBy("left")}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              className="h-12 w-12 rounded-sm"
              onClick={() => scrollBy("right")}
              aria-label="Next testimonials"
            >
              <ChevronRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
  ...rest
}: { t: Testimonial } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card
      {...rest}
      className={[
        // ukuran Figma + fallback mobile
        "snap-start shrink-0 h-[312px]",
        "w-full basis-full sm:w-[386px] sm:basis-[386px]",
        "rounded-[16px] border border-transparent",
        "[background:linear-gradient(195.05deg,rgba(255,255,255,.03)_0%,rgba(17,142,234,.02)_50%,rgba(255,255,255,.06)_100%)_padding-box,linear-gradient(#fff,#fff)_padding-box,linear-gradient(180deg,#E3E3E3_0%,#D7D7D7_100%)_border-box]",
        "shadow-[2px_4px_24px_8px_rgba(0,0,0,.04)]",
        "dark:[background:linear-gradient(195.05deg,rgba(255,255,255,.03)_0%,rgba(17,142,234,.02)_50%,rgba(255,255,255,.06)_100%)_padding-box,linear-gradient(#111,#111)_padding-box,linear-gradient(180deg,#3A3A3A_0%,#2D2D2D_100%)_border-box]",
      ].join(" ")}
    >
      <CardContent className="p-8 h-full">
        <div className="flex h-full flex-col gap-[20px]">
          <div className="flex items-center gap-6">
            <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-base font-semibold text-foreground leading-tight truncate">
                {t.name}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate my-1">
                {t.role}
              </p>
              <div className="mt-1.5 flex items-center gap-1 text-amber-500">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-[15px] leading-6 text-neutral-700 dark:text-neutral-300 line-clamp-[7]">
            “{t.quote}”
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
