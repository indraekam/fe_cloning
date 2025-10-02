"use client"

import Image from "next/image"
import Link from "next/link"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/628xxxxxxxxxx"
      target="_blank"
      className="fixed bottom-30 right-6 z-50 inline-flex h-17 w-17 items-center justify-center rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={68} height={68} />
    </Link>
  )
}
