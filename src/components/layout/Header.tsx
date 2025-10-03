"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "@/components/common/Logo"
import ModeToggle from "./ModeToggle"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/data/nav"
import MobileNav from "./MobileNav"

export default function Header() {
  const pathname = usePathname() || "/"

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* full-bleed glass strip */}
      <div className="glass border-b">
        {/* ⬇️ full width row, no max-width container */}
        <div
          className={[
            "relative flex h-[104px] items-center justify-between",
            // kontrol padding kiri/kanan per breakpoint (atur sesuka Figma-mu)
            "px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[180px]",
            // aman untuk notch (opsional)
            "pl-[calc(env(safe-area-inset-left)+1rem)] pr-[calc(env(safe-area-inset-right)+1rem)]",
          ].join(" ")}
        >
          {/* LEFT */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* CENTER (≥lg) – tetap center absolute terhadap parent full-width */}
          <nav
            className="
              absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block
            "
            aria-label="Primary"
          >
            <ul className="flex items-center gap-10">
              {NAV_ITEMS.map((item) => {
                const isHome = item.href.includes("#hero")
                const active = isHome ? pathname === "/" : false
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "text-[16px] leading-6 transition-colors",
                        active ? "font-semibold text-foreground" : "font-normal text-foreground",
                        "hover:text-brand",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* RIGHT (≥lg) */}
          <div className="hidden items-center gap-3 lg:flex">
            <ModeToggle />
            <Button className="h-14 w-[128px] rounded-md text-base font-medium">Log In</Button>
          </div>

          {/* MOBILE/TABLET (<lg) */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
            <span className="text-base font-semibold text-foreground">Velogo</span>
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
