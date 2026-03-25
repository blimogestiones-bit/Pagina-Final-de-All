"use client"

import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TouchOptimizedCard } from "@/components/touch-optimized-card"
import { SmoothScrollNav } from "@/components/smooth-scroll-nav"
import { Button } from "@/components/ui/button"

const productsData = [
  {
    id: "valvulas",
    name: "Válvulas",
    image: "/products/valvulas.jpg",
    description: "Sistemas de válvulas de control industrial de alta especificación para operaciones críticas en petróleo y gas. Disponibles en todo el mundo con suministro directo desde USA. Rango completo de capacidades para diferentes aplicaciones.",
    features: [
      "Control de presión hasta 3000 PSI",
      "Compatible con tuberías 1/2\" a 4\"",
      "Cuerpo en acero carbón certificado",
      "Disponible en stock permanente",
      "Distribución global desde USA",
      "Certificación API 6A y ISO 14313"
    ]
  },
  {
    id: "taladros",
    name: "Taladros de Perforación",
    image: "/products/taladros.jpg",
    description: "Equipos de perforación profesionales con capacidades desde 700HP hasta 3000HP. Suministrados directamente desde USA con especificaciones técnicas completas. Diseñados para operaciones de pozos profundos y aplicaciones demandantes.",
    features: [
      "Capacidad: 700HP a 3000HP",
      "Sistemas de bombeo avanzado",
      "Tecnología de última generación",
      "Suministro desde USA",
      "Garantía internacional",
      "Soporte técnico especializado"
    ]
  },
  {
    id: "tornilleria",
    name: "Tornillería Industrial",
    image: "/products/tornilleria.jpg",
    description: "Componentes de fijación certificados ASTM para industria de petróleo y gas. Tornillería de precisión con múltiples grados de aleación. Especialmente diseñada para ambientes corrosivos y altas temperaturas.",
    features: [
      "Certificación ASTM A193, A320, A353",
      "Espárragos para altas temperaturas",
      "Múltiples grados de aleación disponibles",
      "Fabricación especial personalizada",
      "Stock permanente de ítems estándar",
      "Calibración verificada y certificada"
    ]
  },
  {
    id: "herramientas",
    name: "Herramientas Profesionales",
    image: "/products/herramientas.jpg",
    description: "Herramientas de precisión de marcas reconocidas internacionalmente. Equipos eléctricos y manuales diseñados para ambientes exigentes de petróleo y gas. Durabilidad y rendimiento garantizados bajo las condiciones más difíciles.",
    features: [
      "Marcas: DeWalt, Nikato, Stanley",
      "Herramientas eléctricas profesionales",
      "Equipos manuales de precisión",
      "Diseño ergonómico y robusto",
      "Garantía del fabricante incluida",
      "Disponible para venta y renta"
    ]
  },
  {
    id: "revestidores",
    name: "Revestidores y Tuberías",
    image: "/products/revestidores.jpg",
    description: "Tuberías de revestimiento de acero de alta resistencia para construcción y operación de pozos profundos. Disponibles en múltiples dimensiones. Especificaciones técnicas completas para cualquier aplicación.",
    features: [
      "Diámetro externo: 4 1/2\" a 13 3/8\"",
      "Espesor de pared: 0.205\" a 0.514\"",
      "Tubería de producción disponible",
      "Cabillas en múltiples tamaños",
      "Certificación de resistencia verificada",
      "Disponible en acero carbón y aleaciones"
    ]
  },
  {
    id: "wellcomm",
    name: "Sensor WellComm",
    image: "/products/sensor-wellcomm.jpg",
    description: "Sistema avanzado de monitoreo inteligente en tiempo real para pozos de petróleo y gas. Transmisión de datos inalámbrica remota. Análisis avanzado de parámetros operacionales críticos.",
    features: [
      "Monitoreo en tiempo real 24/7",
      "Transmisión inalámbrica confiable",
      "Sensores de presión y temperatura",
      "Almacenamiento de datos históricos",
      "Panel de control remoto",
      "Alertas y notificaciones automáticas"
    ]
  },
  {
    id: "hmi",
    name: "HMI DataLogger",
    image: "/products/hmi-datalogger.jpg",
    description: "Interface HMI profesional con registro automático de datos para sistemas de petróleo y gas. Visualización en tiempo real de parámetros operacionales. Almacenamiento seguro de datos históricos con acceso remoto.",
    features: [
      "Interface gráfica intuitiva",
      "Registro automático de datos",
      "Almacenamiento en tiempo real",
      "Acceso remoto seguro",
      "Control de equipos integrado",
      "Reportes automáticos y análisis"
    ]
  },
  {
    id: "variador",
    name: "Variadores de Frecuencia",
    image: "/products/variador.jpg",
    description: "Convertidores de frecuencia de alto rendimiento para control de velocidad en sistemas de bombeo y producción. Optimización de eficiencia energética. Especializados para aplicaciones críticas en petróleo y gas.",
    features: [
      "Control de velocidad variable",
      "Eficiencia energética optimizada",
      "Protección de equipos integrada",
      "Reducción de costos operacionales",
      "Diseño industrial robusto",
      "Compatible con múltiples motores"
    ]
  }
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <SmoothScrollNav />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-blue-900 to-slate-900" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-brand-green/15 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Catálogo Completo
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Soluciones especializadas para la industria de petróleo y gas
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productsData.map((product, index) => (
              <AnimatedSection
                key={product.id}
                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                delay={50 + index * 100}
                triggerOnce={false}
              >
                <div id={product.id} className="group">
                  <TouchOptimizedCard borderColor="border-brand-green">
                    <div className="relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.innerHTML =
                              '<div class="flex items-center justify-center h-full bg-slate-200"><svg class="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></div>'
                          }
                        }}
                      />
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold text-brand-blue-dark mb-4">
                        {product.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Descripción */}
                      <div>
                        <h3 className="text-sm font-semibold text-brand-green mb-2 uppercase tracking-wide">
                          Descripción
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Características técnicas */}
                      <div>
                        <h3 className="text-sm font-semibold text-brand-green mb-3 uppercase tracking-wide">
                          Características Técnicas
                        </h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <span className="text-brand-green font-bold text-lg mt-0.5">✓</span>
                              <span className="text-text-secondary text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-slate-200">
                        <Button className="w-full bg-brand-green text-white hover:bg-brand-green-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 border-0 font-semibold py-3">
                          Solicitar Cotización
                        </Button>
                      </div>
                    </CardContent>
                  </TouchOptimizedCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
