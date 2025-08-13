"use client"

import { useState } from 'react'

import UniversalLanding from './components/LandingPage/UniversalLanding';

import UniversalLogin from './components/Login/UniversalLogin';

import IdentifyUser from './components/IdentifyUserType/IdentifyUser';

import HsignUpOne from './components/HomeClientSignUp/FlowOne';
import HsignUpTwo from './components/HomeClientSignUp/FlowTwo';

import CsignUpOne from './components/ContractorSignUp/FlowOne';
import CsignUpTwo from './components/ContractorSignUp/FlowTwo';
import CsignUpThree from './components/ContractorSignUp/FlowThree';
import CsignUpFour from './components/ContractorSignUp/FlowFour';

import HDefaultDash from './components/HomeClientDashboard/HDefaultDash';
import HApplicationsPage from './components/HomeClientDashboard/HApplicationsPage';
import HaccountSettings from './components/HomeClientDashboard/HaccountSettings';

import CDefaultDash from './components/ContractorDashboard/CDefaultDash';
import CaccountSettings from './components/ContractorDashboard/CaccountSettings';

import JobFlowOne from './components/JobPost/JobPostFlowOne';
import JobFlowTwo from './components/JobPost/JobPostFlowTwo';
import JobFlowThree from './components/JobPost/JobPostFlowThree';
import JobFlowFour from './components/JobPost/JobPostFlowFour';
import JobFlowFive from './components/JobPost/JobPostFlowFive';
import JobFlowSix from './components/JobPost/JobPostFlowSix';
import JobFlowSeven from './components/JobPost/JobPostFlowSeven';
import JobFlowEight from './components/JobPost/JobPostFlowEight';

/* {condition ? <div>True</div> : <div>False</div>} */

