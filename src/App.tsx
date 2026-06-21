import NavbarSection from './components/NavbarSection'
import HeroSection from './components/HeroSection'
import CompaniesSection from './components/CompaniesSection'
import BrandingSection from './components/BrandingSection'
import DevelopmentSection from './components/DevelopmentSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      {/* Fixed top navbar */}
      <NavbarSection />

      {/* Main content — padded top to avoid navbar overlap */}
      <main style={{ paddingTop: '72px' }}>
        <HeroSection />
        <CompaniesSection />
        <BrandingSection />
        <DevelopmentSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <FooterSection />
    </>
  )
}

export default App
