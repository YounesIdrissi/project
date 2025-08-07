import { useState, useEffect } from 'react'
import { Star, User, HardHat } from 'lucide-react'

/* identify user type */

export default function Identify() {
    const handleClientClick = () => {
    alert("Client account type selected! Navigating to client sign-up.");
    // In a real application, you would navigate to the client sign-up flow here.
  }

  const handleContractorClick = () => {
    alert("Contractor account type selected! Navigating to contractor onboarding.");
    // In a real application, you would navigate to the contractor onboarding flow here.
  }
    return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-black mb-4">Let's Get You Started</h1>
          <p className="text-lg text-gray-600">Choose your account type to continue</p>
        </div>

        {/* Account Type Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client Card */}
          <button
            onClick={handleClientClick}
            className="flex flex-col items-center p-8 rounded-2xl border border-gray-300 bg-white shadow-sm hover:border-blue-600 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-black mb-2">I need work done</h2>
            <p className="text-gray-600 text-center">
              Post projects, hire contractors, and get your home improvements done right.
            </p>
          </button>

          {/* Contractor Card */}
          <button
            onClick={handleContractorClick}
            className="flex flex-col items-center p-8 rounded-2xl border border-gray-300 bg-white shadow-sm hover:border-blue-600 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <HardHat className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-black mb-2">I'm a contractor</h2>
            <p className="text-gray-600 text-center">
              Find quality leads, grow your business, and get paid for great work.
            </p>
          </button>
        </div>
      </div>
    </div>
    )
}
