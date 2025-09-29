import Hero from "@/components/sections/Hero"
import EarlyAccess from "@/components/sections/EarlyAccess"
import MainFeatures from "@/components/sections/MainFeatures"
import FeatureCards from "@/components/sections/FeatureCards"
import WhyChoose from "@/components/sections/WhyChoose"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"
import PreFooter from "@/components/sections/PreFooter"
import Footer from "@/components/sections/Footer"

export default function Page() {
  return (
    <main>
      <Hero />
      <EarlyAccess />
      <MainFeatures />
      <FeatureCards />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <PreFooter />
      <Footer />
      {/* TODO: Logos, Features, How It Works, Testimonials, FAQ, Footer */}
      {/* <h1 className="text-2xl font-semibold">Baseline OK — Next + Tailwind + shadcn/ui</h1>
      <p className="text-muted-foreground">Dark/Light toggle ada di header (kanan atas).</p> */}
    </main>
  )
}
