"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

/* business information */

export default function CsignUpTwo({ onNext, onBack }) {
    const [businessName, setBusinessName] = useState("")
  const [yearsExperience, setYearsExperience] = useState("")
  const [cityState, setCityState] = useState("")

  const handleNextClick = () => {
    if (!businessName || !yearsExperience || !cityState) {
      alert("Please fill in all fields")
      return
    }

    // TODO: Add form validation
    const formData = { businessName, yearsExperience, cityState }
    console.log("Business Info Data:", formData)
    onNext(formData)
  }

  const handlePreviousClick = () => {
    onBack()
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
          <h1 className="text-3xl font-semibold text-black mb-6">Tell us about your business</h1>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-[50%] h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            {/* Business Name and Years of Experience */}
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <input
                type="text"
                placeholder="Business name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="flex-1 h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
              />
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="#"
                  value={yearsExperience}
                  onChange={(e) => setYearsExperience(e.target.value)}
                  className="w-20 h-12 px-4 rounded-full border border-gray-300 text-center focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
                />
                <span className="text-black text-lg">years of experience</span>
              </div>
            </div>

            {/* Location Input */}
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Where are you located?</h3>
              <input
                type="text"
                placeholder="City, state"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePreviousClick}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={handleNextClick}
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
