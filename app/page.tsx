import AboutDirector from '@/component/Home/AboutDirector'
import Home from '@/component/Home/Home'
import Marquee from '@/component/Home/Marquee'
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
            
        </div>
    )
}

export default page
