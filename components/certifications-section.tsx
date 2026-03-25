"use client"

import { AnimatedSection } from "@/components/animated-section"

const certifications = [
  { id: 1, name: "ISO 9001", description: "Gestión de Calidad", icon: "✓" },
  { id: 2, name: "ISO 14001", description: "Responsabilidad Ambiental", icon: "♻" },
  { id: 3, name: "OHSAS 18001", description: "Seguridad y Salud", icon: "🛡" },
  { id: 4, name: "ISO 27001", description: "Seguridad de Información", icon: "🔒" },
]

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificaciones y Estándares</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Cumplimos con los más altos estándares internacionales de calidad, seguridad y sostenibilidad
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <AnimatedSection key={cert.id} animation="fade-up" delay={100 + cert.id * 50}>
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-xl mb-2">{cert.name}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
