import Image from "next/image"
import SearchBox from "@/features/search/SearchBox"

export default function Hero() {
  return (
    <section id="hero" className="relative section-anchor">
      {/* === BACKGROUND IMAGE + WHITE FOG OVERLAY === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Head.jpg"
          alt="City skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* Offset header */}
      <div className="pt-[184px]" />

      <div
        className="
          app-container
          flex min-h-[796px] flex-col items-center
          pb-12
        "
      >
        {/* === CHIP === */}
        <div
          className="
    inline-flex items-center justify-center gap-2
    w-[270px] h-[37px]           /* mobile: 270x37 */
    rounded-[32px]
    bg-white/10 backdrop-blur-md
    border border-cyan-300/40
    shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_1px_6px_rgba(0,0,0,0.08)]
    md:w-auto md:h-auto          /* tablet+: kembali ke auto */
    md:px-5 md:py-2.5
  "
        >
          <img src="/icons/sparkle.svg" alt="" className="h-4 w-4 opacity-80 md:h-5 md:w-5" />
          <span
            className="
      text-[14px]                 /* mobile: 14px */
      md:text-[16px]              /* tablet+: 16px (tidak berubah) */
    "
            style={{ color: "#121212CC" }}
          >
            The Future of Real Estate is Here
          </span>
        </div>

        {/* === HEADING + SUBTITLE === */}
        <div className="mt-4 md:mt-6 text-center">
          <h1
            className="
      heading-page
      font-bold leading-tight text-black
    "
          >
            Your Most Powerful AI Tool to Grow Smarter,
            <br className="hidden md:block" />
            Faster, and Bigger
          </h1>

          <p
            className="
      mx-auto mt-3 md:mt-4
      max-w-7xl
      subheading-page
      font-bold text-black
    "
          >
            AI-powered Real Estate tools designed to manage end-end journey from
            finding relevant properties and handling leads to analyzing market
            trends and driving conversions.
          </p>
        </div>


        {/* SEARCH PANEL */}
        <div className="mt-8 md:mt-10 w-full flex justify-center">
          <SearchBox />
        </div>
      </div>
    </section>
  )
}
