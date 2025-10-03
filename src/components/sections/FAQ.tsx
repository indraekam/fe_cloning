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
  { q: "How does Velogo.AI support property agents?", a: <>Velogo acts like your assistant, helping you automate tasks, find suitable properties, promote your listings, generate leads, and coordinate workflows. In short, Velogo saves you time, allows you to respond faster, and ensures you never miss an opportunity.</> },
  {
    q: "Can individuals use Velogo too?", a: <>
      Ya, Velogo tidak hanya untuk agen properti. Sebagai individu, Anda bisa memakainya seperti layaknya marketplace, cukup ketik properti yang dicari,lokasi, budget, atau preferensi khusus, dan Velogo akan menampilkan hasil yang paling relevan.</>
  },
  { q: "How do I join the Velogo AI, and what does it cost?", a: <>Velogo.AI is currently in a closed Beta program. You can request an invite by joining our waiting list. We’re gradually onboarding new users to ensure a great experience for everyone. During the Beta, all core features are free to use.</> },
  { q: "Is my data safe with Velogo?", a: <>Of course, we take data security very seriously. All your information on Velogo is encrypted and kept confidential. We will never share your listings, client information, or any other data with parties outside of Velogo without your permission.</> },
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
          <span className="block mb-2 text-[16px] md:text-[24px] text-muted-foreground">FAQ</span>
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
                  "relative overflow-hidden",
                  "rounded-[16px] bg-card text-card-foreground",
                  "border border-border",
                  "data-[state=open]:bg-[#E8F1FF] dark:data-[state=open]:bg-primary/10",
                  "data-[state=open]:border-primary/30",
                  "last:after:content-[''] last:after:absolute",
                  "last:after:left-0 last:after:right-0 last:after:bottom-0",
                  "last:after:h-px last:after:bg-border",
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
                    "group",
                  ].join(" ")}
                >
                  {/* separator muncul saat open */}
                  <div
                    className={[
                      "mx-5 md:mx-6 border-t",
                      "group-data-[state=open]:border-primary/20",
                      "dark:group-data-[state=open]:border-primary/25",
                      "group-data-[state=closed]:border-transparent",
                    ].join(" ")}
                  />

                  <div className="px-5 md:px-6 pt-4 text-primary font-normal">
                    {it.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="mt-8 md:mt-10">
          <button className="btn-primary rounded-md-token px-5 py-3 w-[291px]">Submit another question</button>
        </div>
      </div>
    </section>
  );
}
