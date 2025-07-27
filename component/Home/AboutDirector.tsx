'use client'

import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const AboutDirector = () => {
    return (
        <div className='mb-20 mx-0 md:mx-20 border-0 md:border p-6 rounded-0 md:rounded-4xl border-custom-color bg-[rgba(245,245,247,1)] md:bg-white'>
            
            <div className='hidden md:flex flex-row items-start relative'>
                
                <div className='flex-shrink-0'>
                    <img 
                        src="/images/director.jpg" 
                        alt="Director" 
                        className='w-[420px] h-[360px] rounded-2xl object-cover'
                    />
                </div>

                <div className='w-full text-left ml-20 mr-10 my-6'>


                    <div className='space-y-5 text-[14px] text-font-light text-custom-blue-gray text-justify'>
                        <p>
                            Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд энэхүү хөгжлийн тэн хагасыг бид эрхэм харилцагч, хөрөнгө оруулагчдынхаа хамтаар бичилцсэн. 2008 онд үүсгэн байгуулагдсан цагаасаа хойш бид “анхдагч, шинийг санаачлагч, үндэсний баялаг бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх” эрхэм зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт технологид суурилсан цогц бүтээгдэхүүн үйлчилгээ, санхүүгийн шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар байна.
                        </p>
                        <p>
                            Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах зээлийн аялалд гарахад сайн хөтөч хамгийн чухал. Бид таны газрын зураг болж энэхүү аялалд амжилттай гарахад үргэлж хамт байх болно.
                        </p>
                    </div>
					<div className='font-semibold text-3xl text-custom-blue mt-2'>
                        Г. Энхбат
                    </div>
                    <div className='mt-2 font-light text-[12px]'>
                        “Ти Ди Би Секьюритис ҮЦК” ХХК-ийн Гүйцэтгэх захирлын тэргүүн орлогч
                    </div>
                </div>
            </div>

            {/* Mobile responsive*/}
            <div className='flex flex-col items-center md:hidden relative'>
                
                <div className='block absolute top-[-40] right-4 text-3xl text-custom-blue-gray font-bold'>
                    <FaQuoteRight color="rgba(11, 53, 88, 0.89)"/>
                </div>

                <div className='flex flex-row items-center'>
                    
                    <div className='flex-shrink-0'>
                        <img 
                            src="/images/director.jpg" 
                            alt="Director" 
                            className='w-24 h-24 rounded-full object-cover'
                        />
                    </div>

                    <div className='text-left ml-4'>
                        <div className='font-semibold text-xl sm:text-2xl text-custom-blue'>
                            Г. Энхбат
                        </div>
                        <div className='mt-2 font-light text-[10px]'>
                            “Ти Ди Би Секьюритис ҮЦК” ХХК-ийн<br />
                            Гүйцэтгэх захирлын тэргүүн орлогч
                        </div>
                    </div>
                </div>

                <div className='w-full mt-6 space-y-5 text-sm text-custom-blue-gray text-justify'>
                    <p>
                        Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд энэхүү хөгжлийн тэн хагасыг бид эрхэм харилцагч, хөрөнгө оруулагчдынхаа хамтаар бичилцсэн. 2008 онд үүсгэн байгуулагдсан цагаасаа хойш бид “анхдагч, шинийг санаачлагч, үндэсний баялаг бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх” эрхэм зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт технологид суурилсан цогц бүтээгдэхүүн үйлчилгээ, санхүүгийн шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар байна.
                    </p>
                    <p>
                        Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах зээлийн аялалд гарахад сайн хөтөч хамгийн чухал. Бид таны газрын зураг болж энэхүү аялалд амжилттай гарахад үргэлж хамт байх болно.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutDirector