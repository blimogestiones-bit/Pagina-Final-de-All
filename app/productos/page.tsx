"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { SmoothScrollNav } from "@/components/smooth-scroll-nav"
import { Button } from "@/components/ui/button"

const productsData = [
  {
    id: "valvulas",
    name: "Valvulas",
    image: "/products/valvulas.jpg",
    description: "Sistemas de valvulas de control industrial de alta especificacion para operaciones criticas. Disponibles en todo el mundo con suministro directo desde USA. Rango completo de capacidades para diferentes aplicaciones industriales.",
    features: [
      "Control de presion hasta 3000 PSI",
      "Compatible con tuberias 1/2\" a 4\"",
      "Cuerpo en acero carbon certificado",
      "Disponible en stock permanente",
      "Distribucion global desde USA",
      "Certificacion API 6A y ISO 14313"
    ]
  },
  {
    id: "taladros",
    name: "Taladros de Perforacion",
    image: "/products/taladros.jpg",
    description: "Equipos de perforacion profesionales con capacidades desde 700HP hasta 3000HP. Suministrados directamente desde USA con especificaciones tecnicas completas. Disenados para operaciones de pozos profundos y aplicaciones demandantes en la industria.",
    features: [
      "Capacidad: 700HP a 3000HP",
      "Sistemas de bombeo avanzado",
      "Tecnologia de ultima generacion",
      "Suministro desde USA",
      "Garantia internacional",
      "Soporte tecnico especializado"
    ]
  },
  {
    id: "tornilleria",
    name: "Tornilleria Industrial",
    image: "/products/tornilleria.jpg",
    description: "Componentes de fijacion certificados ASTM para la industria. Tornilleria de precision con multiples grados de aleacion. Especialmente disenada para ambientes corrosivos y altas temperaturas en aplicaciones industriales criticas.",
    features: [
      "Certificacion ASTM A193, A320, A353",
      "Esparragos para altas temperaturas",
      "Multiples grados de aleacion disponibles",
      "Fabricacion especial personalizada",
      "Stock permanente de items estandar",
      "Calibracion verificada y certificada"
    ]
  },
  {
    id: "herramientas",
    name: "Herramientas Profesionales",
    image: "/products/herramientas.jpg",
    description: "Herramientas de precision de marcas reconocidas internacionalmente. Equipos electricos y manuales disenados para ambientes exigentes de la industria. Durabilidad y rendimiento garantizados bajo las condiciones mas dificiles.",
    features: [
      "Marcas: DeWalt, Nikato, Stanley",
      "Herramientas electricas profesionales",
      "Equipos manuales de precision",
      "Diseno ergonomico y robusto",
      "Garantia del fabricante incluida",
      "Disponible para venta y renta"
    ]
  },
  {
    id: "revestidores",
    name: "Revestidores y Tuberias",
    image: "/products/revestidores.jpg",
    description: "Tuberias de revestimiento de acero de alta resistencia para construccion y operacion de pozos profundos. Disponibles en multiples dimensiones. Especificaciones tecnicas completas para cualquier aplicacion industrial.",
    features: [
      "Diametro externo: 4 1/2\" a 13 3/8\"",
      "Espesor de pared: 0.205\" a 0.514\"",
      "Tuberia de produccion disponible",
      "Cabillas en multiples tamanos",
      "Certificacion de resistencia verificada",
      "Disponible en acero carbon y aleaciones"
    ]
  },
  {
    id: "wellcomm",
    name: "Sensor WellComm",
    image: "/products/sensor-wellcomm.jpg",
    description: "Sistema avanzado de monitoreo inteligente en tiempo real para pozos. Transmision de datos inalambrica remota. Analisis avanzado de parametros operacionales criticos para la industria.",
    features: [
      "Monitoreo en tiempo real 24/7",
      "Transmision inalambrica confiable",
      "Sensores de presion y temperatura",
      "Almacenamiento de datos historicos",
      "Panel de control remoto",
      "Alertas y notificaciones automaticas"
    ]
  },
  {
    id: "hmi",
    name: "HMI DataLogger",
    image: "/products/hmi-datalogger.jpg",
    description: "Interface HMI profesional con registro automatico de datos para sistemas industriales. Visualizacion en tiempo real de parametros operacionales. Almacenamiento seguro de datos historicos con acceso remoto.",
    features: [
      "Interface grafica intuitiva",
      "Registro automatico de datos",
      "Almacenamiento en tiempo real",
      "Acceso remoto seguro",
      "Control de equipos integrado",
      "Reportes automaticos y analisis"
    ]
  },
  {
    id: "variador",
    name: "Variadores de Frecuencia",
    image: "/products/variador.jpg",
    description: "Convertidores de frecuencia de alto rendimiento para control de velocidad en sistemas de bombeo y produccion. Optimizacion de eficiencia energetica. Especializados para aplicaciones criticas en la industria.",
    features: [
      "Control de velocidad variable",
      "Eficiencia energetica optimizada",
      "Proteccion de equipos integrada",
      "Reduccion de costos operacionales",
      "Diseno industrial robusto",
      "Compatible con multiples motores"
    ]
  }
]

export default function ProductosPage() {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0])

  return (
    <div className="min-h-screen bg-slate-50">
      <SmoothScrollNav />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-blue-900 to-slate-900" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-brand-green/15 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Catalogo de Productos
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Soluciones especializadas para la industria
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Catalog with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar - Product List */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <div className="bg-brand-blue-dark text-white p-4">
                  <h2 className="font-bold text-lg">Productos</h2>
                </div>
                <nav className="divide-y divide-slate-200">
                  {productsData.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className={`w-full text-left px-4 py-4 transition-all duration-200 ${
                        selectedProduct.id === product.id
                          ? "bg-brand-green text-white font-semibold"
                          : "bg-white text-text-primary hover:bg-brand-green/10 hover:text-brand-green"
                      }`}
                    >
                      {product.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Panel - Product Detail */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Product Image */}
                <div className="relative h-80 md:h-96 bg-slate-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="flex items-center justify-center h-full bg-slate-200"><svg class="w-24 h-24 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>'
                      }
                    }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-brand-blue-dark mb-6">
                    {selectedProduct.name}
                  </h2>

                  {/* Description Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-brand-green mb-3 uppercase tracking-wide border-b border-brand-green pb-2">
                      Descripcion
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features Section - Separated */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-brand-green mb-4 uppercase tracking-wide border-b border-brand-green pb-2">
                      Caracteristicas Tecnicas
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProduct.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center space-x-3 bg-slate-50 p-3 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0"></div>
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6 border-t border-slate-200">
                    <Button className="w-full md:w-auto px-8 py-4 bg-brand-green text-white hover:bg-brand-green-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold text-lg">
                      Solicitar Cotizacion
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
