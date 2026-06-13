import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import DemoSection from '@/components/DemoSection'
import ProcessSection from '@/components/ProcessSection'
import PackagesSection from '@/components/PackagesSection'
import ImpactSection from '@/components/ImpactSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <DemoSection />
        <ProcessSection />
        <PackagesSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
