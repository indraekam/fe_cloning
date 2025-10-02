"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export type Feature = {
  title: string;
  description: string;
  icon?: ReactNode;
  iconSrc?: string;
  alt?: string;
};

const FEATURES: Feature[] = [
  {
    title: "AI Matchmaking",
    description:
      "Post and find the right properties in seconds with AI-powered search and filters.",
    iconSrc: "/icons/main-feature/ai-matchmaking.svg",
    alt: "AI matchmaking icon",
  },
  {
    title: "CRM Leads",
    description:
      "Manage potential clients, database, and lead interactions from one central dashboard.",
    iconSrc: "/icons/main-feature/crm.svg",
    alt: "CRM icon",
  },
  {
    title: "Wishlist",
    description:
      "Save requirements. Velogo will notify you automatically when a matching listing appears.",
    iconSrc: "/icons/main-feature/wishlist.svg",
    alt: "Wishlist icon",
  },
  {
    title: "Market Analytics",
    description:
      "Real-time insights with interactive charts to set strategy and advise clients confidently.",
    iconSrc: "/icons/main-feature/analytic.svg",
    alt: "Analytics icon",
  },
];

export default function MainFeature() {
  return (
    <section id="main-feature" aria-labelledby="main-feature-title" className="relative section-pad">
      <div className="w-full flex justify-center">
        {/* PANEL */}
        <div
          className={[
            "mf-panel mx-auto",
            "w-[310px]",                         // mobile
            "sm:w-[944px]",                      // tablet
            "xl:w-[1280px]",                     // laptop 
            "p-10 m-10",
            "dark:bg-transparent dark:bg-[linear-gradient(195deg,rgba(43,255,255,0.10)_0%,rgba(43,255,255,0.02)_50%,rgba(43,255,255,0.06)_100%)]",
            "dark:backdrop-blur-[84px] md:min-h-[471px]",
            "border dark:border-[#2F2F2F]",
          ].join(" ")}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="block mx-auto mb-2 text-[16px] sm:text-[18px] text-neutral-400">
              Powered by Velogo AI
            </span>
            <h2 id="main-feature-title" className="heading-page dark:text-white">Main Feature</h2>
          </div>

          {/* Grid */}
          <div
            className={[
              "grid justify-center [grid-template-columns:230px]",          // mobile: 1 kolom
              "sm:[grid-template-columns:repeat(2,416px)]",                  // tablet: 2 kolom
              "xl:[grid-template-columns:repeat(4,276px)]",                  // laptop: 4 kolom 
              "gap-x-6 gap-y-8",
            ].join(" ")}
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={[
                  "h-[288px]",          // mobile
                  "sm:h-[261px]",       // tablet
                  "xl:h-[294px]",       // laptop 
                ].join(" ")}

              >
                <FeatureCard feature={f} />
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    </section>

  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card
      className={[
        "h-full w-full rounded-[16px] flex transition-colors",
        "border border-[#E6EFFF] bg-[#f5f9fb] hover:bg-[#f0f4f6]",
        "rounded-[16px]",
        "dark:border dark:border-solid dark:rounded-[16px]",
        "dark:[background:linear-gradient(180deg,rgba(8,97,187,0.03)_0%,rgba(8,97,187,0.05)_50%,rgba(8,97,187,0.07)_100%)_padding-box]",
        "dark:border dark:border-[rgba(43,255,255,0.2)]",
        "dark:[border-image-slice:1]",
        "dark:[background-clip:padding-box,border-box]",
        "dark:backdrop-blur-[84px]",
        "dark:shadow-[0_0_0_1px_rgba(43,255,255,0.06)_inset,0_10px_30px_rgba(0,0,0,0.35)]",
        "dark:hover:[background:linear-gradient(180deg,rgba(8,97,187,0.08)_0%,rgba(8,97,187,0.12)_50%,rgba(8,97,187,0.18)_100%)_padding-box,linear-gradient(180deg,rgba(43,255,255,0.32)_0%,rgba(43,255,255,0.10)_50%,rgba(43,255,255,0.16)_100%)_border-box]",
      ].join(" ")}
    >
      <CardContent className="p-8 w-full flex flex-col items-center text-center gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl">
          {feature.iconSrc ? (
            <Image src={feature.iconSrc} width={56} height={56} alt={feature.alt || feature.title} />
          ) : (
            feature.icon
          )}
        </div>

        <div className="flex flex-col gap-2">
          <CardTitle
            className={[
              "[font-family:var(--font-geist-sans)]",
              "text-center leading-[150%] tracking-[1%]",
              "text-[16px] font-bold",
              "md:font-semibold",
              "xl:text-[20px]",
              "text-neutral-900 dark:text-white",
            ].join(" ")}
          >
            {feature.title}
          </CardTitle>

          <CardDescription
            className={[
              "[font-family:var(--font-geist-sans)]",
              "text-center leading-[150%]",
              "text-[14px] font-normal tracking-[1%]",
              "xl:text-[16px] xl:tracking-[-0.25%]",
              "text-neutral-500 dark:text-neutral-400",
            ].join(" ")}
          >
            {feature.description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}

