"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { NAV_ITEMS } from "@/data/nav"
import ModeToggle from "./ModeToggle"

export default function MobileNav() {
  return (
    <Sheet>
      {/* Trigger hamburger (kanan header) */}
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Open menu"
          className="
            h-10 w-10 rounded-2xl
            bg-background/40 backdrop-blur-md
            border-white/30 dark:border-white/20
            ring-1 ring-cyan-300/20 dark:ring-cyan-400/15
            hover:bg-background/50 transition
          "
        >
          {/* pakai file SVG yang kamu upload */}
          <img
            src="/icons/menu.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </Button>
      </SheetTrigger>

      {/* Full-screen sheet */}
      <SheetContent
        side="top"
        className="h-dvh w-full p-0 border-none bg-background/95 backdrop-blur"
      >
        {/* Bar atas: logo kiri, tombol close kanan */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Link href="/" className="inline-flex items-center gap-2">
            <img
              src="/icons/logo-light.svg"
              alt="Velogo"
              width={28}
              height={28}
              className="hidden dark:block"
            />
            <img
              src="/icons/logo-dark.svg"
              alt="Velogo"
              width={28}
              height={28}
              className="block dark:hidden"
            />
          </Link>

          <SheetClose asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Close menu"
              className="
                h-10 w-10 rounded-2xl
                bg-background/40 backdrop-blur-md
                border-white/30 dark:border-white/20
                ring-1 ring-cyan-300/20 dark:ring-cyan-400/15
                hover:bg-background/50
              "
            >
              <img
                src="/icons/close.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
              />
            </Button>
          </SheetClose>
        </div>

        {/* Daftar menu */}
        <div className="flex flex-col items-center gap-6 px-6 pt-8">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-base text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}

          <SheetClose asChild>
            <Button className="mt-2 h-11 rounded-2xl px-6 text-base">
              Masuk
            </Button>
          </SheetClose>
        </div>

        {/* Theme toggle di kanan bawah */}
        <div className="absolute bottom-6 right-6">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
