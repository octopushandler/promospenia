"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/hero-section"
import CitySection from "@/components/city-section"
import Footer from "@/components/footer"

const cities = [
  { name: "Cartagena", slug: "cartagena" },
  { name: "Bogotá", slug: "bogota" },
  { name: "Barranquilla", slug: "barranquilla" },
  { name: "Pereira", slug: "pereira" },
  { name: "Cali", slug: "cali" },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <main className="space-y-16 py-16">
        {cities.map((city) => (
          <CitySection key={city.slug} city={city} />
        ))}
        <div className="container mx-auto px-4 py-12 text-center">
          <button className="px-12 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark hover:shadow-lg transition-all duration-300">
            Explorar todas las ciudades
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
