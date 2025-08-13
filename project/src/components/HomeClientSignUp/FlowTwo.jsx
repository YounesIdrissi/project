"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

/* contact info */

export default function HsignUpTwo({ onNext, onBack }) {
    const [phoneNumber, setPhoneNumber] = useState("")

  const handleNextClick = () => {
    if (!phoneNumber) {
      alert("Please enter your phone number")
      return
    }

    // TODO: Add phone number validation
    const formData = { phoneNumber }
    console.log("Client Contact Data:", formData)
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
          <h1 className="text-3xl font-semibold text-black mb-6">Where can we reach you?</h1>
          {/* No progress bar for this 2-page flow */}
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            {/* Phone Number Input */}
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            Complete Sign Up
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    )
}
