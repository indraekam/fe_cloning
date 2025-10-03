"use client";

import { Inter as FontInter } from 'next/font/google';

const inter200 = FontInter({
  weight: '200',          
  subsets: ['latin'],
  display: 'swap',
});

type Step = { title: string; description?: string };

const STEPS: Step[] = [
  {
    title: "Join the Waiting List",
    description: "Request a Beta invite to be whitelisted",
  },
  {
    title: "Velogo Will Notify You",
    description: "We’ll notify you when your access is ready",
  },
  {
    title: "Start Using Velogo",
    description:
      "Use AI search, smart posting, CRM leads, and market analytics.",
  },
];

function Arrow({ dir = "right" as "right" | "down" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={[
        "w-11 h-11 text-foreground/30",
        dir === "down" ? "rotate-90" : "",
      ].join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function StepItem({
  index,
  step,
}: {
  index: number;
  step: Step;
}) {
  return (
    <div className="relative flex-1 min-w-0 text-center">
      {/* Angka besar */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 -top-10 md:-top-12 text-center leading-none font-extralight text-foreground/10"
      >
        <span
          className={[
            inter200.className,
            "block",
            "text-[128px] md:text-[160px]",
            "leading-[128px] md:leading-[160px]",
            "font-extralight",
            "tracking-normal",
          ].join(" ")}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Konten step */}
      <div className="pt-24 md:pt-28">
        <div className="text-2xl font-normal text-foreground mb-3">
          {step.title}
        </div>
        {step.description ? (
          <p className="text-sm md:text-base text-muted-foreground max-w-[360px] mx-auto">
            {step.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={[
        "relative mx-auto overflow-hidden section-anchor",
        "w-full",
        "py-20 md:py-28",
      ].join(" ")}
    >
      {/* Header */}
      <div className="flex items-center flex-col text-center">
        <span className="block mx-auto mb-1 text-[14px] md:text-[16px] font-normal text-muted-foreground">
          How It Works
        </span>
        <h2 className="heading-page mb-2 text-foreground">
          Register Velogo in 3 Steps
        </h2>
        <h4 className="text-[16px] md:text-[20px] font-normal text-foreground/80">
          Velogo is in Beta Development. Access is provided via waiting list
        </h4>
      </div>

      {/* Steps */}
      <div className="mt-20 md:mt-40 flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-6">
        <StepItem index={0} step={STEPS[0]} />

        {/* Arrow: mobile (bawah) */}
        <div className="flex pb-5 md:hidden items-center justify-center">
          <Arrow dir="down" />
        </div>
        {/* Arrow: desktop (kanan) */}
        <div className="hidden md:flex items-center justify-center flex-none px-2 mt-[70px]">
          <Arrow dir="right" />
        </div>

        <StepItem index={1} step={STEPS[1]} />

        {/* Arrow: mobile (bawah) */}
        <div className="flex pb-5 md:hidden items-center justify-center">
          <Arrow dir="down" />
        </div>
        {/* Arrow: desktop (kanan) */}
        <div className="hidden md:flex items-center justify-center flex-none px-2 mt-[70px]">
          <Arrow dir="right" />
        </div>

        <StepItem index={2} step={STEPS[2]} />
      </div>



      {/* CTA */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <button
          type="button"
          className={[
            "inline-flex items-center justify-center",
            "rounded-2xl px-6 md:px-8 h-12 w-[329px]",
            "bg-primary text-primary-foreground",
            "shadow-[0_8px_24px_rgba(0,0,0,0.08)]",
            "transition-transform hover:-translate-y-0.5 active:translate-y-0",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
          ].join(" ")}
        >
          Join Waiting List Now
        </button>
      </div>
    </section>
  );
}
