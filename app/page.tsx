import AboutDirector from '@/component/Home/AboutDirector'
import Home from '@/component/Home/Home'
import Marquee from '@/component/Home/Marquee'
import FeaturedSection from '@/component/Home/News/FeaturedSection'
import NewsSection from '@/component/Home/News/NewSection'
import Services from '@/component/Home/Services'
import React from 'react'

const page = () => {
    return (
        <div>
            <Home/>
            <div className='my-5'>
                <Marquee/>
            </div>
            <div className='my-5'>
                <Services/>
            </div>
            <div>
                <AboutDirector/>
            </div>
            <div className='container mx-auto px-4 py-8 bg-[rgba(245,245,247,1)]'>
                <NewsSection/>
                <FeaturedSection/>
            </div>
            
        </div>
    )
}

export default page
