"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: React.ReactNode };
type FaqProps = {
  items?: FaqItem[];
  defaultOpenIndex?: number;
  className?: string;
};

const DEFAULT_ITEMS: FaqItem[] = [
  { q: "How does Velogo.AI support property agents?", a: <>Velogo.AI streamlines lead capture…</> },
  { q: "Can individuals use Velogo too?", a: <>Bisa. Velogo.AI dirancang untuk perorangan…</> },
  { q: "How do I join the Velogo AI, and what does it cost?", a: <>Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.</> },
  { q: "Is my data safe with Velogo?", a: <>Ya. Enkripsi in-transit & at-rest…</> },
];

export default function Faq({
  items = DEFAULT_ITEMS,
  defaultOpenIndex = 1,
  className = "",
}: FaqProps) {
  const defaultValue =
    defaultOpenIndex != null && items[defaultOpenIndex]
      ? `item-${defaultOpenIndex + 1}`
      : undefined;

  return (
    <section id="faq" className={`section-wrap section-anchor ${className}`}>
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <span className="block mb-2 text-[14px] md:text-[16px] text-muted-foreground">FAQ</span>
          <h2 className="heading-page text-foreground">Frequently Asked Question</h2>
        </div>

        <Accordion type="single" collapsible defaultValue={defaultValue} className="flex flex-col gap-4">
          {items.map((it, idx) => {
            const value = `item-${idx + 1}`;
            return (
              <AccordionItem
                key={value}
                value={value}
                className={[
                  "border rounded-[16px] bg-card text-card-foreground",
                  "data-[state=open]:bg-[#E8F1FF] dark:data-[state=open]:bg-primary/10",
                  "data-[state=open]:border-primary/30",
                ].join(" ")}
              >
                {/* Trigger */}
                <AccordionTrigger
                  className={[
                    "group w-full px-5 md:px-6 py-4 md:py-5",
                    "flex items-center justify-between gap-4 text-left",
                    "font-medium transition-colors",
                    "data-[state=open]:text-primary data-[state=open]:font-semibold",
                    "[&>svg]:size-5 md:[&>svg]:size-6",
                    "text-muted-foreground group-data-[state=open]:text-primary",
                  ].join(" ")}
                >
                  <div className="flex-1">{it.q}</div>
                </AccordionTrigger>

                {/* Content */}
                <AccordionContent
                  className={[
                    "px-0 pb-5 md:pb-6 pt-0", 
                    "text-[14px] md:text-[16px] leading-relaxed",
                  ].join(" ")}
                >
                  {/* separator muncul saat open */}
                  <div className="mx-5 md:mx-6 border-t data-[state=open]:border-primary/20 dark:data-[state=open]:border-primary/25 data-[state=closed]:border-transparent" />

                  <div className="px-5 md:px-6 pt-4 text-primary font-normal">
                    {it.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="mt-8 md:mt-10">
          <button className="btn-primary rounded-md-token px-5 py-3">Submit another question</button>
        </div>
      </div>
    </section>
  );
}
