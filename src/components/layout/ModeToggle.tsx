"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = (theme ?? resolvedTheme) === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        h-14 w-14 p-0                      /* 56×56px */
        rounded-md border
        glass bg-transparent
      "
    >
      <Sun className="!h-[32px] !w-[32px] rotate-0 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
      <Moon className="absolute !h-[32px] !w-[32px]  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  )
}
