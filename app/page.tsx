import Home from '@/component/Home/Home'
import Marquee from '@/component/Home/Marquee'
import Services from '@/component/Home/Services'
import React from 'react'

const page = () => {
    return (
        <div>
            <Home/>
            <div className='mt-5'>
                <Marquee/>
            </div>
            <div className='mt-10'>
                <Services/>
            </div>
            
        </div>
    )
}

export default page
