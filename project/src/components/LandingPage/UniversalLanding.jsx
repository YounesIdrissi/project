import { useState, useEffect } from 'react'
import { Star, Leaf, Zap, PipetteIcon as Pipe, Hammer, Paintbrush, Brush, Settings, DollarSign, Users, Clock, ChevronDown, ChevronUp } from 'lucide-react'

/* Landing page for first time visitors */

export default function UniversalLanding() {
    const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Job Berry verify contractors?",
      answer: "Job Berry verifies contractors through a rigorous process including background checks, license verification, and reviewing their past project portfolios and customer reviews to ensure quality and reliability."
    },
    {
      question: "Do homeowners have to pay to use the platform?",
      answer: "No, homeowners do not have to pay to use the platform. Posting a job and receiving bids from contractors is completely free for homeowners."
    },
    {
      question: "What if I'm not happy with the lead/job?",
      answer: "If you're not satisfied, Job Berry's support team is available to mediate and help resolve any issues. Our platform is designed to protect both homeowners and contractors."
    },
    {
      question: "How can I look at contracting reviews?",
      answer: "Contractor reviews and ratings are publicly available on their profiles. You can browse through them before making a hiring decision."
    },
    {
      question: "What types of jobs do contractors offer?",
      answer: "Contractors offer a wide range of services, with jobs spanning from skilled trades like plumbing and electrical work to professional services like project management and design. They can be found in various industries, including construction, IT, and healthcare, often hired for specific projects or tasks. (according to Google)"
    },
  ];
    return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-white pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6 pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Login Button */}
          <div className="absolute top-6 left-6 md:static flex items-center gap-2 mb-8 md:mb-0">
            <div className="relative w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-current" />
              <Leaf className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-500 rotate-45" />
              <Leaf className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-500 -rotate-45" />
            </div>
            <span className="text-2xl font-bold text-blue-600">JOB BERRY</span>
          </div>
          <div className="absolute top-6 right-6 md:static">
            <button className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              Log In
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We provide home service jobs to those who want to do the job
            </h1>
            <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium transition-colors shadow-lg">
              Sign Up
            </button>
          </div>
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="House under construction"
              className="w-full max-w-xl rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Electrical</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Pipe className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Plumbing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Hammer className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Carpentry</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Paintbrush className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Painting</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Brush className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Cleaning</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-10 h-10 text-black" />
              </div>
              <span className="text-lg font-medium">Miscellaneous</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Job Berry Works Better Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-12">Why Job Berry Works Better for Everyone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Only pay for real leads</h3>
              <p className="text-gray-600">
                Homeowners only pay for verified contractors, no wasted fees
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality contractors</h3>
              <p className="text-gray-600">
                Background checks, reviews, and job portfolios help homeowners
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">On your own time</h3>
              <p className="text-gray-600">
                Message and schedule directly through the platform
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative p-8 bg-white rounded-2xl shadow-md border border-gray-200 max-w-sm text-left">
              <p className="text-gray-700 italic mb-4">
                "I was nervous to hire someone online. Job Berry showed me reviews, photos, and gave me peace of mind."
              </p>
              <p className="font-semibold text-black">- Lisa T., Homeowner, NJ</p>
            </div>
            <div className="relative p-8 bg-blue-100 rounded-2xl shadow-md border border-blue-200 max-w-sm text-left">
              <p className="text-gray-700 italic mb-4">
                "I used to spend $300 a month on bad leads. Now I only pay when someone actually books me."
              </p>
              <p className="font-semibold text-black">- Sean R., Carpenter, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page Hero/Banner */}
      <section className="relative bg-blue-600 py-16 md:py-24 text-white overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Construction workers on roof"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-3xl md:text-4xl font-bold leading-tight">
              Job Berry is the only contractor platform that guarantees leads, protects payments, and helps both contractors and homeowners build trust.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <p className="text-2xl md:text-3xl font-semibold">
              No hidden fees, wasted time, or marketing gimmicks.
            </p>
          </div>
        </div>
      </section>

      {/* Let's Get You Connected Section */}
      <section className="bg-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Let's Get You Connected.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold mb-4">For Contractors</h3>
              <p className="text-gray-600">
                Join a network trusted by real clients and stop paying for empty leads
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-12 h-12 text-green-600" />
              </div>
              <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium transition-colors shadow-lg">
                Sign Up
              </button>
            </div>
            <div className="md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold mb-4">For Homeowners</h3>
              <p className="text-gray-600">
                Find a verified contractor you can trust in minutes with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">FAQ (Frequently Asked Questions)</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg bg-white shadow-sm">
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-semibold text-lg text-black hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p className="text-sm">&copy; Team Jay {new Date().getFullYear()}</p>
      </footer>
    </div>
    )
}
