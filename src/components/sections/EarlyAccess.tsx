"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

type StatItem = { label: string; value: number; suffix?: string }

const STATS: StatItem[] = [
  { label: "Agents on the Whitelist", value: 100, suffix: "+" },
  { label: "Main Features", value: 4 },
  { label: "Active Listings", value: 3000, suffix: "+" },
  { label: "Access Channels", value: 2 },
]

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function EarlyAccess() {
  const sectionRef = useRef<HTMLElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) { setStart(true); return }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) { setStart(true); io.disconnect() }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="early-access"
      ref={sectionRef}
      className="relative overflow-visible min-h-[400px] mt-16 md:mt-24 mb-8 md:mb-16"
    >
      <div className="app-container relative max-w-7xl mx-auto px-4 py-1 md:py-2 min-h-[400px] lg:py-4 min-h-[400px]flex flex-col justify-start">
        {/* Heading */}
        <h2
          className="
            text-center heading-page font-normal
            text-black dark:text-white
            mb-6 md:mb-8
            relative z-10
            mt-2 sm:mt-6 md:mt-10
          "
        >
          Get Early Access
        </h2>

        {/* Wrapper */}
        <div className="relative flex flex-col items-center">
          {/* MAP  */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto
              world-dots
              h-[520px] sm:h-[720px] md:h-[420px] lg:h-[420px]
              w-[min(95vw,1080px)]
              opacity-80 dark:opacity-60
              bg-neutral-400/60 dark:bg-neutral-500/50
              transition-transform
              -translate-y-4 sm:-translate-y-6 md:-translate-y-20 
            "
          />
          <div
            className="
              mt-2 md:mt-15
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
              gap-y-6 sm:gap-y-8 md:gap-y-8 gap-x-8
              text-center
            "
          >
            {STATS.map((s, i) => (
              <Stat key={i} {...s} start={start} />
            ))}
          </div>
        </div>

        {/* Subcopy */}
        <p className="mt-17 md:mt-15 mb-5 md:mb-7 text-center text-[14px] md:text-[16px] text-foreground/80">
          Ready to get started with Velogo?
        </p>

        {/* CTAs */}
        <div className="mt-3 md:mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {/* JOIN */}
          <Link
            href="#waitlist"
            className={[
              "inline-flex items-center justify-center",
              "h-[53px] md:h-[53px] lg:h-[56px]",
              "w-[310px] md:w-[221px] lg:w-[321px]",
              "gap-x-2",
              "rounded-[16px] border bg-primary text-primary-foreground",
              "shadow-md hover:brightness-110 transition",
            ].join(" ")}
          >
            Join the Waiting List
          </Link>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center justify-center",
              "h-[56px]",
              "w-[310px] md:w-[244px] lg:w-[232px]",
              "gap-x-2 lg:gap-x-[10px]",
              "rounded-[16px] border border-[#25D366] text-[#25D366]",
              "bg-white dark:bg-white hover:bg-[#E9F9EF] dark:hover:bg-[#1f3527]",
              "transition shadow-sm",
            ].join(" ")}
            aria-label="Connect via WhatsApp"
          >
            <span className="inline-block relative w-5 h-5">
              <Image
                src="/icons/whatsapp-button.svg"
                alt="Whatsapp"
                width={20}
                height={20}
              />
            </span>
            Connect WhatsApp
          </a>
        </div>


      </div>
    </section>
  )
}

function Stat({ label, value, suffix = "", start }: StatItem & { start: boolean }) {
  const [n, setN] = useState(0)
  const duration = 1200
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      setN(Math.round(value * easeOutCubic(p)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, value])

  const display = useMemo(() => `${n.toLocaleString()}${suffix}`, [n, suffix])

  return (
    <div className="flex flex-col items-center">
      <div className="text-[40px] md:text-[40px] lg:tex-[64px] font-bold leading-none text-black dark:text-white">
        {display}
      </div>
      <div className="mt-2 text-[24px] md:text-[16px] lg:text-[24px] text-foreground/70">
        {label}
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <Image
      src="/icons/whatsapp-button.svg"
      alt="WhatsApp"
      width={20}
      height={20}
    />
  )
}

