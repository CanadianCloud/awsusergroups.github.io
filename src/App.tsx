import { Header, Footer, ScrollToTop } from './components/layout'
import Hero from './components/sections/Hero'
import UpcomingEvents from './components/sections/UpcomingEvents'
import CommunityDay from './components/sections/CommunityDay'
import GetInvolved from './components/sections/GetInvolved'
import Gallery from './components/sections/Gallery'
import Partners from './components/sections/Partners'
import Sponsors from './components/sections/Sponsors'
import Slider from './components/sections/Slider'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <main className="min-h-screen">
        <Hero />
        <UpcomingEvents />
        <CommunityDay />
        <GetInvolved />
        <Gallery />
        <Slider />
        <Partners />
        <Sponsors />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
