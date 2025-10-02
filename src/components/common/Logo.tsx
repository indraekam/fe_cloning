import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/#hero"
      aria-label="Velogo Home"
      className={cn("inline-flex items-center gap-2", className)}
    >

      <Image
        src="/icons/logo-dark.svg"
        alt="Velogo"
        width={50}
        height={50}
        className="block dark:hidden"
        priority
      />
      <Image
        src="/icons/logo-light.svg"
        alt="Velogo"
        width={50}
        height={50}
        className="hidden dark:block"
        priority
      />
    </Link>
  )
}
