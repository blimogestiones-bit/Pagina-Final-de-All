'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Send form data to backend
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.')
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Selecciona un servicio</option>
          <option value="energia">Energía, tecnología y seguridad</option>
          <option value="procura">Servicios de Procura</option>
          <option value="financiera">Gestión Financiera Internacional</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje *
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full"
        />
      </div>

      <Button type="submit" className="w-full">
        Enviar Mensaje
      </Button>
    </form>
  )
}
