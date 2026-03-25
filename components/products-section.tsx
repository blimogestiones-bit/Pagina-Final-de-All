"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const products = [
  { id: 1, name: "Tornillería", image: "/products/tornilleria.jpg", description: "Pernos, tuercas y tornillos de alta calidad" },
  { id: 2, name: "Herramientas", image: "/products/herramientas.jpg", description: "Herramientas industriales profesionales" },
  { id: 3, name: "Sensor WellComm", image: "/products/sensor-wellcomm.jpg", description: "Monitoreo IoT avanzado" },
  { id: 4, name: "HMI Datalogger", image: "/products/hmi-datalogger.jpg", description: "Registro y análisis de datos" },
  { id: 5, name: "Revestidores", image: "/products/revestidores.jpg", description: "Sistemas de revestimiento industrial" },
  { id: 6, name: "Taladros", image: "/products/taladros.jpg", description: "Equipos de perforación industrial" },
  { id: 7, name: "Variador", image: "/products/variador.jpg", description: "Control de frecuencia variable", video: true },
  { id: 8, name: "Válvulas", image: "/products/valvulas.jpg", description: "Válvulas industriales de precisión" },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Catálogo de Productos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de productos y soluciones industriales
            </p>
            <a href="/productos" className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Ver Catálogo Completo
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <AnimatedSection key={product.id} animation="fade-up" delay={100 + product.id * 50}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {product.video ? (
                  <div className="relative h-48 w-full bg-black">
                    <video
                      src="/videos/variador-frecuencia.mp4"
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
