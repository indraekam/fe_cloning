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
      className="h-12 w-12 rounded-2xl bg-primary/10 border-white/60 dark:border-white/30"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
