'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setTimeout(() => setShowContent(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* Logo with sophisticated reveal */}
        <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Image
            src="/images/thirdprime-logo-full2.png"
            alt="Third Prime Technologies"
            width={800}
            height={300}
            priority
            className="w-full max-w-4xl h-auto mx-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Philosophical statement with refined typography */}
        <div className={`mt-24 max-w-6xl mx-auto text-center transition-all duration-2000 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-3xl md:text-4xl lg:text-5xl font-thin leading-tight text-gray-100 tracking-tight">
            Some complexity hides in plain sight.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-thin leading-tight text-red-500 tracking-tight mt-4">
            Some is invisible by nature.
          </p>
        </div>

        {/* Minimal contact - just the email */}
        <div className={`mt-16 transition-all duration-2000 delay-2000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <br />
            <div className="text-lg font-light text-gray-300 tracking-wide">
              info@thirdprime.io
            </div>
          </div>
        </div>

        {/* v0-style domain hints with sophisticated reveal */}
        <div className="hidden md:block mt-40 opacity-0 hover:opacity-100 transition-all duration-1000 group cursor-default">
          <div className="text-center space-y-4 text-xs text-gray-500 tracking-[0.2em] uppercase font-light">
            <div className="group-hover:text-red-500 transition-all duration-500 transform group-hover:translate-x-1">
              Cybersecurity
            </div>
            <div className="group-hover:text-red-500 transition-all duration-700 transform group-hover:translate-x-1 delay-100">
              Wealth
            </div>
            <div className="group-hover:text-red-500 transition-all duration-900 transform group-hover:translate-x-1 delay-200">
              Universe
            </div>
          </div>
        </div>
      </div>

      {/* Subtle loading indicator */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </main>
  )
}