"use client"

import { useState, useEffect } from 'react'
import { ArrowLeft, User, Star } from "lucide-react"

/* service type selection */

export default function CaccountSettings() {
    const [formData, setFormData] = useState({
    name: "Sean Jones",
    email: "seanj@gmail.com",
    password: "**********",
    phoneNumber: "267-456-7890",
    businessName: "Sean's Carpentry",
    location: "Philadelphia, PA",
    paymentMethod: "VISA 1234",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGoBack = () => {
    alert("Going back to dashboard")
  }

  const handleEditCards = () => {
    alert("Edit payment cards")
  }

  const handleSignOut = () => {
    alert("Signing out")
  }

    return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">Business Profile Settings</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Go Back Link */}
          <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go back
          </button>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-600">Member since</p>
              <p className="text-gray-600">August 2025</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-900 font-medium">Name</span>
                <span className="text-gray-700">{formData.name}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-900 font-medium">Business Name</span>
                <span className="text-gray-700">{formData.businessName}</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-900 font-medium">Email</span>
                <span className="text-gray-700">{formData.email}</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-900 font-medium">Located</span>
                <span className="text-gray-700">{formData.location}</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-900 font-medium">Password</span>
                <span className="text-gray-700">{formData.password}</span>
              </div>
              <div className="py-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900 font-medium">Payment Methods</span>
                  <span className="text-gray-700">{formData.paymentMethod}</span>
                </div>
                <button onClick={handleEditCards} className="text-gray-400 hover:text-gray-600 text-sm">
                  Edit cards
                </button>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-900 font-medium">Phone number</span>
                <span className="text-gray-700">{formData.phoneNumber}</span>
              </div>
              <div className="flex justify-end py-4">
                <button
                  onClick={handleSignOut}
                  className="px-6 py-2 border border-red-300 text-red-600 rounded-full hover:bg-red-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
