import { useState, useEffect } from 'react'
import { Star, Bell, User, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react"

/* service type selection */

export default function HJobConfirmed() {
    return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Welcome, Linda</h1>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Request a job</span>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Posted Jobs</h2>
                <p className="text-gray-500">Start your next project</p>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Job Card - In Progress */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Renovation</h3>
                  <p className="text-gray-500 text-sm mb-2">📍 Philadelphia, PA 19104</p>
                  <p className="text-gray-700 text-sm mb-2">Contractor: Sean Jones</p>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">August 14 at 5:30pm</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-gray-900 mb-4">$5,000</p>
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Job History Tabs */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex space-x-8 mb-6">
              <button className="text-gray-500 pb-2">Previous</button>
              <button className="text-blue-600 pb-2 border-b-2 border-blue-600 font-medium">Confirmed</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Kitchen Renovation</h3>
                  <p className="text-sm text-gray-500">Scheduled with Sean Jones</p>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">1/1</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <button className="text-blue-600 text-sm border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Statements */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Statements</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">This Month</p>
                  <p className="text-sm text-gray-500">Jobs Done: 2</p>
                </div>
                <p className="text-lg font-semibold text-gray-900">$5,250</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Last Month</p>
                  <p className="text-sm text-gray-500">Jobs Done: 0</p>
                </div>
                <p className="text-lg font-semibold text-gray-900">$0</p>
              </div>
            </div>

            <button className="w-full mt-6 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              View Statements
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}