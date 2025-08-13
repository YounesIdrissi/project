"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Wrench, Paintbrush, Zap, PipetteIcon as Pipe } from "lucide-react"

/* service type selection */

export default function JobFlowOne({ onNext, onPrevious, formData, updateFormData }) {
    const [selectedServices, setSelectedServices] = useState(formData.selectedServices || [])
  const [otherService, setOtherService] = useState(formData.otherService || "")

  const services = [
    { id: "repair", label: "Repair", icon: Wrench },
    { id: "painting", label: "Painting", icon: Paintbrush },
    { id: "electrical", label: "Electrical", icon: Zap },
    { id: "plumbing", label: "Plumbing", icon: Pipe },
  ]

  const toggleService = (serviceId) => {
    const newServices = selectedServices.includes(serviceId)
      ? selectedServices.filter((id) => id !== serviceId)
      : [...selectedServices, serviceId]
    setSelectedServices(newServices)
    updateFormData({ selectedServices: newServices })
  }

  const handleOtherChange = (value) => {
    setOtherService(value)
    updateFormData({ otherService: value })
  }

  const handleNext = () => {
    updateFormData({ selectedServices, otherService })
    onNext()
  }

    return (
        <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-black mb-6">Post Your Job</h1>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-[12.5%] h-2 bg-blue-600 rounded-full"></div> {/* Adjusted progress */}
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-xl font-medium text-black mb-8">What services are you interested in?</h2>

            {/* Service Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {services.map((service) => {
                const Icon = service.icon
                const isSelected = selectedServices.includes(service.id)

                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      isSelected ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${isSelected ? "text-blue-600" : "text-black"}`} />
                    <span className={`text-sm font-medium ${isSelected ? "text-blue-600" : "text-black"}`}>
                      {service.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Other Section */}
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Other</h3>
              <input
                type="text"
                placeholder=""
                value={otherService}
                onChange={(e) => handleOtherChange(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
            disabled={true} // Disabled on first step
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}