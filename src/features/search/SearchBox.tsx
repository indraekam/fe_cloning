"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QuickSearchForm from "@/features/search/QuickSearchForm"
import { Send } from "lucide-react"

export default function SearchBox() {
  return (
    <div className="w-full max-w-3xl">
      {/* Bingkai biru + tab header */}
      <div className="rounded-2xl bg-primary text-primary-foreground shadow-lg">
        <div className="px-6 py-4 text-sm">Hi, what can velogo help you with?</div>

        <div className="bg-primary/90 rounded-b-2xl p-4">
          <Tabs defaultValue="ask" className="w-full">
            <div className="flex justify-end pr-1">
              <TabsList className="bg-background/60">
                <TabsTrigger value="ask" className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-full">
                  Ask Velogo
                </TabsTrigger>
                <TabsTrigger value="quick" className="data-[state=active]:bg-background data-[state=active]:text-foreground rounded-full">
                  Quick Search
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ASK */}
            <TabsContent value="ask" className="mt-4">
              <Card className="rounded-2xl">
                <div className="p-4 flex items-center gap-2">
                  <Input
                    placeholder="Enter an address, city, or property type..."
                    className="flex-1 h-12 rounded-xl"
                  />
                  <Button size="icon" className="rounded-xl h-12 w-12" aria-label="Send">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </TabsContent>

            {/* QUICK SEARCH */}
            <TabsContent value="quick" className="mt-4">
              <QuickSearchForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
