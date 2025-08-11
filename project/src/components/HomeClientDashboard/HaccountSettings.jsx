import { useState, useEffect } from 'react'
import { ArrowLeft, Star, User } from "lucide-react"

/* service type selection */

export default function HaccountSettings() {
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

      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Profile Settings</h1>

      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-4xl">
          {/* Go Back Link */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Go back</span>
          </button>

          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-600">Member since</p>
              <p className="text-gray-600">August 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Name */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Name</span>
                <span className="text-gray-900">Linda Oak</span>
              </div>

              {/* Email */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Email</span>
                <span className="text-gray-900">loak@gmail.com</span>
              </div>

              {/* Password */}
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Password</span>
                <span className="text-gray-900">**********</span>
              </div>

              {/* Phone Number */}
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700 font-medium">Phone number</span>
                <span className="text-gray-900">215-456-7890</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Payment Methods */}
              <div className="py-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Payment Methods</span>
                  <span className="text-gray-900">VISA 1234</span>
                </div>
                <div className="flex justify-end">
                  <button className="text-blue-600 hover:text-blue-700 text-sm transition-colors">Edit cards</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-2 border border-red-300 text-red-600 rounded-full hover:bg-red-50 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}