'use client'
import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
      <Image
        src="/images/HomeImage.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="z-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-[90vw] md:max-w-[600px] mx-auto leading-tight">
          Your partner in Mongolian Capital Market
        </h1>
        <p className="mt-4 text-sm md:text-base">Your Way To Wall Street</p>
        <button className="mt-8 bg-blue-500 px-6 py-2 rounded-4xl text-white text-sm">
          Find out more
        </button>
      </div>
    </section>
  )
}

export default Home
