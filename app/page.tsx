"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TouchOptimizedCard } from "@/components/touch-optimized-card"
import { ContactForm } from "@/components/contact-form"
import { MetricsSection } from "@/components/metrics-section"
import { SmoothScrollNav } from "@/components/smooth-scroll-nav"
import { Button } from "@/components/ui/button"
import { ScrollToTopLink } from "@/components/scroll-to-top-link"

// Simple SVG icons to replace lucide-react
const ZapIcon = () => (
  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </svg>
)

const MailIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

// Nuevo icono con engranaje en la parte superior del carrito
const ProcurementIcon = () => (
  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <g>
      {/* Carrito de compras en la parte inferior */}
      <g transform="translate(0, 8)">
        <path d="M7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1-6v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 5h7.45c.75 0 1.41-.41 1.75-1.03L21.7-4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </g>

      {/* Engranaje en la parte superior */}
      <g transform="translate(12, 2) scale(0.7)">
        <circle cx="0" cy="0" r="8" fill="currentColor" />
        <path
          d="M3.5,-6 L3.5,-8 L-3.5,-8 L-3.5,-6 L-1.5,-6 L-1.5,-4 L-3.5,-4 L-3.5,4 L-1.5,4 L-1.5,6 L-3.5,6 L-3.5,8 L3.5,8 L3.5,6 L1.5,6 L1.5,4 L3.5,4 L3.5,-4 L1.5,-4 L1.5,-6 Z M0,-3 C1.66,-3 3,-1.66 3,0 C3,1.66 1.66,3 0,3 C-1.66,3 -3,1.66 -3,0 C-3,-1.66 -1.66,-3 0,-3 Z"
          fill="white"
        />
        <circle cx="0" cy="0" r="2" fill="currentColor" />
      </g>
    </g>
  </svg>
)

