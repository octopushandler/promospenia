/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_HOTEL_SEARCH_URL: "https://booking-phi-onhe.vercel.app",
  },
}

export default nextConfig
