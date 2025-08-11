"use client"

import { useState, useEffect } from 'react'
import { Star, Bell, User, Plus, Filter, ChevronLeft, ChevronRight } from "lucide-react"

/* service type selection */

export default function HApplicantsExist() {
    const [activeTab, setActiveTab] = useState("Previous")

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
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <User className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Welcome, Linda</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Request a job</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Your Posted Jobs */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Your Posted Jobs</h2>
              <p className="text-gray-500">Start your next project</p>
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600">Filter</span>
            </button>
          </div>

          {/* Job Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kitchen Renovation</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span>📍 Philadelphia, PA 19104</span>
                  <span>🕐 2 hours ago</span>
                </div>
                <p className="text-gray-600 mb-4">Open for applicants</p>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="asap" className="rounded" />
                  <label htmlFor="asap" className="text-sm text-gray-600">
                    ASAP
                  </label>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 mb-4">$5,000</div>
                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                  View Applicants
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          {/* Job History */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex space-x-6 mb-6">
              <button
                onClick={() => setActiveTab("Previous")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "Previous"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => setActiveTab("Confirmed")}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === "Confirmed"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Confirmed
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Repair</h3>
                  <p className="text-sm text-gray-500">Completed on July 25</p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                    Completed
                  </span>
                  <div className="font-semibold text-gray-900">$250</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </button>
                <span className="text-sm text-gray-500">1/1</span>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
            </div>
          </div>

          {/* Statements */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Statements</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">This Month</h4>
                  <p className="text-sm text-gray-500">Jobs Done: 2</p>
                </div>
                <div className="text-lg font-semibold text-gray-900">$250</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Last Month</h4>
                  <p className="text-sm text-gray-500">Jobs Done: 0</p>
                </div>
                <div className="text-lg font-semibold text-gray-900">$0</div>
              </div>
            </div>

            <button className="w-full mt-6 text-blue-600 hover:text-blue-700 text-sm font-medium border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition-colors">
              View Statements
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}