export default function AllSuppliesWebsite() {
  const servicesData = [
    {
      title: "Energía, tecnología y seguridad",
      description: "Suministro y soporte técnico especializado para el sector industrial",
      icon: <ZapIcon />,
      color: "bg-brand-green-dark",
      borderColor: "border-t-brand-green-dark",
      href: "/servicios/energia-tecnologia",
      buttonColor: "bg-brand-green-dark hover:bg-brand-green",
    },
    {
      title: "Servicios de Procura Internacional",
      description: "Gestión integral de procesos de procura técnica para proyectos industriales",
      icon: <ProcurementIcon />,
      color: "bg-brand-blue-dark",
      borderColor: "border-t-brand-blue-dark",
      href: "/servicios/procura-internacional",
      buttonColor: "bg-brand-blue-dark hover:bg-brand-blue",
    },
    {
      title: "Servicios Financieros Internacionales",
      description: "Soluciones financieras especializadas para mercados",
      icon: <CreditCardIcon />,
      color: "bg-brand-green-dark",
      borderColor: "border-t-brand-green-dark",
      href: "/servicios/servicios-financieros",
      buttonColor: "bg-brand-green-dark hover:bg-brand-green",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header con navegación suave */}
      <SmoothScrollNav />

      {/* Hero Section con imagen de fondo */}
      <section id="inicio" className="relative py-20 overflow-hidden min-h-[80vh] flex items-center">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
          }}
        />

        {/* Overlay con gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue-dark/80 to-brand-blue-dark/70" />

        {/* Overlay adicional para móviles */}
        <div className="absolute inset-0 bg-brand-blue-dark/20 md:bg-transparent" />

        {/* Elementos decorativos sutiles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Soluciones Estratégicas Integrales
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-md">
                Empresa multinacional especializada en brindar soluciones estratégicas integrales a través de tres
                divisiones clave:
                <span className="font-semibold text-white"> Energía, tecnología y seguridad</span>,
                <span className="font-semibold text-white"> Servicios de Procura</span> y
                <span className="font-semibold text-white"> Gestión Financiera Internacional</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-up" delay={300}>
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-3xl mx-auto border border-white/30">
                <p className="text-lg text-white drop-shadow-sm">
                  Nuestra propuesta de valor combina{" "}
                  <span className="font-semibold text-brand-green-light">experiencia operativa</span>,{" "}
                  <span className="font-semibold text-brand-green-light">innovación tecnológica</span> y una{" "}
                  <span className="font-semibold text-brand-green-light">red global de aliados estratégicos</span> que
                  nos permite operar con eficiencia.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={50}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Servicios</h2>
              <div className="w-24 h-1 bg-brand-green-dark mx-auto"></div>
              <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                Descubre nuestras tres divisiones especializadas y cómo podemos impulsar el crecimiento de tu empresa
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <AnimatedSection
                key={index}
                animation={index === 0 ? "slide-left" : index === 1 ? "fade-up" : "slide-right"}
                delay={100 + index * 100}
                disableOnMobile={false}
                triggerOnce={false}
              >
                <div className="group">
                  <TouchOptimizedCard borderColor={service.borderColor}>
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`mx-auto mb-4 p-4 ${service.color} rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-text-primary">{service.title}</CardTitle>
                      <CardDescription className="text-text-secondary">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <ScrollToTopLink href={service.href}>
                        <Button
                          className={`w-full ${service.buttonColor} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold`}
                        >
                          Ver detalles completos
                        </Button>
                      </ScrollToTopLink>
                    </CardContent>
                  </TouchOptimizedCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={50}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Nuestros Productos</h2>
              <div className="w-24 h-1 bg-brand-green-dark mx-auto"></div>
              <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                Disponemos de una amplia gama de productos especializados de alta calidad para la industria
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Válvulas */}
            <AnimatedSection animation="fade-up" delay={100} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-orange-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/valvulas.jpg" 
                      alt="Válvulas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Válvulas</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Sistemas de válvulas de control industrial de alta especificación para petróleo y gas. Disponibles en todo el mundo con distribución desde USA. Bombeo avanzado y componentes de alta presión para aplicaciones críticas de producción.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Taladros */}
            <AnimatedSection animation="fade-up" delay={150} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-red-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-red-50 to-red-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/taladros.jpg" 
                      alt="Taladros" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Taladros</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Equipos de perforación profesionales y herramientas especializadas para operaciones de pozos en petróleo y gas. Rigs de perforación con capacidades desde 700 HP hasta 3000 HP. Tecnología de última generación con suministro directo desde USA.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-red-600 text-white hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Tornillería */}
            <AnimatedSection animation="fade-up" delay={200} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-yellow-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/tornilleria.jpg" 
                      alt="Tornillería" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Tornillería</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Componentes de fijación industrial certificados ASTM para petróleo y gas. Tornillería de precisión, espárragos para altas temperaturas, barras roscadas y accesorios especializados. Disponible en stock y fabricación especial con múltiples grados de aleación.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Herramientas */}
            <AnimatedSection animation="fade-up" delay={250} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-purple-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/herramientas.jpg" 
                      alt="Herramientas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Herramientas</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Herramientas de precisión profesionales de marcas premium (DeWalt, Nikato, Black+Decker, Stanley) para mantenimiento y operaciones de equipos industriales. Herramientas eléctricas y manuales de durabilidad garantizada para ambientes exigentes de petróleo y gas.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Revestidores */}
            <AnimatedSection animation="fade-up" delay={300} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-pink-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/revestidores.jpg" 
                      alt="Revestidores" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Revestidores</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Tuberías de revestimiento de acero de alta resistencia para pozos profundos en petróleo y gas. Disponibles múltiples dimensiones de diámetros externos (4 1/2" a 13 3/8") y espesores de pared. Tubería de producción y cabillas especializadas con certificación internacional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Sensor Wellcomm */}
            <AnimatedSection animation="fade-up" delay={350} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-cyan-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/sensor-wellcomm.jpg" 
                      alt="Sensor Wellcomm" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Sensor Wellcomm</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Sistema WellComm de monitoreo inteligente en tiempo real para pozos de petróleo y gas. Transmisión de datos inalámbrica remota, análisis avanzado de parámetros operacionales, sensores de presión y temperatura especializados para ambientes críticos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* HMI DataLogger */}
            <AnimatedSection animation="fade-up" delay={400} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-indigo-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/hmi-datalogger.jpg" 
                      alt="HMI DataLogger" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">HMI DataLogger</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Interface HMI con registro automático de datos (DataLogger) para sistemas de petróleo y gas. Visualización en tiempo real de parámetros operacionales, almacenamiento de datos históricos y control remoto de equipos industriales críticos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>

            {/* Variador */}
            <AnimatedSection animation="fade-up" delay={450} triggerOnce={false}>
              <div className="group h-full">
                <TouchOptimizedCard borderColor="border-emerald-500">
                  <div className="relative w-full h-56 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                    <img 
                      src="/products/variador.jpg" 
                      alt="Variador" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<svg class="w-24 h-24 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-text-primary">Variador</CardTitle>
                    <CardDescription className="text-text-secondary mt-2">
                      Variadores de frecuencia de alto rendimiento para control de velocidad de motores en sistemas de bombeo y producción. Convertidores especializados para petróleo y gas, eficiencia energética optimizada, reducción de costos operacionales y protección de equipos.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold">
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </TouchOptimizedCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="nosotros">
        <MetricsSection />
      </section>

      {/* Contact Section con Formulario */}
      <section id="contacto" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" delay={50}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Contáctanos</h2>
              <div className="w-24 h-1 bg-brand-green-dark mx-auto"></div>
              <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
                ¿Listo para optimizar tus operaciones? Completa el formulario y te contactaremos para una consulta
                personalizada
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario de Contacto */}
            <AnimatedSection animation="slide-left" delay={200} triggerOnce={false}>
              <ContactForm />
            </AnimatedSection>

            {/* Información de Contacto y Oficinas */}
            <div className="space-y-8">
              <AnimatedSection animation="slide-right" delay={300} triggerOnce={false}>
                <TouchOptimizedCard>
                  <CardHeader className="bg-brand-blue-dark text-white rounded-t-lg">
                    <CardTitle className="flex items-center space-x-2">
                      <MailIcon />
                      <span>Información de Contacto</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-brand-blue-50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Correos Electrónicos:</h4>
                        <div className="space-y-1">
                          <p className="text-text-secondary">info@allsuppliesinv.com</p>
                          <p className="text-text-secondary">allsuppliesinv@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TouchOptimizedCard>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={400} triggerOnce={false}>
                <TouchOptimizedCard>
                  <CardHeader className="bg-brand-green-dark text-white rounded-t-lg">
                    <CardTitle className="flex items-center space-x-2">
                      <MapPinIcon />
                      <span>Nuestra Oficina</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 bg-brand-green-50">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-brand-blue-dark mb-3 flex items-center space-x-2">
                          <span className="text-2xl">🇵🇦</span>
                          <span>Panamá</span>
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          Ave. Aquilino de la Guardia y Calle 47
                          <br />
                          PH Ocean Business Plaza - Torre Banesco
                          <br />
                          Piso 19, Ciudad de Panamá - Panamá
                        </p>
                        <a 
                          href="https://maps.google.com/?q=Ave.+Aquilino+de+la+Guardia+y+Calle+47,+Ocean+Business+Plaza,+Panama+City"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-brand-green-dark hover:text-brand-green font-semibold text-sm flex items-center space-x-1 hover:underline"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/>
                          </svg>
                          <span>Ver en Google Maps</span>
                        </a>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2">
                          <PhoneIcon />
                          <span>Teléfonos</span>
                        </h4>
                        <div className="space-y-1">
                          <p className="text-text-secondary text-sm">+(507) 6227-0820</p>
                          <p className="text-text-secondary text-sm">+1 (813) 922-5422</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </TouchOptimizedCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-brand-blue-dark py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo más grande en el footer */}
            <div className="flex justify-center">
              <img
                src="/logo-all-supplies-complete.png"
                alt="All Supplies & Investment Inc"
                className="h-20 w-auto object-contain md:h-24"
              />
            </div>

            {/* Información de la empresa */}
            <div className="text-center max-w-2xl">
              <p className="text-lg font-medium text-brand-blue-dark mb-2">
                Soluciones estratégicas integrales para mercados globales
              </p>
              <p className="text-text-secondary">
                Empresa multinacional especializada en Energía, tecnología y seguridad, Servicios de Procura y Gestión Financiera
                Internacional
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-text-secondary hover:text-brand-green-dark transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-text-secondary hover:text-brand-green-dark transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-text-secondary hover:text-brand-green-dark transition-colors"
              >
                Contacto
              </button>
            </div>

            {/* Información de contacto */}
            <div className="text-center text-sm text-text-secondary">
              <p>info@allsuppliesinv.com | allsuppliesinv@gmail.com</p>
              <p className="mt-1">+(507) 6227-0820 | +1 (813) 922-5422</p>
              <p className="mt-1 flex items-center justify-center space-x-2">
                <span className="text-lg">🇵🇦</span>
                <span>PH Ocean Business Plaza - Torre Banesco, Piso 19, Ciudad de Panamá - Panamá</span>
              </p>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-6 w-full text-center">
              <p className="text-sm text-text-muted">
                © 2025 All Supplies & Investment Inc. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "All Supplies & Investment Inc",
            description:
              "Empresa multinacional especializada en soluciones estratégicas para Energía, tecnología y seguridad, Servicios de Procura y Gestión Financiera Internacional",
            url: "https://allsuppliesinv.com",
            logo: "https://allsuppliesinv.com/logo-all-supplies-complete.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+507-6227-0820",
                contactType: "customer service",
                areaServed: ["PA", "US"],
                availableLanguage: "Spanish",
              },
            ],
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Ave. Aquilino de la Guardia y Calle 47, PH Ocean Business Plaza - Torre Banesco, Piso 19",
                addressLocality: "Ciudad de Panamá",
                addressCountry: "PA",
              },
            ],
            sameAs: ["https://linkedin.com/company/all-supplies", "https://twitter.com/allsupplies"],
            foundingDate: "2009",
            numberOfEmployees: "10-50",
            industry: "Technology and Energy Services",
          }),
        }}
      />
    </div>
  )
}
