"use client"

import { useState } from "react"
import { Star, Leaf } from "lucide-react"

/* universal login for contractors and home (owner) clients */

export default function UserLogin({ onLogin, onSignUp, onBack }) {
    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields")
      return
    }

    // TODO: Integrate with backend authentication service
    // For now, simulate successful login
    console.log("Login Attempt:", { email, password })
    onLogin({ email, password })
  }

  const handleForgotPassword = () => {
    // TODO: Implement password reset flow
    alert("Password reset functionality would be implemented here")
  }

  const handleSocialLogin = (provider) => {
    // TODO: Integrate with OAuth providers (Google, Facebook)
    console.log(`Social login with ${provider}`)
    onLogin({ provider, email: `user@${provider.toLowerCase()}.com` })
  }

  const handleSignUp = () => {
    onSignUp()
  }

    return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        {/* Login Card */}
        <div className="border border-gray-300 rounded-2xl p-8 bg-white shadow-sm text-center">
          {/* Logo */}
          <div className="relative w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Star className="w-10 h-10 text-white fill-current" />
            <Leaf className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-green-500 rotate-45" />
            <Leaf className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 text-green-500 -rotate-45" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-full border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all placeholder-gray-400"
            />
            <button
              onClick={handleForgotPassword}
              className="text-sm text-blue-600 hover:underline mt-2 block text-right"
            >
              Forgot password?
            </button>
          </div>

          {/* Log In Button */}
          <button
            onClick={handleLogin}
            className="w-full px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all font-medium mb-6"
          >
            Log In
          </button>

          {/* Or log in with section */}
          <div className="flex items-center mb-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">Or log in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleSocialLogin("Google")}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-lg font-semibold text-gray-700 hover:border-blue-600 transition-all"
            >
              G
            </button>
            <button
              onClick={() => handleSocialLogin("Facebook")}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-lg font-semibold text-gray-700 hover:border-blue-600 transition-all"
            >
              f
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button onClick={handleSignUp} className="text-blue-600 hover:underline font-medium">
              Sign up
            </button>
          </p>

          {onBack && (
            <button onClick={onBack} className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Back to home
            </button>
          )}
        </div>
      </div>
    </div>
    )
}
