"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "@/components/common/Logo"
import ModeToggle from "./ModeToggle"
import MobileNav from "./MobileNav"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/data/nav"

export default function Header() {
  const pathname = usePathname() || "/"

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-white/15 bg-white/30 dark:bg-black/30 backdrop-blur-md">
        <div className="relative flex h-20 w-full items-center justify-between px-4 md:px-6 lg:px-10 2xl:px-14">
          {/* LEFT */}
          <Logo />

          {/* CENTER (tampil mulai md) */}
          <nav
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              hidden min-[850px]:flex h-14 min-w-[539px] items-center justify-center
            "
            aria-label="Primary"
          >
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isHome = item.href.includes("#hero")
                const isActive = isHome ? pathname === "/" : false
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "text-base transition-colors",
                        isActive ? "font-semibold text-foreground" : "text-foreground",
                        "hover:text-primary",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* RIGHT (desktop/tablet) */}
          <div className="hidden min-[850px]:flex items-center gap-3">
            <ModeToggle />
            <Button className="h-12 rounded-2xl px-8 text-base font-medium">
              Log In
            </Button>
          </div>

          {/* MOBILE TITLE — tengah */}
          <div className="min-[850px]:hidden absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-semibold text-foreground">Velogo</span>
          </div>

          {/* MOBILE ACTION — hamburger di kanan */}
          <div className="min-[850px]:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
