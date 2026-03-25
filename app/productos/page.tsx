'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SmoothScrollNav } from '@/components/smooth-scroll-nav'

const allProducts = [
  { id: 1, name: 'Tornillería Industrial', image: '/products/tornilleria.jpg', description: 'Pernos, tuercas y tornillos de acero inoxidable y alta resistencia. Disponibles en diversos tamaños y especificaciones para aplicaciones industriales críticas.' },
  { id: 2, name: 'Herramientas Profesionales', image: '/products/herramientas.jpg', description: 'Suite completa de herramientas industriales profesionales diseñadas para máximo rendimiento y durabilidad en entornos exigentes.' },
  { id: 3, name: 'Sensor WellComm IoT', image: '/products/sensor-wellcomm.jpg', description: 'Sistema avanzado de monitoreo IoT para aplicaciones petroleras y energéticas con conectividad inalámbrica de largo alcance.' },
  { id: 4, name: 'HMI Datalogger', image: '/products/hmi-datalogger.jpg', description: 'Interfaz humano-máquina con capacidad de registro y análisis de datos en tiempo real para sistemas SCADA.' },
  { id: 5, name: 'Sistemas de Revestimiento', image: '/products/revestidores.jpg', description: 'Equipos especializados para revestimiento industrial de tuberías y estructuras metálicas con máxima precisión.' },
  { id: 6, name: 'Taladros Industriales', image: '/products/taladros.jpg', description: 'Taladros de precisión para perforación industrial con control automático de profundidad y velocidad variable.' },
  { id: 7, name: 'Variador de Frecuencia', image: '/products/variador.jpg', description: 'Sistemas de control de velocidad variable para motores con eficiencia energética optimizada y protección avanzada.' },
  { id: 8, name: 'Válvulas Industriales', image: '/products/valvulas.jpg', description: 'Válvulas de precisión para sistemas de presión industrial: de bola, compuerta, retención y control de flujo.' },
]

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SmoothScrollNav />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Catálogo Completo de Productos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de soluciones industriales de alta calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 hover:text-blue-700 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
