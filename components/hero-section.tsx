"use client"

export default function HeroSection() {
  const handleButtonClick = () => {
    const searchUrl = process.env.NEXT_PUBLIC_HOTEL_SEARCH_URL
    if (searchUrl) {
      window.location.href = searchUrl
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/90 to-primary/5 py-32 md:py-48 lg:py-56">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="animate-sign text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
              <span className="text-white drop-shadow-lg animate-glow">mega</span>
              <br className="hidden md:block" />
              <span className="text-accent drop-shadow-lg" style={{ textShadow: "0 0 30px rgba(255, 107, 53, 0.5)" }}>
                promoción
              </span>
            </h1>
          </div>

          <div className="animate-float" style={{ animationDelay: "0.3s" }}>
            <p className="text-center text-xl md:text-2xl text-white max-w-3xl leading-relaxed font-semibold">
              Descuentos increíbles en hospedajes de todo el país
            </p>
            <p className="text-center text-lg text-white/80 max-w-3xl leading-relaxed mt-3">
              Desde la costa caribeña hasta el corazón de los Andes. Ahorra hasta 50% en tus próximas vacaciones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8" style={{ animationDelay: "0.6s" }}>
            <button 
              onClick={handleButtonClick}
              className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 drop-shadow-lg"
            >
              Explorar ofertas
            </button>
            <button 
              onClick={handleButtonClick}
              className="px-10 py-4 border-3 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Ver ciudades
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
