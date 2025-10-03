"use client";

import * as React from "react";
import Image from "next/image";

export default function PreFooter() {
  return (
    <section
      id="prefooter"
      className="section-anchor relative overflow-hidden bg-[#121212] text-white"
    >
      <div
        className={[
          // === FULL-BLEED ROW ===
          "w-full",

          // === HEIGHT (per spec) ===
          "min-h-[667px]",            // hp
          "md:min-h-[351px]",         // tablet
          "xl2:min-h-[387px]",        // laptop

          // === PADDING (per spec) ===
          "px-10 py-20",              // hp (40px)
          "md:px-45 md:py-20",        // tablet (40px)
          "xl2:px-45 xl2:py-20", // laptop (180px)

          // === LAYOUT ===
          "flex flex-col md:flex-row",
          "gap-[72px] md:gap-8",
          "md:items-start md:justify-between",
        ].join(" ")}
      >
        {/* LEFT: Logo + Deskripsi */}
        <div className="shrink-0">
          <Image
            src="/icons/logo-light.svg"
            alt="Velogo logo"
            width={71}
            height={71}
            priority
            className="block"
          />
          <p
            className={[
              "mt-6 max-w-[440px] text-white/70",
              "text-[14px] leading-[1.5] tracking-[-0.0025em]",           // HP
              "md:text-[14px] md:leading-[1.5] md:tracking-[0.01em]",      // Tablet
              "xl2:text-[16px] xl2:leading-[1.5] xl2:tracking-[-0.0025em]",// Laptop
            ].join(" ")}
            style={{ fontFamily: "var(--font-geist-sans, inherit)" }}
          >
            Velogo is a platform powered by Artificial Intelligence (AI) technology,
            designed to make the real estate industry easier and more accessible for everyone.
          </p>
        </div>

        {/* CENTER: Menu */}
        <nav aria-label="Sitemap" className="flex-1 md:flex md:justify-center">
          <ul
            className={[
              "grid",
              "leading-[2]",
              "text-[14px] tracking-[-0.0025em]",           // HP
              "md:text-[14px] md:tracking-[-0.0025em]",     // Tablet
              "xl2:text-[16px] xl2:tracking-[-0.0025em]",   // Laptop
            ].join(" ")}
            style={{ fontFamily: "var(--font-geist-sans, inherit)" }}
          >
            <li><a href="#hero" className="hover:text-brand transition-colors">Home</a></li>
            <li><a href="#main-feature" className="hover:text-brand transition-colors">Feature</a></li>
            <li><a href="#how-it-works" className="hover:text-brand transition-colors">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-brand transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-brand transition-colors">FAQ</a></li>
          </ul>
        </nav>

        {/* RIGHT: Social Icons */}
        <div className="shrink-0 flex items-center gap-6">
          <a
            href="https://web.facebook.com/people/Velogo-AI/61579291375073/"
            aria-label="Facebook"
            className="inline-flex h-6 w-6 items-center justify-center hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/pre-footer/fb.svg" alt="Facebook" width={24} height={24} priority />
          </a>
          <a
            href="https://www.instagram.com/velogo.ai/"
            aria-label="Instagram"
            className="inline-flex h-6 w-6 items-center justify-center hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/pre-footer/ig.svg" alt="Instagram" width={24} height={24} priority />
          </a>
          <a
            href="https://www.linkedin.com/company/velogo-ai/about/"
            aria-label="LinkedIn"
            className="inline-flex h-6 w-6 items-center justify-center hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/pre-footer/lk.svg" alt="LinkedIn" width={24} height={24} priority />
          </a>
        </div>
      </div>
    </section>
  );
}
