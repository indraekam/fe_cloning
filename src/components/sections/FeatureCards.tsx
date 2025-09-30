"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Pastikan font Geist sudah terpasang (global):
 * html { font-family: var(--font-geist-sans), system-ui, ... }
 * atau gunakan className "font-geist" bila sudah ada di projectmu.
 */

type Feature = {
  title: string;
  desc: string;
  img: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Matchmaking",
    desc:
      "With AI Utilization, Velogo introduces a new way to search for and post properties. Simply tell Velogo your requirements, and the system will carry out the search or posting accurately, quickly, and efficiently. The results will only show based on your requirement, giving you a greater chance of finding the right property.",
    img: "/images/feature-card/matchmaking.svg",
    alt: "Matchmaking feature",
  },
  {
    title: "CRM Leads",
    desc:
      "Velogo helps agents manage leads more effectively. Whenever a client shows interest in a property listing you are selling, agents receive instant notifications to track potential buyers, monitor their interactions, so agent can follow up at the right time, maximizing the chances of closing deals.",
    img: "/images/feature-card/crm.svg",
    alt: "CRM Leads feature",
  },
  {
    title: "Wishlist",
    desc:
      "When an agent searches for properties based on criteria such as budget, location, or property type but no matching results are found, the agent can create a saved search or wishlist using those criteria. Velogo will then monitor and instantly notify the agent as soon as a new matching listing appears, especially high-value properties or those priced below market. With this feature, agents will never miss an opportunity.",
    img: "/images/feature-card/wishlist.svg",
    alt: "Wishlist feature",
  },
  {
    title: "Market Analytics",
    desc:
      "Velogo equips agents with powerful analytics, from demand in specific locations and market trends to real-time price updates. Velogo also provides interactive charts showing average property prices, area demand levels, and other data to help agents make smarter decisions.",
    img: "/images/feature-card/analytic.svg",
    alt: "Market Analytics feature",
  },
];

export default function FeatureCard() {
  return (
    <section aria-labelledby="detail-features" className="py-16 lg:py-24">
      <h2 id="detail-features" className="sr-only">
        Detail Features
      </h2>

      <div className="container mx-auto px-4 space-y-10 lg:space-y-12">
        {FEATURES.map((f, i) => {
          const textFirst = i % 2 === 0; // 0,2 => text kiri; 1,3 => text kanan
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="mx-auto w-full xl:w-[1240px]" // fallback untuk xl:w-310 bila tidak ada di config
            >
              {/* Card wrapper:
                 - Light: solid #E0EFFF + light border
                 - Dark: glass linear-gradient (RGB) + backdrop-blur + dark border
                 - Zig-zag: md:flex-row atau md:flex-row-reverse */}
              <div
                className={[
                  "flex flex-col gap-10 py-5 px-4 md:p-10 h-auto w-full rounded-4xl",
                  "border border-[#B5D4F6] dark:border-[#2F2F2F]",
                  "bg-[#E0EFFF]",
                  "dark:bg-transparent dark:bg-[linear-gradient(195deg,rgba(43,255,255,0.10)_0%,rgba(43,255,255,0.02)_50%,rgba(43,255,255,0.06)_100%)]",
                  "dark:backdrop-blur-[84px] md:min-h-[471px]",
                  textFirst ? "md:flex-row-reverse" : "md:flex-row",
                ].join(" ")}
              >
                {/* IMAGE — mobile duluan (di atas) */}
                <div className="flex-1 flex items-center justify-center">
                  <Image
                    src={f.img}
                    alt={f.alt}
                    width={640}
                    height={420}
                    priority={i < 2}
                    className="rounded-2xl select-none" // tanpa border & shadow (sesuai request)
                  />
                </div>

                {/* TEXT AREA 505 × 208 (hug height) */}
                <div className="md:basis-[505px] md:min-h-[208px] md:shrink-0 flex items-center">
                  <div className="text-center md:text-left">
                    <h3
                      className={[
                        "font-bold text-[#111] dark:text-white font-geist",
                        // hp
                        "text-[24px] leading-snug",
                        // tablet
                        "md:text-[24px]",
                        // laptop+
                        "lg:text-[32px] lg:leading-tight",
                      ].join(" ")}
                    >
                      {f.title}
                    </h3>

                    <p
                      className={[
                        "mt-3 md:mt-4 font-geist tracking-[0.01em] leading-relaxed",
                        "text-[#2b2b2b] dark:text-white/85",
                        // hp
                        "text-[16px] font-normal",
                        // tablet
                        "md:text-[14px]",
                        // laptop+
                        "lg:text-[18px]",
                      ].join(" ")}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
