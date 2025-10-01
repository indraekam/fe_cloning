"use client";

import { motion } from "framer-motion";
import { MessageCircle, RefreshCcw, Clock, Layers } from "lucide-react";
import Image from "next/image";
import * as React from "react";

/* --------------------------------- Types --------------------------------- */
type Feature = { title: string; description: string; icon: string };
type WhyChooseProps = {
  locale?: "en" | "id";
  heading?: string;
  subheading?: string;
  className?: string;
};

/* ------------------------------- Copy (EN/ID) ------------------------------ */
const COPY = {
  en: {
    heading: "Why Choose Velogo.AI?",
    subheading: "Unlock four powerful advantages you won’t find elsewhere",
    features: [
      {
        title: "Whatsapp Integration",
        description:
          "Velogo.AI is specifically designed to be accessible through WhatsApp. This ensures the platform is available where users are already active, facilitating seamless adoption.",
        icon: "/icons/why-choose/whatsapp-light.svg",
      },
      {
        title: "AI Automation",
        description:
          "An AI personal assistant that helps agents parse listings, respond quickly, and ensure no opportunities are missed.",
        icon: "/icons/why-choose/ai-search-light.svg",
      },
      {
        title: "Time Efficiency",
        description:
          "Save hours on routine tasks, so you can serve more clients and increase your probability of closing.",
        icon: "/icons/why-choose/time-light.svg",
      },
      {
        title: "More than Marketplace",
        description:
          "Not just a marketplace—Velogo is a full AI platform with integrated tools to help your business grow.",
        icon: "/icons/why-choose/whatsapp-light.svg",
      },
    ] as Feature[],
  },
  id: {
    heading: "Kenapa Harus Pilih Velogo AI?",
    subheading: "Nikmati empat keunggulan eksklusif dari Velogo",
    features: [
      {
        title: "Integrasi ke WhatsApp",
        description:
          "Velogo dirancang agar bisa langsung diakses lewat WhatsApp. Dengan begitu, adopsi terasa natural karena pengguna sudah aktif di channel tersebut.",
        icon: "/icons/why-choose/whatsapp-light.svg",
      },
      {
        title: "AI Automation",
        description:
          "Asisten personal berbasis AI yang membantu parsing listing, respon cepat, dan memastikan tak ada peluang yang terlewat.",
        icon: "/icons/why-choose/ai-search-light.svg",
      },
      {
        title: "Hemat Waktu",
        description:
          "Hemat berjam-jam pekerjaan rutin, sehingga Anda bisa melayani lebih banyak klien dan meningkatkan peluang closing.",
        icon: "/icons/why-choose/time-light.svg",
      },
      {
        title: "Lebih dari Sekadar Marketplace",
        description:
          "Bukan sekadar marketplace—Velogo adalah platform AI menyeluruh dengan tools terintegrasi untuk mendorong pertumbuhan bisnis.",
        icon: "/icons/why-choose/more-light.svg",
      },
    ] as Feature[],
  },
};

/* --------------------------- Reusable FeatureCard -------------------------- */
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="min-w-0"
    >
      <div className="wc-card w-full shadow-md/40 min-h-[183px]">
        <div className="flex items-center gap-2">
          <Image
            src={feature.icon}
            width={36}
            height={36}
            alt={""}
          />
          <h3 className="font-[20px] font-semibold text-foreground">{feature.title}</h3>
        </div>
        <p className="font-[14px] text-foreground mt-[24px] p-0">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}


/* --------------------------- Decorative Background ------------------------- */
function BackgroundLayer() {
  return (
    <>
      {/* Watermark (light only, hilang di dark) */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div
          aria-hidden
          className="wm-velogo absolute -top-30 -left-7 w-[360px] h-[360px]"
        />
        <div
          aria-hidden
          className="wm-velogo absolute -bottom-28 -right-1 w-[360px] h-[360px]"
        />
      </div>

      {/* Vignette & glow */}
      <div className="pointer-events-none absolute inset-0 z-[1] [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(43,120,197,.35),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-10%,hsl(var(--ring)/.15),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-[1] [background:radial-gradient(60%_100%_at_50%_100%,hsl(var(--ring)/.30),transparent)]" />
    </>
  );
}

/* --------------------------------- Section -------------------------------- */
export default function WhyChoose({
  locale = "en",
  heading,
  subheading,
  className,
}: WhyChooseProps) {
  const copy = COPY[locale];
  const FEATURES = copy.features;

  return (
    <section
      id="why-velogo"
      className={[
        "relative overflow-hidden section-anchor",
        "w-full section-blue-radial",
        "min-h-[836px] pb-[120px]",
        className ?? "",
      ].join(" ")}
    >
      <BackgroundLayer />

      {/* content wrapper (centered, max 1440px) */}
      <div className="app-container max-w-[1440px] mx-auto relative z-10 h-full  px-4 md:px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mt-[120px]">
          <h2 className="heading-page text-primary-foreground">
            {heading ?? copy.heading}
          </h2>
          <p className="subheading-page mt-2 text-primary-foreground">
            {subheading ?? copy.subheading}
          </p>
        </div>

        {/* Grid – jarak 88px */}
        <div className="mt-[88px] grid gap-x-10 gap-y-10 
        grid-cols-1 md:grid-cols-2 place-items-stretch">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
