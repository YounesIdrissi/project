import { useState, useEffect } from 'react'
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

/* description of job */

export default function JobFlowTwo() {
    return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Title */}
          <h1 className="text-3xl font-medium text-gray-900">
            Describe your project in detail
          </h1>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="space-y-4">
              <label className="block text-lg font-medium text-gray-900">
                Project description
              </label>
              <textarea
                placeholder="Provide what needs to be done, any specific requirements, and expectations"
                className="w-full h-48 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button className="flex items-center gap-2 px-6 py-3 text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button className="flex items-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}