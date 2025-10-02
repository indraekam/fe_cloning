"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section
      id="cta"
      className="section-anchor section-pad relative overflow-hidden cta-surface-gray"
    >
      <div
        className="grid-ellipse-figma"
        style={{
          ["--e-w" as any]: "1200px",
          ["--e-h" as any]: "220px",
          ["--cell" as any]: "40px",
        }}
      />

      <div className="app-container relative z-10">
        <h2 className="heading-page text-foreground text-center mb-10 md:mb-12">
          Ready to Elevate Your Business with AI?
        </h2>

        {/* === CARD === */}
        <div className="mx-auto">
          <div
            className={[
              "w-[310px]  h-[380px]",
              "md:w-[662px] md:h-[308px]",
              "lg:w-[662px] lg:h-[320px]",
              "bg-card text-card-foreground border border-border mx-auto overflow-hidden",
              "rounded-[16px]",
            ].join(" ")}
          >
            {/* Area Biru */}
            <div
              className={[
                "bg-primary text-primary-foreground",
                "h-[164px] md:h-[122px] lg:h-[128px]",
                "px-8 py-6",
                "rounded-t-[16px]",
                "flex items-center justify-center text-center gap-6",
              ].join(" ")}
            >
              <p className="font-medium leading-[1.45] text-[14px] md:text-[14px] lg:text-[16px]">
                Don’t get left behind. Join the Velogo waiting list today and be among
                the first to experience the future of real estate.
              </p>
            </div>

            {/* Area Putih */}
            <div
              className={[
                "bg-card text-card-foreground",
                "h-[216px] md:h-[186px] lg:h-[192px]",
                "px-8 py-6",
                "rounded-b-[16px]",
                "flex flex-col items-center justify-center gap-8",
              ].join(" ")}
            >
              {/* BUTTON */}
              <Button
                className={[
                  "btn-primary border border-border",
                  "rounded-[16px]",
                  "w-[153px] h-[56px]",        // HP 
                  "md:w-[144px] md:h-[53px]",  // Tablet
                  "lg:w-[153px] lg:h-[56px]",  // Laptop+
                  "px-8 py-4",
                  "inline-flex items-center justify-center gap-2",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-semibold leading-[1.5] tracking-[0.01em]",
                    "text-[16px] md:text-[14px] lg:text-[16px]",
                    "font-[var(--font-geist-sans,inherit)]",
                    "text-primary-foreground",
                  ].join(" ")}
                >
                  Join Now
                </span>
              </Button>

              {/* SUBTEXT */}
              <p
                className={[
                  "text-center text-muted-foreground",
                  "leading-[1.5] font-normal",
                  "font-[var(--font-geist-sans,inherit)]",
                  "text-[16px] md:text-[14px] lg:text-[16px]",
                  "tracking-[-0.0025em] md:tracking-[0.01em] lg:tracking-[-0.0025em]",
                ].join(" ")}
              >
                Join the 1000+ others that have signed up
              </p>
            </div>
          </div>
        </div>
        {/* === /CARD === */}
      </div>
    </section>
  );
}