export default function App() {
  const [currentView, setCurrentView] = useState("landing")
  const [userType, setUserType] = useState(null) // 'client' or 'contractor'
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})
  const [jobPostingStep, setJobPostingStep] = useState(0)
  const [jobPostingData, setJobPostingData] = useState({})
  const [postedJobs, setPostedJobs] = useState([])

  const navigateTo = (view, type = null) => {
    setCurrentView(view)
    if (type) setUserType(type)
  }

  const handleLogin = (credentials) => {
    // TODO: Integrate with backend authentication
    console.log("Login attempt:", credentials)
    setIsLoggedIn(true)
    // For demo, redirect to account type selection
    setCurrentView("account-type")
  }

  const handleSignUp = (data, type) => {
    // TODO: Integrate with backend user creation
    console.log("Sign up data:", data, "Type:", type)
    setUserData(data)
    setIsLoggedIn(true)
    // Navigate to appropriate dashboard
    if (type === "client") {
      setCurrentView("client-dashboard")
    } else {
      setCurrentView("contractor-dashboard")
    }
  }

  const handleOnboardingNext = (data) => {
    setUserData((prev) => ({ ...prev, ...data }))
    setOnboardingStep((prev) => prev + 1)
  }

  const handleOnboardingComplete = (data) => {
    setUserData((prev) => ({ ...prev, ...data }))
    // TODO: Save complete user profile to backend
    console.log("Complete user data:", { ...userData, ...data })
    if (userType === "client") {
      setCurrentView("client-dashboard")
    } else {
      setCurrentView("contractor-dashboard")
    }
    setOnboardingStep(0)
  }

  const handleJobPostingNext = (data) => {
    setJobPostingData((prev) => ({ ...prev, ...data }))
    setJobPostingStep((prev) => prev + 1)
  }

  const handleJobPostingPrevious = () => {
    setJobPostingStep((prev) => Math.max(0, prev - 1))
  }

  const handleJobPostingComplete = (data) => {
    const completeJobData = { ...jobPostingData, ...data }
    // TODO: Submit job to backend
    console.log("Complete job posting data:", completeJobData)

    // Create a new job entry for the dashboard
    const newJob = {
      id: Date.now(),
      title: completeJobData.selectedServices?.join(", ") || "New Job",
      description: completeJobData.projectDescription || "No description",
      price: completeJobData.price || "0",
      location: completeJobData.location || "Location not specified",
      propertyType: completeJobData.selectedPropertyType || "Not specified",
      preferredDateTime: completeJobData.preferredDateTime || "Flexible",
      status: "Open for applicants",
      postedDate: new Date().toLocaleDateString(),
    }

    setPostedJobs((prev) => [...prev, newJob])
    setCurrentView("job-success")
  }

  const handleEditJob = () => {
    // Reset job posting to first step to allow editing
    setJobPostingStep(0)
    setCurrentView("job-posting")
  }

  const handleReturnHome = () => {
    // Clear job posting data and return to dashboard
    setJobPostingData({})
    setJobPostingStep(0)
    setCurrentView("client-dashboard")
  }

  const updateJobPostingData = (data) => {
    setJobPostingData((prev) => ({ ...prev, ...data }))
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case "landing":
        return <UniversalLanding onLogin={() => navigateTo("login")} onSignUp={() => navigateTo("account-type")} />

      case "login":
        return (
          <UniversalLogin
            onLogin={handleLogin}
            onSignUp={() => navigateTo("account-type")}
            onBack={() => navigateTo("landing")}
          />
        )

      case "account-type":
        return (
          <IdentifyUser
            onSelectClient={() => {
              setUserType("client")
              navigateTo("client-signup")
            }}
            onSelectContractor={() => {
              setUserType("contractor")
              navigateTo("contractor-onboarding")
            }}
            onLogin={() => navigateTo("login")}
          />
        )

      case "client-signup":
        if (onboardingStep === 0) {
          return (
            <HsignUpOne
              onNext={(data) => {
                setUserData(data)
                setOnboardingStep(1)
              }}
              onBack={() => navigateTo("account-type")}
            />
          )
        } else {
          return (
            <HsignUpTwo
              onNext={(data) => handleSignUp({ ...userData, ...data }, "client")}
              onBack={() => setOnboardingStep(0)}
            />
          )
        }

      case "contractor-onboarding":
        switch (onboardingStep) {
          case 0:
            return (
              <CsignUpOne
                onNext={(data) => {
                  setUserData(data)
                  setOnboardingStep(1)
                }}
                onBack={() => navigateTo("account-type")}
              />
            )
          case 1:
            return (
              <CsignUpTwo
                onNext={(data) => {
                  setUserData((prev) => ({ ...prev, ...data }))
                  setOnboardingStep(2)
                }}
                onBack={() => setOnboardingStep(0)}
              />
            )
          case 2:
            return (
              <CsignUpThree
                onNext={(data) => {
                  setUserData((prev) => ({ ...prev, ...data }))
                  setOnboardingStep(3)
                }}
                onBack={() => setOnboardingStep(1)}
              />
            )
          case 3:
            return <CsignUpFour onNext={handleOnboardingComplete} onBack={() => setOnboardingStep(2)} />
          default:
            return <CsignUpOne onNext={handleOnboardingNext} onBack={() => navigateTo("account-type")} />
        }

      case "job-posting":
        switch (jobPostingStep) {
          case 0:
            return (
              <JobFlowOne
                onNext={handleJobPostingNext}
                onPrevious={() => navigateTo("client-dashboard")}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 1:
            return (
              <JobFlowTwo
                onNext={handleJobPostingNext}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 2:
            return (
              <JobFlowThree
                onNext={handleJobPostingNext}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 3:
            return (
              <JobFlowFour
                onNext={handleJobPostingNext}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 4:
            return (
              <JobFlowFive
                onNext={handleJobPostingNext}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 5:
            return (
              <JobFlowSix
                onNext={handleJobPostingNext}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          case 6:
            return (
              <JobFlowSeven
                onNext={handleJobPostingComplete}
                onPrevious={handleJobPostingPrevious}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
          default:
            return (
              <JobFlowOne
                onNext={handleJobPostingNext}
                onPrevious={() => navigateTo("client-dashboard")}
                formData={jobPostingData}
                updateFormData={updateJobPostingData}
              />
            )
        }

      case "job-success":
        return <JobFlowEight onEditJob={handleEditJob} onReturnHome={handleReturnHome} formData={jobPostingData} />

      case "client-dashboard":
        return (
          <HDefaultDash
            onRequestJob={() => navigateTo("job-posting")} // Navigate to job posting flow
            onViewApplicants={() => navigateTo("job-applicants")} // Navigate to job applicants page
            onSettings={() => navigateTo("client-settings")}
            postedJobs={postedJobs} // Pass posted jobs to dashboard
          />
        )

      case "client-settings":
        return (
          <HaccountSettings
            onBack={() => navigateTo("client-dashboard")}
            onSignOut={() => {
              setIsLoggedIn(false)
              setUserData({})
              setUserType(null)
              navigateTo("landing")
            }}
          />
        )

      case "contractor-dashboard":
        return (
          <CDefaultDash
            onSettings={() => navigateTo("contractor-settings")}
            onApplyJob={(jobId) => {
              // TODO: Submit job application to backend
              console.log("Applied to job:", jobId)
            }}
          />
        )

      case "contractor-settings":
        return (
          <CaccountSettings
            onBack={() => navigateTo("contractor-dashboard")}
            onSignOut={() => {
              setIsLoggedIn(false)
              setUserData({})
              setUserType(null)
              navigateTo("landing")
            }}
          />
        )

      case "job-applicants":
        return (
          <HApplicationsPage
            onBack={() => navigateTo("client-dashboard")} // Navigate back to consolidated dashboard
            onAcceptContractor={(contractorId) => {
              // TODO: Accept contractor and update job status in backend
              console.log("Accepted contractor:", contractorId)
              setPostedJobs((prev) =>
                prev.map((job) =>
                  job.id === Number.parseInt(contractorId)
                    ? { ...job, contractor: "Sean Jones", scheduledDate: "August 14 at 5:30pm", status: "In Progress" }
                    : job,
                ),
              )
              navigateTo("client-dashboard")
            }}
          />
        )

      default:
        return <UniversalLanding onLogin={() => navigateTo("login")} onSignUp={() => navigateTo("account-type")} />
    }
  }
  return <div>{renderCurrentView()}</div>
}
