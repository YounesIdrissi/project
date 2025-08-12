"use client"

import { useState } from "react"
import { Star, Bell, User, Plus, ChevronLeft, ChevronRight, Filter } from "lucide-react"

/* service type selection */

export default function HDefault({ onRequestJob, onViewApplicants, onSettings, postedJobs = [] }) {
  const [activeTab, setActiveTab] = useState("Previous")
  const [hasNotifications, setHasNotifications] = useState(false)
  const [jobsInProgress, setJobsInProgress] = useState([])

  const getJobStatus = (job) => {
    if (job.contractor && job.scheduledDate) {
      return { status: "In Progress", color: "bg-green-500 text-white" }
    }
    if (job.status === "Open for applicants") {
      return { status: "Open for applicants", color: "bg-blue-100 text-blue-600" }
    }
    return { status: job.status || "Open for applicants", color: "bg-green-100 text-green-800" }
  }

  const calculateStatements = () => {
    const completedJobs = postedJobs.filter((job) => job.status === "Completed")
    const inProgressJobs = postedJobs.filter((job) => job.contractor && job.scheduledDate)

    const thisMonthTotal = completedJobs.reduce((sum, job) => sum + (job.price || 0), 0)
    const jobsCount = completedJobs.length + inProgressJobs.length

    return {
      thisMonth: thisMonthTotal,
      jobsCount: jobsCount,
      lastMonth: 0,
      lastMonthJobs: 0,
    }
  }

  const statements = calculateStatements()

  const handleRequestJob = () => {
    onRequestJob()
  }

  const handleViewApplicants = () => {
    onViewApplicants()
  }

  const handleSettings = () => {
    onSettings()
  }

  const shouldShowNotification = postedJobs.some(
    (job) => job.contractor || job.status === "In Progress" || job.applicants > 0,
  )

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
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              {shouldShowNotification && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
              )}
            </div>
            <button
              onClick={handleSettings}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Welcome, Linda</h1>
            <button
              onClick={handleRequestJob}
              className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Post a job
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Your Posted Jobs */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Your Posted Jobs</h2>
                  <p className="text-gray-600">Start your next project</p>
                </div>
                {postedJobs.length > 0 && (
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                )}
              </div>

              {postedJobs.length === 0 ? (
                <div className="h-64 flex items-center justify-center text-gray-400">
                  <p>No jobs posted yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {postedJobs.map((job) => {
                    const jobStatus = getJobStatus(job)
                    return (
                      <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <span>📍 {job.location}</span>
                              <span>🕐 {job.timeAgo || "2 hours ago"}</span>
                            </div>
                            {job.contractor && (
                              <p className="text-sm text-gray-600 mb-2">Contractor: {job.contractor}</p>
                            )}
                            <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="rounded" defaultChecked={job.asap} />
                              <span className="text-sm text-gray-600">{job.scheduledDate || "ASAP"}</span>
                            </div>
                          </div>
                          <div className="text-right ml-4">
                            <span className="text-lg font-semibold text-blue-600">${job.price}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${jobStatus.color}`}>
                            {jobStatus.status}
                          </span>
                          {job.status !== "Completed" && (
                            <button
                              onClick={handleViewApplicants}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                            >
                              View Applicants
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Right Column - Job History and Statements */}
            <div className="space-y-6">
              {/* Job History */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    onClick={() => setActiveTab("Previous")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "Previous"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveTab("Confirmed")}
                    className={`px-4 py-2 font-medium ${
                      activeTab === "Confirmed"
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Confirmed
                  </button>
                </div>

                {activeTab === "Previous" && (
                  <div className="space-y-4">
                    {/* Show completed jobs */}
                    {postedJobs.filter((job) => job.status === "Completed").length > 0 ? (
                      postedJobs
                        .filter((job) => job.status === "Completed")
                        .map((job) => (
                          <div key={`completed-${job.id}`} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div>
                                <h3 className="font-medium text-gray-900">{job.title}</h3>
                                <p className="text-sm text-gray-600">Completed on {job.completedDate || "July 25"}</p>
                              </div>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                Completed
                              </span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">${job.price}</span>
                          </div>
                        ))
                    ) : (
                      <div className="flex items-center justify-between">
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
                    )}
                  </div>
                )}

                {activeTab === "Confirmed" && (
                  <div className="space-y-4">
                    {/* Show in-progress jobs */}
                    {postedJobs.filter((job) => job.contractor && job.scheduledDate).length > 0 ? (
                      postedJobs
                        .filter((job) => job.contractor && job.scheduledDate)
                        .map((job) => (
                          <div key={`confirmed-${job.id}`} className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{job.title}</h3>
                              <p className="text-sm text-gray-600">Scheduled with {job.contractor}</p>
                              <p className="text-sm text-gray-600">on {job.scheduledDate}</p>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">${job.price}</span>
                          </div>
                        ))
                    ) : (
                      <div className="text-gray-400 text-center py-8">
                        <p>No confirmed jobs yet</p>
                      </div>
                    )}
                  </div>
                )}

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
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">This Month</p>
                      <p className="text-sm text-gray-600">Jobs Done: {statements.jobsCount}</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">${statements.thisMonth}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Last Month</p>
                      <p className="text-sm text-gray-600">Jobs Done: {statements.lastMonthJobs}</p>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">${statements.lastMonth}</span>
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