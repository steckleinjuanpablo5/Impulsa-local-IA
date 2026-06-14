import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import FeaturesSection from '@/components/FeaturesSection'
import CasosUsoSection from '@/components/CasosUsoSection'
import DemoSection from '@/components/DemoSection'
import DiagnosticoSection from '@/components/DiagnosticoSection'
import ProcessSection from '@/components/ProcessSection'
import PackagesSection from '@/components/PackagesSection'
import ComparadorSection from '@/components/ComparadorSection'
import ConfianzaSection from '@/components/ConfianzaSection'
import ImpactSection from '@/components/ImpactSection'
import FAQSection from '@/components/FAQSection'
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
        <CasosUsoSection />
        <DemoSection />
        <DiagnosticoSection />
        <ProcessSection />
        <PackagesSection />
        <ComparadorSection />
        <ConfianzaSection />
        <ImpactSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
