"use client"

import { useEffect, useRef, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QuickSearchForm from "@/features/search/QuickSearchForm"
import { Send } from "lucide-react"

export default function SearchBox() {
  const [tab, setTab] = useState<"ask" | "quick">("ask")
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (tab === "quick") {
        const el = boxRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const vpH = window.innerHeight
        const pad = 24
        const overflowBottom = rect.bottom - vpH
        if (overflowBottom > 0) {
          window.scrollBy({ top: overflowBottom + pad, behavior: "smooth" })
          return
        }
        const headerOffset = 96
        const overflowTop = headerOffset - rect.top
        if (overflowTop > 0) {
          window.scrollBy({ top: -overflowTop - 12, behavior: "smooth" })
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    })
    return () => window.cancelAnimationFrame(id)
  }, [tab])

  return (
    <div ref={boxRef} className="w-full max-w-3xl">
      <div className="rounded-2xl bg-primary text-primary-foreground shadow-lg overflow-hidden">
        {/* HEADER  */}
        <div
          className="
    px-4 md:pl-6 md:pr-0 py-4
    flex flex-col md:flex-row
    items-center md:items-center
    gap-3 md:gap-4
  "
        >
          {/* Title */}
          <div className="text-[14px] md:text-[16px] font-semibold text-center md:text-left">
            Hi, what can velogo help you with?
          </div>

          {/* Tabs */}
          <Tabs
            value={tab}
            onValueChange={(v) => setTab(v as any)}
            className="w-full md:w-auto md:ml-auto md:mr-10"
          >
            <TabsList
              className="
        bg-popover text-foreground w-full md:w-[262px] h-[60px] md:h-[69px] rounded-2xl p-2 flex items-center justify-between gap-2 shadow-sm"
            >
              <TabsTrigger
                value="ask"
                className="
          w-1/2 md:w-[116px] h-[42px] md:h-[45px] rounded-full
          text-[12px] md:text-[14px] font-medium
          data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground
          data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground
          data-[state=active]:border data-[state=active]:border-primary
          transition-colors
        "
              >
                Ask Velogo
              </TabsTrigger>

              <TabsTrigger
                value="quick"
                className="
                  w-1/2 md:w-[116px] h-[42px] md:h-[45px] rounded-full
                  text-[12px] md:text-[14px] font-medium
                  data-[state=inactive]:bg-transparent data-[state=inactive]:text-foreground
                  data-[state=active]:!bg-primary data-[state=active]:!text-primary-foreground
                  data-[state=active]:border data-[state=active]:border-primary
                  transition-colors
        "
              >
                Quick Search
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>



        {/* BODY */}
        <div className="bg-white dark:bg-black dark:text-white rounded-b-2xl p-4">
          <Tabs value={tab} onValueChange={(v) => setTab(v as any)} className="w-full">

            <TabsContent value="ask" className="mt-0">
              <form
                className="p-4"
                onSubmit={(e) => {
                  e.preventDefault()

                }}
              >
                <div className="relative">

                  <Input
                    placeholder="Enter an address, city, or property type..."
                    className="
          h-16 w-full rounded-2xl
          pr-16
        "
                  />

                  {/* Tombol Send */}
                  <Button
                    type="submit"
                    size="icon"
                    aria-label="Send"
                    className="
          absolute right-2 top-1/2 -translate-y-1/2
          h-12 w-12 rounded-xl
          shadow
        "
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>
            </TabsContent>


            {/* QUICK SEARCH */}
            <TabsContent value="quick" className="mt-0">
              <QuickSearchForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
