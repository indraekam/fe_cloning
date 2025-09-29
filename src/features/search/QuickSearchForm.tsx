"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
} from "@/components/ui/select"
import { PROPERTY_TYPES } from "@/data/search"

export default function QuickSearchForm() {
  const [buyRent, setBuyRent] = useState<"buy" | "rent">("buy")

  return (
    <form
      className="
        p-6 md:p-8
        rounded-2xl
      "
      onSubmit={(e) => {
        e.preventDefault()
        // TODO: handle quick-search submit
      }}
    >
      {/* Head copy: bold, hitam, 16px */}
      <div className="mb-4 text-[16px] font-bold text-black dark:text-white">
        Do you want to buy or rent?
      </div>
      {/* Segmented control: edge-to-edge (2 kolom sama lebar) */}
      <div className="mb-6 grid grid-cols-2 gap-2">
        <Button
          type="button"
          aria-pressed={buyRent === "buy"}
          variant={buyRent === "buy" ? "default" : "outline"}
          className={`
      h-11 md:h-12 w-full rounded-full text-[14px] font-medium
      ${buyRent !== "buy" ? "text-black dark:text-white" : ""}
    `}
          onClick={() => setBuyRent("buy")}
        >
          Buy
        </Button>

        <Button
          type="button"
          aria-pressed={buyRent === "rent"}
          variant={buyRent === "rent" ? "default" : "outline"}
          className={`
      h-11 md:h-12 w-full rounded-full text-[14px] font-medium
      ${buyRent !== "rent" ? "text-black dark:text-white" : ""}
    `}
          onClick={() => setBuyRent("rent")}
        >
          Rent
        </Button>
      </div>




      {/* Property Type: full width */}
      <div className="space-y-2 mb-4">
        <Label className="text-[16px] font-bold text-black dark:text-white">Property Type?</Label>
        <Select>
          <SelectTrigger className="h-20 rounded-2xl w-full px-4">
            <SelectValue placeholder="Select Property Type" />
          </SelectTrigger>
          <SelectContent>
            {PROPERTY_TYPES.map(pt => (
              <SelectItem key={pt.value} value={pt.value}>{pt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location & Bedrooms: berdampingan, full width */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <Label className="text-[16px] font-bold text-black dark:text-white">Location?</Label>
          <Input placeholder="Input Location" className="h-14 rounded-2xl" />
        </div>
        <div className="space-y-2">
          <Label className="text-[16px] font-bold text-black dark:text-white">Bedrooms?</Label>
          <Input type="number" min={0} defaultValue={0} className="h-14 rounded-2xl" />
        </div>
      </div>

      {/* Min / Max Price: berdampingan, full width */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-2">
          <Label className="text-[16px] font-bold text-black dark:text-white">Min Price?</Label>
          <Input placeholder="Rp. 0" className="h-14 rounded-2xl" />
        </div>
        <div className="space-y-2">
          <Label className="text-[16px] font-bold text-black dark:text-white">Max Price?</Label>
          <Input placeholder="Rp. 0" className="h-14 rounded-2xl" />
        </div>
      </div>

      {/* CTA: full width */}
      <Button className="w-full h-12 rounded-full text-[14px] font-medium">
        Search
      </Button>
    </form>
  )
}
