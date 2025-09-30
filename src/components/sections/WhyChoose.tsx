"use client";

import { motion } from "framer-motion";
import { MessageCircle, RefreshCcw, Clock, Layers } from "lucide-react";
import * as React from "react";

/* --------------------------------- Types --------------------------------- */
type Feature = { title: string; description: string; icon: React.ReactNode };
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
        icon: <MessageCircle className="size-6 text-brand" />,
      },
      {
        title: "AI Automation",
        description:
          "An AI personal assistant that helps agents parse listings, respond quickly, and ensure no opportunities are missed.",
        icon: <RefreshCcw className="size-6 text-brand" />,
      },
      {
        title: "Time Efficiency",
        description:
          "Save hours on routine tasks, so you can serve more clients and increase your probability of closing.",
        icon: <Clock className="size-6 text-brand" />,
      },
      {
        title: "More than Marketplace",
        description:
          "Not just a marketplace—Velogo is a full AI platform with integrated tools to help your business grow.",
        icon: <Layers className="size-6 text-brand" />,
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
        icon: <MessageCircle className="size-6 text-brand" />,
      },
      {
        title: "AI Automation",
        description:
          "Asisten personal berbasis AI yang membantu parsing listing, respon cepat, dan memastikan tak ada peluang yang terlewat.",
        icon: <RefreshCcw className="size-6 text-brand" />,
      },
      {
        title: "Hemat Waktu",
        description:
          "Hemat berjam-jam pekerjaan rutin, sehingga Anda bisa melayani lebih banyak klien dan meningkatkan peluang closing.",
        icon: <Clock className="size-6 text-brand" />,
      },
      {
        title: "Lebih dari Sekadar Marketplace",
        description:
          "Bukan sekadar marketplace—Velogo adalah platform AI menyeluruh dengan tools terintegrasi untuk mendorong pertumbuhan bisnis.",
        icon: <Layers className="size-6 text-brand" />,
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <div className="glass-card glass-border-solid rounded-[32px] h-full shadow-md/40">
        <div className="p-6 md:p-7">
          <div className="flex items-start gap-3">
            <div className="shrink-0">{feature.icon}</div>
            <div className="space-y-2">
              <h3 className="title-geist text-foreground">{feature.title}</h3>
              <p className="desc-geist text-[hsl(var(--muted-foreground))]">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------- Decorative Background ------------------------- */
function BackgroundLayer() {
  return (
    <>
      {/* watermark (light only) */}
      <div className="pointer-events-none absolute inset-0 hidden dark:!hidden md:block">
        <div
          aria-hidden
          className="absolute -top-8 -left-8 w-[260px] h-[260px] opacity-10"
          style={{
            backgroundImage: "url('/images/why-choose/logo-background.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top left",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-10 -right-10 w-[320px] h-[320px] opacity-10"
          style={{
            backgroundImage: "url('/images/why-choose/logo-background.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
          }}
        />
      </div>

      {/* vignette tambahan */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(43,120,197,.35),transparent)] dark:[background:radial-gradient(1200px_600px_at_50%_-10%,hsl(var(--ring)/.15),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 [background:radial-gradient(60%_100%_at_50%_100%,hsl(var(--ring)/.30),transparent)]" />
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
        // FIGMA gradient full width
        "w-full",
        "bg-[radial-gradient(120%_100%_at_50%_0%,#2B78C5_0%,#0861BB_100%)]",
        "dark:section-black",
        // tinggi & padding sesuai figma
        "min-h-[836px] py-[120px]",
        className ?? "",
      ].join(" ")}
    >
      <BackgroundLayer />

      {/* content wrapper (centered, max 1440px) */}
      <div className="app-container max-w-[1440px] mx-auto relative z-10 h-full">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-page text-foreground">
            {heading ?? copy.heading}
          </h2>
          <p className="subheading-page mt-3 text-[hsl(var(--muted-foreground))]">
            {subheading ?? copy.subheading}
          </p>
        </div>

        {/* Grid – jarak 88px */}
        <div className="mt-[88px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}
