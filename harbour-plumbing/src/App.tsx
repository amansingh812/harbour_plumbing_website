import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Reviews from './components/Reviews'
import HowItWorks from './components/HowItWorks'
import ServiceAreas from './components/ServiceAreas'
import QuoteForm from './components/QuoteForm'
import Faq from './components/Faq'
import Footer from './components/Footer'
import MobileCtaBar from './components/MobileCtaBar'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()

  return (
    <div className="pt-[calc(var(--topbar-h)+var(--header-h))] pb-16 md:pb-0">
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <WhyUs />
        <Reviews />
        <HowItWorks />
        <ServiceAreas />
        <QuoteForm />
        <Faq />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
