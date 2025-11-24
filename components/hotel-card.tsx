"use client"

import { Star } from "lucide-react"

interface Hotel {
  id: number
  name: string
  rating: number
  discount: number
  image: string
}

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <img
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />

        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
          -{hotel.discount}%
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2 truncate">{hotel.name}</h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-muted"}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">{hotel.rating}</span>
        </div>

        <button 
          onClick={() => {
            const searchUrl = process.env.NEXT_PUBLIC_HOTEL_SEARCH_URL
            if (searchUrl) {
              window.location.href = searchUrl
            }
          }}
          className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Ver disponibilidad
        </button>
      </div>
    </div>
  )
}
