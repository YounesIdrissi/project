import { useState, useEffect } from 'react'
import { Star, Bell, User, Plus, ChevronLeft, ChevronRight } from "lucide-react"

/* service type selection */

export default function HDefault() {
    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Welcome, Linda</h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5" />
              Request a job
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Your Posted Jobs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Posted Jobs</h2>
              <p className="text-gray-600 mb-6">Start your next project</p>

              {/* Empty state or job list would go here */}
              <div className="h-64 flex items-center justify-center text-gray-400">
                <p>No jobs posted yet</p>
              </div>
            </div>

            {/* Right Column - Job History and Statements */}
            <div className="space-y-6">
              {/* Job History */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">Previous</button>
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Confirmed</button>
                </div>

                {/* Job Entry */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-medium text-gray-900">Repair</h3>
                      <p className="text-sm text-gray-600">Completed on July 25</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Completed
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">$250</span>
                </div>

                {/* Pagination and View Details */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-400">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-600">1/1</span>
                    <button className="p-1 text-gray-400">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
                </div>
              </div>

              {/* Statements */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Statements</h3>

                <div className="space-y-4">
                  {/* This Month */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">This Month</p>
                      <p className="text-sm text-gray-600">Jobs Done: 1</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">$250</span>
                  </div>

                  {/* Last Month */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Last Month</p>
                      <p className="text-sm text-gray-600">Jobs Done: 0</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">$0</span>
                  </div>
                </div>

                <button className="w-full mt-6 text-blue-600 hover:text-blue-700 font-medium border border-blue-600 hover:border-blue-700 rounded-lg py-2 transition-colors">
                  View Statements
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}