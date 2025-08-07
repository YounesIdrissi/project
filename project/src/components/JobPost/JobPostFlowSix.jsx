import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Upload, X } from 'lucide-react'

/* upload photos and videos */

export default function JobFlowSix() {
    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files)
        const newFiles = files.map(file => ({
        id: Date.now() + Math.random(),
        file,
        url: URL.createObjectURL(file),
        name: file.name
        }))
        setUploadedFiles(prev => [...prev, ...newFiles])
    }

    const removeFile = (fileId) => {
            setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
    }
    return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-black mb-6">Share anything visual</h1>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-7/8 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-medium text-black mb-8">
              Upload photos and videos
            </h2>

            {/* Upload Area */}
            <div className="mb-6">
              <label className="block">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload photos and videos</p>
                  <p className="text-sm text-gray-400">or drag and drop files here</p>
                </div>
              </label>
            </div>

            {/* Example Images / Uploaded Files */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Example Image 1 */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Kitchen renovation example"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Example Image 2 */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bathroom interior example"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.map((file) => (
                <div key={file.id} className="relative rounded-2xl overflow-hidden">
                  <img
                    src={file.url || "/placeholder.svg"}
                    alt={file.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => removeFile(file.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    )
}
