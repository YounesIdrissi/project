import { useState, useEffect } from 'react'

/* job post complete */

export default function JobFlowEight() {
    return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        {/* Main Success Card */}
        <div className="border border-gray-300 rounded-2xl bg-white shadow-sm p-12 text-center">
          {/* Status Badge */}
          {/* <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Pending
            </span>
          </div> */}

          {/* Success Message */}
          <h1 className="text-4xl font-semibold text-black mb-6">
            Job's in, berry sweet!
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12">
            We'll notify you once contractors start applying.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-600 hover:border-gray-400 hover:text-black transition-all font-medium">
              Edit Job
            </button>
            
            <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all font-medium">
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}
