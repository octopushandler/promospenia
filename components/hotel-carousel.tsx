"use client"

import { useState, useEffect } from "react"
import HotelCard from "./hotel-card"

interface Hotel {
  id: number
  name: string
  rating: number
  discount: number
  image: string
}

const hotelsByCity: Record<string, Hotel[]> = {
  cartagena: [
    {
      id: 1,
      name: "Hotel Boutique Cartagena Playa",
      rating: 4.8,
      discount: 0,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/be/3f/1a/hotel-lm.jpg?w=900&h=500&s=1",
    },
    {
      id: 2,
      name: "Sofitel Santa Clara Cartagena",
      rating: 4.9,
      discount: 0,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/d3/df/d1/hotel-sofitel-legend.jpg?w=900&h=500&s=1",
    },
    {
      id: 3,
      name: "Hilton Cartagena",
      rating: 4.7,
      discount: 0,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/af/0b/96/el-hilton-cartagena-esta.jpg?w=900&h=500&s=1",
    },
    {
      id: 4,
      name: "Tcherassi Hotel & Spa",
      rating: 4.8,
      discount: 0,
      image: "hotels/cartagena-tcherassi.jpg",
    },
    {
      id: 5,
      name: "Charleston Santa Teresa",
      rating: 4.6,
      discount: 0,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/e4/7e/98/facade-charleston-santa.jpg?w=900&h=500&s=1",
    },
  ],
  bogota: [
    {
      id: 6,
      name: "Absolu Bogotá",
      rating: 4.9,
      discount: 0,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
    },
    {
      id: 7,
      name: "JW Marriott Bogotá",
      rating: 4.8,
      discount: 0,
      image: "/hotels/jwt_marriot_bogota.jfif",
    },
    {
      id: 8,
      name: "The Canopy by Hilton Bogotá",
      rating: 4.7,
      discount: 0,
      image: "/hotels/canopy_bogota.jpg",
    },
    {
      id: 9,
      name: "Casa Medina Bogotá",
      rating: 4.8,
      discount: 0,
      image: "/hotels/casa_medina_bogota.jpg",
    },
    {
      id: 10,
      name: "Dann Carlton Bogotá",
      rating: 4.6,
      discount: 0,
      image: "/hotels/dann_carlton_bogota.avif",
    },
  ],
  barranquilla: [
    {
      id: 11,
      name: "Sonesta Hotel Barranquilla",
      rating: 4.7,
      discount: 0,
      image: "/hotels/sonesta_hotel_barranquilla.jpg",
    },
    {
      id: 12,
      name: "Estelar Barranquilla",
      rating: 4.6,
      discount: 0,
      image: "/hotels/estelar_barranquilla.jpg",
    },
    {
      id: 13,
      name: "Hilton Garden Inn Barranquilla",
      rating: 4.8,
      discount: 0,
      image: "/hotels/hilton_barranquilla.avif",
    },
    {
      id: 14,
      name: "Capilla del Mar Hotel",
      rating: 4.7,
      discount: 0,
      image: "/hotels/capilla_mar_barranquilla.webp",
    },
    {
      id: 15,
      name: "San Felipe Boutique Hotel",
      rating: 4.5,
      discount: 0,
      image: "/hotels/san_felipe_barranquilla.avif",
    },
  ],
  pereira: [
    {
      id: 16,
      name: "Estelar Pereira",
      rating: 4.7,
      discount: 0,
      image: "/hotels/estelar_pereira.jpg",
    },
    {
      id: 17,
      name: "La Montaña Hotel Resort",
      rating: 4.8,
      discount: 0,
      image: "/hotels/la_montaña_pereira.jpg",
    },
    {
      id: 18,
      name: "Dann Carlton Pereira",
      rating: 4.6,
      discount: 0,
      image: "/hotels/dann_carlton_pereira.jpg",
    },
    {
      id: 19,
      name: "Hotel Tebaida Pereira",
      rating: 4.7,
      discount: 0,
      image: "/hotels/tebaida_pereira.jpg",
    },
    {
      id: 20,
      name: "Sunrise Boutique Pereira",
      rating: 4.5,
      discount: 0,
      image: "/hotels/sunrise_pereira.jpg",
    },
  ],
  cali: [
    {
      id: 21,
      name: "Mercontur Hotel Cali",
      rating: 4.7,
      discount: 0,
      image: "/hotels/mercontur_cali.jpg",
    },
    {
      id: 22,
      name: "Estelar Cali",
      rating: 4.8,
      discount: 0,
      image: "/hotels/estelar_cali.webp",
    },
    {
      id: 23,
      name: "Hilton Garden Inn Cali",
      rating: 4.6,
      discount: 0,
      image: "/hotels/hilton_cali.avif",
    },
    {
      id: 24,
      name: "Dann Carlton Cali",
      rating: 4.9,
      discount: 0,
      image: "/hotels/dann_carlton_cali.jpg",
    },
    {
      id: 25,
      name: "San Alejo Hotel Cali",
      rating: 4.7,
      discount: 0,
      image: "/hotels/san_alejo_cali.jfif",
    },
  ],
}

interface HotelCarouselProps {
  city: string
}

export default function HotelCarousel({ city }: HotelCarouselProps) {
  const [hotels, setHotels] = useState<Hotel[]>([])

  useEffect(() => {
    const cityHotels = hotelsByCity[city] || []
    const hotelsWithDiscounts = cityHotels.map((hotel) => ({
      ...hotel,
      discount: Math.floor(Math.random() * 11) + 15,
    }))
    setHotels(hotelsWithDiscounts)
  }, [city])

  return (
    <>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </>
  )
}
