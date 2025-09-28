"use client"

import Image from "next/image"
import Link from "next/link"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/628xxxxxxxxxx"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
    </Link>
  )
}
