"use client"

import { useState, useEffect } from 'react'
import { Star, Bell, User, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react"

/* service type selection */

export default function HJobComplete() {
    const [activeTab, setActiveTab] = useState("Previous")

    return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Welcome, Linda</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Request a job</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Your Posted Jobs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Posted Jobs</h2>
                <p className="text-gray-500">Start your next project</p>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Job Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Renovation</h3>
                  <p className="text-gray-500 text-sm mb-1">📍 Philadelphia, PA 19104</p>
                  <p className="text-gray-600 text-sm mb-2">Contractor: Sean Jones</p>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm text-gray-600">August 14 at 5:30pm</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-gray-900 mb-4">$5,000</p>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Job History Tabs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex space-x-8 mb-6">
                <button
                  onClick={() => setActiveTab("Previous")}
                  className={`pb-2 font-medium ${
                    activeTab === "Previous"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveTab("Confirmed")}
                  className={`pb-2 font-medium ${
                    activeTab === "Confirmed"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Confirmed
                </button>
              </div>

              {activeTab === "Previous" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Repair</h3>
                      <p className="text-gray-500 text-sm">Completed on July 25</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                        Completed
                      </span>
                      <p className="text-lg font-semibold text-gray-900">$250</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Confirmed" && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Kitchen Renovation</h3>
                    <p className="text-gray-500 text-sm">Scheduled with Sean Jones</p>
                  </div>
                </div>
              )}

              {/* Pagination */}
              <div className="flex items-center justify-between mt-6">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">1/1</span>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
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
                  <p className="text-lg font-semibold text-gray-900">$250</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Last Month</p>
                    <p className="text-sm text-gray-500">Jobs Done: 0</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">$0</p>
                </div>
              </div>

              <button className="w-full mt-6 text-blue-600 text-sm font-medium hover:text-blue-700 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">
                View Statements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}