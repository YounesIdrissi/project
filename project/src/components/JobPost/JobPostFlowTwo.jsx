"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

/* description of job */

export default function JobFlowTwo({ onNext, onPrevious, formData, updateFormData }) {
  const [projectDescription, setProjectDescription] = useState(formData.projectDescription || "")

  const handleNext = () => {
    updateFormData({ projectDescription })
    onNext()
  }

  const handleDescriptionChange = (value) => {
    setProjectDescription(value)
    updateFormData({ projectDescription: value })
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
          <h1 className="text-3xl font-semibold text-black mb-6">Describe your project in detail</h1>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-[25%] h-2 bg-blue-600 rounded-full"></div> {/* Adjusted progress */}
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-medium text-black mb-6">Project description</h2>

            {/* Project Description Textarea */}
            <textarea
              placeholder="Provide what needs to be done, any specific requirements, and expectations"
              value={projectDescription}
              onChange={(e) => handleDescriptionChange(e.target.value)}
              rows={8}
              className="w-full p-4 rounded-2xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all resize-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
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