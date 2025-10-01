import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import WhatsAppFloat from "@/components/common/WhatsAppFloat"
import Header from "@/components/layout/Header"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Velogo Clone",
  description: "Recreate velogo.ai with React + Tailwind + shadcn/ui",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(GeistSans.className, "min-h-dvh bg-background text-foreground antialiased")}>
        <ThemeProvider>
          <Header />
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
