import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { HowItWorks } from './components/HowItWorks'
import { Examples } from './components/Examples'
import { Security } from './components/Security'
import { Integrations } from './components/Integrations'
import { Deployment } from './components/Deployment'
import { EarlyAccess } from './components/EarlyAccess'
import { Footer } from './components/Footer'
import './styles/global.css'

function App() {
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setScrollTarget(null)
    }
  }, [scrollTarget])

  const handleNavigate = (section: string) => {
    setScrollTarget(section)
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Product />
        <HowItWorks />
        <Examples />
        <Security />
        <Integrations />
        <Deployment />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  )
}

export default App