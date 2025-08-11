"use client"

import { useState, useEffect } from 'react'
import { Star, Bell, User, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react"

/* service type selection */

export default function HNoApplicants() {
    const [activeTab, setActiveTab] = useState("Previous")

    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome, Linda</h1>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Request a job</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Posted Jobs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Posted Jobs</h2>
                <p className="text-gray-600">Start your next project</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Filter</span>
              </button>
            </div>

            {/* Job Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Renovation</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <span>📍 Philadelphia, PA 19104</span>
                    <span>🕐 2 hours ago</span>
                  </div>
                  <p className="text-gray-700 mb-4">Open for applicants</p>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="asap" className="rounded" />
                    <label htmlFor="asap" className="text-sm text-gray-600">
                      ASAP
                    </label>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 mb-4">$5,000</div>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    View Applicants
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Job History */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              {/* Tabs */}
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab("Previous")}
                  className={`pb-2 border-b-2 font-medium ${
                    activeTab === "Previous"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveTab("Confirmed")}
                  className={`pb-2 border-b-2 font-medium ${
                    activeTab === "Confirmed"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Confirmed
                </button>
              </div>

              {/* Job Entry */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Repair</h3>
                  <p className="text-sm text-gray-600">Completed on July 25</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                    Completed
                  </span>
                  <div className="font-semibold text-gray-900">$250</div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="text-sm text-gray-600">1/1</span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-700">View Details</button>
              </div>
            </div>

            {/* Statements */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Statements</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">This Month</div>
                    <div className="text-sm text-gray-600">Jobs Done: 1</div>
                  </div>
                  <div className="font-semibold text-gray-900">$250</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Last Month</div>
                    <div className="text-sm text-gray-600">Jobs Done: 0</div>
                  </div>
                  <div className="font-semibold text-gray-900">$0</div>
                </div>
              </div>

              <button className="w-full text-blue-600 border border-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                View Statements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}