import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Upload } from 'lucide-react'

/* upload images of contractor work (portfolio) */

export default function CsignUpFour() {
    const [uploadedFiles, setUploadedFiles] = useState([])

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(), // Unique ID for key
      file,
      name: file.name
    }))
    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const handleNextClick = () => {
    console.log("Uploaded Files:", uploadedFiles.map(f => f.name));
    alert("Next button clicked! Uploaded files logged to console.");
    // In a real application, you would handle file upload to a backend here.
  }

  const handlePreviousClick = () => {
    alert("Previous button clicked!");
    // In a real application, you would handle navigation back here.
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
          <h1 className="text-3xl font-semibold text-black mb-6">Share your work</h1>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-[100%] h-2 bg-blue-600 rounded-full"></div> {/* Progress for step 4 */}
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="border border-gray-300 rounded-2xl mb-8 bg-white shadow-sm">
          <div className="p-8">
            <h2 className="text-lg font-medium text-black mb-8">
              Upload photos and videos
            </h2>

            {/* Upload Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer h-64 flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Upload files</p>
                </div>
              </label>
              <label className="block">
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer h-64 flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Upload files</p>
                </div>
              </label>
            </div>

            {/* Display uploaded file names (optional, for demonstration) */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6">
                <h3 className="text-md font-medium text-black mb-2">Uploaded:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {uploadedFiles.map(file => (
                    <li key={file.id}>{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePreviousClick}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          <button 
            onClick={handleNextClick}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all"
          >
            Submit
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    )
}
