import Link from "next/link"

export default function PreFooter() {
  return (
    <section id="about-links" className="scroll-mt-24 py-12 md:py-16 border-t">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <img src="/icons/logo-dark.svg" className="block dark:hidden" width={36} height={36} alt="Velogo"/>
            <img src="/icons/logo-light.svg" className="hidden dark:block" width={36} height={36} alt="Velogo"/>
            <span className="text-lg font-semibold">Velogo</span>
          </div>
          <p className="text-sm text-muted-foreground">
            (placeholder) Deskripsi singkat perusahaan.
          </p>
        </div>

        <nav className="space-y-2">
          <p className="text-sm font-medium">Menu</p>
          <ul className="text-sm grid grid-cols-2 gap-2">
            <li><Link href="#hero" className="hover:text-primary">Home</Link></li>
            <li><Link href="#main-feature" className="hover:text-primary">Features</Link></li>
            <li><Link href="#how-it-works" className="hover:text-primary">How It Works</Link></li>
            <li><Link href="#testimonials" className="hover:text-primary">Testimonials</Link></li>
            <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </nav>

        <div className="space-y-2">
          <p className="text-sm font-medium">Follow us</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            {/* pakai lucide sebagai placeholder */}
            <a href="#" aria-label="Twitter" className="hover:text-primary">X</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">in</a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">IG</a>
          </div>
        </div>
      </div>
    </section>
  )
}
