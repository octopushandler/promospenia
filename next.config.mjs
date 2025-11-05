/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_HOTEL_SEARCH_URL: "https://tu-dominio.com/buscar-hoteles",
  },
}

export default nextConfig
