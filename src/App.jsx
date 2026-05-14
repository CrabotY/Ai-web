import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Capabilities from './components/Capabilities'
import Tools from './components/Tools'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#050510' }}>
      <Navbar />
      <Hero />
      <Benefits />
      <Capabilities />
      <Tools />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
