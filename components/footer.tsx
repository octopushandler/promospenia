"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre nosotros */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre nosotros</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Historias de viajeros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Prensa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Centro de ayuda */}
          <div>
            <h3 className="font-bold text-lg mb-4">Centro de ayuda</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Centro de seguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Asistencia al viajero
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de cancelación
                </a>
              </li>
            </ul>
          </div>

          {/* Síguenos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © {currentYear} Mega Promoción. Todos los derechos reservados. | Desarrollado con ❤️ para los viajeros de
            Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
