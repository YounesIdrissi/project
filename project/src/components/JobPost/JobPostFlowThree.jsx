import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, DollarSign } from 'lucide-react'

/* price */

export default function JobFlowThree() {
    const [price, setPrice] = useState("")

  const handlePriceChange = (e) => {
    const value = e.target.value
    // Only allow numbers and decimal point
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPrice(value)
    }
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
          <h1 className="text-3xl font-semibold text-black mb-6">Set your price</h1>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-1/2 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-medium text-black mb-6">
              What's your price?
            </h2>

            {/* Price Input */}
            <div className="relative mb-4">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                $
              </div>
              <input
                type="text"
                placeholder=""
                value={price}
                onChange={handlePriceChange}
                className="w-full h-12 pl-8 pr-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all text-lg"
              />
            </div>

            {/* Average Price Info */}
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium">Average price: $340 - $410</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    )
}
