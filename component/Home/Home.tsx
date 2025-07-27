'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

const images = [
  '/images/HomeImage.jpg',
  '/images/HomeImage2.jpg',
  '/images/HomeImage3.jpg',
]

const Home = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden text-white">
  {/* Swiper Background */}
  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop
    className="absolute top-0 left-0 w-full h-full z-0"
  >
    {images.map((src, index) => (
      <SwiperSlide key={index}>
        <Image
          src={src}
          alt={`Slide ${index}`}
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Overlay */}
  <div className="absolute inset-0 z-10" />

  {/* Content */}
  <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-[600px] leading-tight">
      Your partner in Mongolian Capital Market
    </h1>
    <p className="mt-4 text-sm md:text-base">Your Way To Wall Street</p>
    <button className="mt-8 bg-blue-500 px-6 py-2 rounded-4xl text-white text-sm">
      Find out more
    </button>
  </div>
  <div className="md:hidden absolute inset-0 z-10 bg-gradient-to-b from-[#fafbff]/0 to-white" />
</section>
  )
}

export default Home
