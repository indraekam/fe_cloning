import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)} aria-label="Velogo Home">
    {/* logo: light vs dark */}
      <Image src="/icons/logo-dark.svg" alt="Velogo" width={50} height={50} className="block dark:hidden" />
      <Image src="/icons/logo-light.svg" alt="Velogo" width={50} height={50} className="hidden dark:block" />

      {/* wordmark hanya di mobile */}
      {/* <span className="md:hidden text-lg font-semibold text-foreground">Velogo</span> */}
    </Link>
  )
}
