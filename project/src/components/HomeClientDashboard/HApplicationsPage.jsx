"use client"

import { Star, Bell, User, ArrowLeft } from "lucide-react"

/* service type selection */

export default function HApplicationsPage({ onBack, onAcceptContractor }) {
    const applicants = [
    {
      id: 1,
      name: "Sean Jones",
      rating: 4.8,
      reviews: 25,
      specialties: ["Carpentry", "Remodeling", "Plumbing"],
      company: "Sean Home Improvement",
      experience: 11,
    },
    {
      id: 2,
      name: "Jacob Pierce",
      rating: 4.4,
      reviews: 38,
      specialties: ["Tile", "Remodeling", "Lighting"],
      company: "Home Co.",
      experience: 8,
    },
    {
      id: 3,
      name: "Sarah Martinez",
      rating: 4.7,
      reviews: 15,
      specialties: ["Remodeling", "Flooring", "Electrical"],
      company: "Martinez Manifesto",
      experience: 5,
    },
    {
      id: 4,
      name: "Mark Roberts",
      rating: 4.3,
      reviews: 12,
      specialties: ["Repair", "Cleaning", "Remodeling"],
      company: "Robert Repairs",
      experience: 12,
    },
  ]

  const handleAccept = (applicant) => {
    // TODO: Update job status in backend and notify contractor
    console.log(`Accepted ${applicant.name} for the Kitchen Renovation job`)
    onAcceptContractor(applicant.id)
  }

  const handleGoBack = () => {
    onBack()
  }

    return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <Star className="w-6 h-6 text-white fill-white" />
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-gray-700" />
          <User className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={handleGoBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </button>

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Applicants for Kitchen Renovation</h1>

      {/* Applicants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Profile Section */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{applicant.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {applicant.rating} ({applicant.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <p className="text-gray-600 mb-2">{applicant.specialties.join(" • ")}</p>

            {/* Company */}
            <p className="text-gray-900 font-medium mb-2">{applicant.company}</p>

            {/* Experience and Accept Button */}
            <div className="flex items-center justify-between">
              <span className="text-gray-600">{applicant.experience} years experience</span>
              <button
                onClick={() => handleAccept(applicant)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}