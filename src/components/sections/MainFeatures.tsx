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
    <section
      id="main-feature"
      aria-labelledby="main-feature-title"
      className="relative py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Outer shell */}
        <div className="mx-auto w-full max-w-[1100px] rounded-3xl border border-black/5 bg-[#f8fafc] backdrop-blur-md ring-1 ring-black/5 dark:bg-neutral-900/60 dark:border-white/10 dark:ring-white/10">
          {/* Header */}
          <div className="px-6 pt-8 text-center sm:px-10 mb-10">
            <span className="block mx-auto mb-2 text-[20px] font-medium text-neutral-500 dark:text-neutral-400">
              Powered by Velogo AI
            </span>
            <h2 id="main-feature-title" className="heading-page dark:text-white">
              Main Feature
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 justify-items-center sm:p-6 md:gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-full max-w-[260px] min-h-[240px]"
              >
                <FeatureCard feature={f} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 -z-10 mx-auto h-[360px] max-w-5xl rounded-[40px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl dark:from-blue-400/10"
      />
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="group h-full w-full rounded-2xl border-[#E6EFFF] bg-[#f5f9fb] transition-colors hover:bg-[#f0f4f6] dark:border-neutral-800/80 dark:bg-neutral-900/80 dark:hover:bg-neutral-900 flex flex-col">
      <CardHeader className="flex items-center justify-center pt-4 pb-1">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl">
          {feature.iconSrc ? (
            <Image
              src={feature.iconSrc}
              width={56}
              height={56}
              alt={feature.alt || feature.title}
            />
          ) : (
            feature.icon
          )}
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <CardTitle className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
            {feature.title}
          </CardTitle>
          <CardDescription className="mt-2 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
            {feature.description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
