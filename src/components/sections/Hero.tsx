import Image from "next/image"
import { cn } from "@/lib/utils"
import SearchBox from "@/features/search/SearchBox"
import Header from "@/components/layout/Header"

export default function Hero() {
  return (
    <section id="hero" className="relative">
      {/* background hero di belakang SEMUA isi section (termasuk header) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80 z-10" />
        <Image
          src="/images/Head.jpg"
          alt="City skyline"
          fill
          priority
          className={cn("object-cover")}
          sizes="100vw"
        />
      </div>

      {/* HEADER jadi bagian dari hero */}
      {/* <Header /> */}

      {/* Konten hero */}
      <div className="container pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="mx-auto mt-6 w-fit rounded-full bg-background/70 backdrop-blur px-4 py-2 text-xs md:text-sm border shadow-sm">
          ✨ Era Baru Properti Dimulai Sekarang
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            AI Tools paling powerful untuk bantu Anda<br className="hidden md:block" />
            berkembang lebih cepat dan lebih efisien
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Tools properti berbasis AI yang dirancang untuk memudahkan perjalanan Anda mulai
            dari cari properti relevan, kelola leads, analisis tren pasar, sampai closing transaksi.
          </p>
        </div>

        <div className="mt-8 md:mt-10 flex justify-center">
          <SearchBox />
        </div>
      </div>
    </section>
  )
}
