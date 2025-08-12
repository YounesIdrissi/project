"use client"

import { useState } from "react"
import { Star, Bell, User, MapPin, Clock, Filter } from "lucide-react"

/* service type selection */

export default function CDefaultDash({ onSettings, onApplyJob }) {
  const [activeTab, setActiveTab] = useState("Applied")

  const handleSettings = () => {
    onSettings()
  }

  const handleApplyJob = (jobId) => {
    // TODO: Submit job application to backend
    console.log("Applied to job:", jobId)
    onApplyJob(jobId)
  }

  const availableJobs = [
    {
      id: 1,
      title: "Kitchen Renovation",
      location: "Philadelphia, PA 19104",
      timeAgo: "2 hours ago",
      price: "$5,000",
      distance: "2.5 miles away",
      description: "Complete kitchen remodel including cabinets, countertops, and appliances",
      urgent: true,
      image: "/placeholder.svg?height=200&width=300",
      applied: true,
    },
    {
      id: 2,
      title: "Residential Plumbing",
      location: "Fishtown, PA 19125",
      timeAgo: "5 hours ago",
      price: "$650",
      distance: "5.2 miles away",
      description: "Repair and addressing leaks in the kitchen sink",
      urgent: false,
      timeframe: "This week",
      image: "/placeholder.svg?height=200&width=300",
      applied: true,
    },
    {
      id: 3,
      title: "Water Damage Restoration",
      location: "Bella Vista, PA 19147",
      timeAgo: "6 hours ago",
      price: "$3,000",
      distance: "2.5 miles away",
      description: "Restore drywall and flooring in living room after water damage from pipe leak",
      urgent: true,
      image: "/placeholder.svg?height=200&width=300",
      applied: false,
    },
  ]

  const appliedJobs = [
    {
      id: 1,
      title: "Kitchen",
      status: "Pending",
      price: "$5,000",
    },
    {
      id: 2,
      title: "Plumbing",
      status: "Pending",
      price: "$650",
    },
  ]

  const confirmedJobs = [
    {
      id: 1,
      title: "Kitchen",
      status: "In Progress",
      price: "$5,000",
      scheduledWith: "Linda Oaks",
      scheduledDate: "August 14 at 5:30pm",
    },
  ]

    return (
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome, Sean</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <button onClick={handleSettings} className="hover:bg-gray-100 p-1 rounded-full transition-colors">
              <User className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-6">
        {/* Left Side - Available Jobs */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Available Jobs</h2>
              <p className="text-gray-500">Find your next project</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          <div className="space-y-6">
            {availableJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.timeAgo}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex items-center gap-4">
                      {job.urgent && (
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-600">ASAP</span>
                        </div>
                      )}
                      {job.timeframe && (
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm text-gray-600">{job.timeframe}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{job.price}</div>
                    <div className="text-sm text-gray-500 mb-4">{job.distance}</div>
                    {job.applied ? (
                      <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg cursor-default">Applied</button>
                    ) : (
                      <button
                        onClick={() => handleApplyJob(job.id)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src={job.image || "/placeholder.svg"} alt={job.title} className="w-full h-48 object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Applied/Confirmed and Statements */}
        <div className="w-80">
          {/* Applied/Confirmed Tabs */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex border-b border-gray-200 mb-4">
              <button
                onClick={() => setActiveTab("Applied")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "Applied" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                }`}
              >
                Applied
              </button>
              <button
                onClick={() => setActiveTab("Confirmed")}
                className={`px-4 py-2 font-medium ${
                  activeTab === "Confirmed" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                }`}
              >
                Confirmed
              </button>
            </div>

            {activeTab === "Applied" && (
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <div key={job.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{job.title}</div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {job.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{job.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Confirmed" && (
              <div className="space-y-4">
                {confirmedJobs.map((job) => (
                  <div key={job.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">{job.title}</div>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {job.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{job.price}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      Scheduled with {job.scheduledWith} on {job.scheduledDate}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-500">
                <span>&lt;</span>
                <span>1/1</span>
                <span>&gt;</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700">View Details</button>
            </div>
          </div>

          {/* Statements */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Statements</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">This Month</div>
                  <div className="text-sm text-gray-500">Completed Jobs: 3</div>
                </div>
                <div className="text-lg font-semibold text-gray-900">$7,700</div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-900">Last Month</div>
                  <div className="text-sm text-gray-500">Completed Jobs: 5</div>
                </div>
                <div className="text-lg font-semibold text-gray-900">$10,390</div>
              </div>
            </div>

            <button className="w-full mt-6 text-blue-600 border border-blue-600 rounded-lg py-2 hover:bg-blue-50">
              View Statements
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}