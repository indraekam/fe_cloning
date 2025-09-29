"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,   // ← cukup Title saja, tanpa Header
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { NAV_ITEMS } from "@/data/nav"
import ModeToggle from "./ModeToggle"

export default function MobileNav() {
  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="h-10 w-10"
        >
          {/* theme-aware icon */}
          <img src="/icons/menu-dark.svg" className="block dark:hidden w-full h-full" alt="" />
          <img src="/icons/menu-light.svg" className="hidden dark:block w-full h-full" alt="" />
        </button>
      </SheetTrigger>

      {/* Sheet full-screen */}
      <SheetContent
        side="top"
        showClose={false}  // ← gunakan prop yang tadi kamu tambahkan di ui/sheet.tsx
        className="h-dvh w-full p-0 border-none bg-background/95 backdrop-blur"
      >
        {/* ✅ Judul aksesibilitas (tidak memakan ruang visual) */}
        <VisuallyHidden>
          <SheetTitle>Main navigation</SheetTitle>
        </VisuallyHidden>

        {/* Top bar */}
        <div className="flex h-14 items-center justify-between px-4 border-b">
          <Link href="/" className="inline-flex items-center gap-2">
            <img
              src="/icons/logo-dark.svg"
              alt="Velogo"
              width={36}
              height={36}
              className="block dark:hidden"
            />
            <img
              src="/icons/logo-light.svg"
              alt="Velogo"
              width={36}
              height={36}
              className="hidden dark:block"
            />
          </Link>

          {/* Close custom */}
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="h-10 w-10"
            >
              <img src="/icons/close-dark.svg" className="block dark:hidden w-full h-full" alt="" />
              <img src="/icons/close-light.svg" className="hidden dark:block w-full h-full" alt="" />
            </button>
          </SheetClose>
        </div>

        {/* Menu list */}
        <div className="flex flex-col items-center text-center gap-6 px-6 pt-8">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}

          {/* CTA */}
          <SheetClose asChild>
            <Button className="mt-2 h-11 rounded-2xl px-6 text-base">
              Masuk
            </Button>
          </SheetClose>
        </div>

        {/* Theme toggle */}
        <div className="absolute bottom-6 right-6">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
