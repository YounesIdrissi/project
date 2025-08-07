import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Home, Building, Building2 } from 'lucide-react'


/* property type selection */

export default function JobFlowFive() {

    const [selectedPropertyType, setSelectedPropertyType] = useState("")
    const [otherPropertyType, setOtherPropertyType] = useState("")

    const propertyTypes = [
        { id: "house", label: "House", icon: Home },
        { id: "apartment", label: "Apartment", icon: Building },
        { id: "condo", label: "Condo", icon: Building2 },
        { id: "townhome", label: "Townhome", icon: Building },
    ]

    const selectPropertyType = (propertyId) => {
        setSelectedPropertyType(propertyId)
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
          <h1 className="text-3xl font-semibold text-black mb-6">Tell us more</h1>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-3/4 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-medium text-black mb-8">
              Tell us about your space
            </h2>

            {/* Property Type Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {propertyTypes.map((property) => {
                const Icon = property.icon
                const isSelected = selectedPropertyType === property.id
                
                return (
                  <button
                    key={property.id}
                    onClick={() => selectPropertyType(property.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <Icon className={`w-8 h-8 mb-3 ${
                      isSelected ? "text-blue-600" : "text-black"
                    }`} />
                    <span className={`text-sm font-medium ${
                      isSelected ? "text-blue-600" : "text-black"
                    }`}>
                      {property.label}
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
                value={otherPropertyType}
                onChange={(e) => setOtherPropertyType(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
              />
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
