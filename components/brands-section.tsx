"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const brands = [
  { id: 1, name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Siemens_logo_sans_text.svg/200px-Siemens_logo_sans_text.svg.png" },
  { id: 2, name: "Danfoss", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Danfoss_logo.svg/200px-Danfoss_logo.svg.png" },
  { id: 3, name: "ABB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/ABB_Logo.svg/200px-ABB_Logo.svg.png" },
  { id: 4, name: "Schneider Electric", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Schneider_Electric_logo.svg/200px-Schneider_Electric_logo.svg.png" },
]

export function BrandsSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up" delay={50}>
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-10">Nuestros Aliados Estratégicos</h3>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <AnimatedSection key={brand.id} animation="scale-up" delay={100 + brand.id * 50}>
              <div className="relative h-16 w-40">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
