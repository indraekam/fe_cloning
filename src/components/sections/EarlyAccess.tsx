"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"

type StatItem = { label: string; value: number; suffix?: string }

const STATS: StatItem[] = [
  { label: "Agents on the Whitelist", value: 100, suffix: "+" },
  { label: "Main Features", value: 4 },
  { label: "Active Listings", value: 3000, suffix: "+" },
  { label: "Access Channels", value: 2 },
]

// Easing biar animasi halus
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export default function EarlyAccess() {
  const sectionRef = useRef<HTMLElement>(null)
  const [start, setStart] = useState(false)

  // Mulai animasi ketika 40% section terlihat
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (media.matches) {
      setStart(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true)
          io.disconnect()
        }
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
      className="relative overflow-visible min-h-[400px] mt-16 md:mt-24 mb-8 md:mb-16" // ⬅️ DIPENDEKKAN
    >
      <div
        className="
          app-container relative max-w-7xl mx-auto px-4 py-8 md:py-10 min-h-[400px] flex flex-col justify-start
        "
      >
        {/* BG world map — background KONTEN, top sejajar heading */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0 -z-10 flex items-start justify-center
          "
        >
          <div
            className="
               world-dots
              h-[clamp(190px,38vw,360px)]
              w-[clamp(300px,60vw,840px)]
              opacity-80 dark:opacity-60
              bg-neutral-400/60 dark:bg-neutral-500/50
              transition-opacity
            "
          />
        </div>

        {/* Heading (akan sejajar top map karena map pakai items-start + mask-position:top) */}
        <h2 className="text-center heading-page font-normal text-black dark:text-white -mt-12 mb-10">
          Get Early Access
        </h2>

        {/* Stats */}
        <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-8 text-center my-7">
          {STATS.map((s, i) => (
            <Stat key={i} {...s} start={start} />
          ))}
        </div>

        {/* Subcopy */}
        <p className="mt-6 md:mt-8 text-center text-[14px] md:text-[16px] text-foreground/80">
          Ready to get started with Velogo?
        </p>

        {/* CTAs (TIDAK DIUBAH) */}
        <div className="mt-3 md:mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="#waitlist"
            className="
              inline-flex items-center justify-center
              h-12 px-6 rounded-lg bg-primary text-primary-foreground
              shadow-md hover:brightness-110 transition
              min-w-[240px]
            "
          >
            Join the Waiting List
          </Link>

          <a
            href="https://wa.me/628XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              h-12 px-6 rounded-lg
              border border-[#25D366] text-[#25D366] bg-white dark:bg-white
              hover:bg-[#E9F9EF] dark:hover:bg-[#1f3527] transition shadow-sm
              min-w-[240px]
            "
          >
            <WhatsAppIcon className="h-5 w-5" />
            Connect WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

/** Komponen Stat dengan animasi count-up */
function Stat({
  label,
  value,
  suffix = "",
  start,
}: StatItem & { start: boolean }) {
  const [n, setN] = useState(0)
  const target = value
  const duration = 1200 // ms

  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = easeOutCubic(p)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target])

  const display = useMemo(() => `${n.toLocaleString()}${suffix}`, [n, suffix])

  return (
    <div className="flex flex-col items-center">
      <div className="text-[28px] md:text-[40px] font-bold text-black dark:text-white leading-none">
        {display}
      </div>
      <div className="mt-2 text-[14px] md:text-[16px] text-foreground/70">
        {label}
      </div>
    </div>
  )
}

/** Inline WhatsApp icon (tanpa lib brand) */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.937 3 5 7.938 5 14.005c0 2.39.72 4.613 1.955 6.46L6 29l8.71-0.92a10.89 10.89 0 0 0 1.294.078C22.062 28.158 27 23.22 27 17.153 27 11.085 22.07 6.147 16.004 6.147zM9.24 24.62l.42-2.468a1.12 1.12 0 0 0-.16-.81 9.13 9.13 0 0 1-1.52-5.33c0-5.053 4.11-9.163 9.164-9.163 5.053 0 9.163 4.11 9.163 9.163 0 5.054-4.11 9.164-9.163 9.164a9.1 9.1 0 0 1-4.58-1.245 1.12 1.12 0 0 0-.81-.11l-2.514.8z" />
      <path d="M21.78 19.53c-.27.13-1.59.78-1.83.86-.24.09-.42.13-.61-.13-.18-.27-.7-.86-.86-1.04-.16-.18-.32-.2-.59-.07-.27.13-1.15.43-2.19 1.38-.8.71-1.34 1.58-1.5 1.85-.16.27-.03.42.1.55.1.1.27.27.4.43.13.16.18.27.27.45.09.18.04.34-.02.47-.07.13-.61 1.47-.84 1.99-.22.53-.44.46-.61.46-.16 0-.35.02-.54.02s-.5-.07-.76-.35c-.27-.27-1-1-1-2.44 0-1.44 1.02-2.84 1.17-3.03.16-.18 2.25-3.43 5.45-4.81 3.2-1.38 3.2-.93 3.77-.87.58.05 1.88.77 2.16 1.52.27.76.27 1.41.18 1.54-.09.13-.24.2-.5.33z" />
    </svg>
  )
}
