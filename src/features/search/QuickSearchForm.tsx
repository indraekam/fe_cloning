"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { PROPERTY_TYPES } from "@/data/search"

export default function QuickSearchForm() {
  const [buyRent, setBuyRent] = useState<"buy" | "rent">("buy")

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="mb-4 text-sm text-muted-foreground">Do you want to buy or rent?</div>

        {/* Segmented control sederhana pakai dua Button */}
        <div className="mb-6 flex gap-2">
          <Button
            type="button"
            variant={buyRent === "buy" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setBuyRent("buy")}
          >
            Buy
          </Button>
          <Button
            type="button"
            variant={buyRent === "rent" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setBuyRent("rent")}
          >
            Rent
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Property Type */}
          <div className="space-y-2">
            <Label>Property Type?</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select Property Type" /></SelectTrigger>
              <SelectContent>
                {PROPERTY_TYPES.map(pt => (
                  <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label>Location?</Label>
            <Input placeholder="Input Location" />
          </div>

          {/* Bedrooms */}
          <div className="space-y-2">
            <Label>Bedrooms?</Label>
            <Input type="number" min={0} defaultValue={0} />
          </div>

          {/* Min / Max Price */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            <div className="space-y-2">
              <Label>Min Price?</Label>
              <Input placeholder="Rp. 0" />
            </div>
            <div className="space-y-2">
              <Label>Max Price?</Label>
              <Input placeholder="Rp. 0" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full md:w-auto md:min-w-[160px] rounded-full">Search</Button>
        </div>
      </CardContent>
    </Card>
  )
}
