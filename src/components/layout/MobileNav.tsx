"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { NAV_ITEMS } from "@/data/nav"
import ModeToggle from "./ModeToggle"

export default function MobileNav() {
  return (
    <Sheet>
      {/* Trigger (kanan header) */}
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="h-14 w-14 p-0 rounded-md"
        >

          <img src="/icons/menu-dark.svg"  className="block dark:hidden w-full h-full" alt="" />
          <img src="/icons/menu-light.svg" className="hidden dark:block w-full h-full" alt="" />
        </button>
      </SheetTrigger>

      {/* Full-screen sheet */}
      <SheetContent
        side="top"
        showClose={false}
        className="h-dvh w-full p-0 border-none bg-background/95 backdrop-blur"
      >
        <VisuallyHidden>
          <SheetTitle>Main navigation</SheetTitle>
        </VisuallyHidden>

        {/* Top bar */}
        <div className="app-container flex h-[104px] items-center justify-between border-b">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="Velogo Home">
            <img
              src="/icons/logo-dark.svg"
              alt="Velogo"
              width={50}
              height={50}
              className="block dark:hidden"
            />
            <img
              src="/icons/logo-light.svg"
              alt="Velogo"
              width={50}
              height={50}
              className="hidden dark:block"
            />
          </Link>

          {/* Close Sheet */}
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="h-14 w-14 p-0 rounded-md"
            >
              <img src="/icons/close-dark.svg"  className="block dark:hidden w-full h-full" alt="" />
              <img src="/icons/close-light.svg" className="hidden dark:block w-full h-full" alt="" />
            </button>
          </SheetClose>
        </div>

        {/* Menu list */}
        <div className="app-container flex flex-col items-center text-center gap-6 pt-8 pb-10">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-[16px] leading-6 font-medium text-foreground hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}

          {/* CTA */}
          <SheetClose asChild>
            <Button className="mt-2 h-14 w-[128px] rounded-md text-base font-medium">
              Log In
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
