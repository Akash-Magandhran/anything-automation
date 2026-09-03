import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import CardGridSection from './components/CardGridSection'
import Industries from './components/Industries'
import Brands from './components/Brands'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoSection from './components/VideoSection'
import { getCompanyProfile, getServices, getIndustries, getMachines, getBrands } from './api/client'
import {
  fallbackProfile, fallbackServices, fallbackIndustries, fallbackMachines, fallbackBrands,
} from './api/fallbackData'

export default function App() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [services, setServices] = useState(fallbackServices)
  const [machines, setMachines] = useState(fallbackMachines)
  const [industries, setIndustries] = useState(fallbackIndustries)
  const [brands, setBrands] = useState(fallbackBrands)

  useEffect(() => {
    // Each call falls back to brochure content individually if the live
    // Django API isn't reachable yet, so the site is never broken/empty.
    getCompanyProfile().then(setProfile).catch(() => {})
    getServices().then(d => d.length && setServices(d)).catch(() => {})
    getMachines().then(d => d.length && setMachines(d)).catch(() => {})
    getIndustries().then(d => d.length && setIndustries(d)).catch(() => {})
    getBrands().then(d => d.length && setBrands(d)).catch(() => {})
  }, [])

  return (
    <>
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <VideoSection />
      <WhyChooseUs items={profile.why_choose_us} />
      <CardGridSection
        id="scope" eyebrow="Our Scope of Work" title="Everything your line needs, under one team"
        subtitle="From programming to panel wiring — a single, accountable team across the whole build."
        items={services} columns={3}
      />
      <CardGridSection
        id="machines" eyebrow="Special Machine Manufacturing" title="Custom-built machines for your process"
        items={machines} columns={4} showDesc={false} alt
      />
      <Industries items={industries} />
      <Brands brands={brands} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </>
  )
}
