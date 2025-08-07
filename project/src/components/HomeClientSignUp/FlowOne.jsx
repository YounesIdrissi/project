import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

/* Home (owner) client name email password */

export default function HsignUpOne() {
    const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleNextClick = () => {
    console.log("Client Sign-up Data:", { firstName, lastName, email, password });
    alert("Next button clicked! Client data logged to console.");
    // In a real application, you would handle form submission/navigation here.
  }

  const handlePreviousClick = () => {
    alert("Previous button clicked!");
    // In a real application, you would handle navigation back here.
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
          <h1 className="text-3xl font-semibold text-black mb-6">Getting Started</h1>
          {/* No progress bar for this 2-page flow */}
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            {/* Name Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            disabled={true}
          > {/* Disabled on the first step */}
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