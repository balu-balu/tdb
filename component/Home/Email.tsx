"use client";
import React, { useState } from 'react';

const Email = () => {
    const [isSummaryChecked, setIsSummaryChecked] = useState(false);
    const [isInvestmentChecked, setIsInvestmentChecked] = useState(false);

    return (
        <section className='mb-20 px-4'> {/* Added horizontal padding for smaller screens */}
            <div className='container mx-auto flex flex-col items-center text-2xl sm:text-3xl md:text-4xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-[#005CA8] to-[#2986FE] pb-10'>
                И-Мэйл хаяг бүртгүүлэх ?
            </div>
            {/* Input field and button container: Always flex-row on all screen sizes as per the new mobile image */}
            <div className='flex flex-row items-center justify-center space-x-4 mb-6 w-full max-w-xl mx-auto'>
                {/* Input field takes up available space */}
                <input
                    type="email"
                    placeholder='Мэйл хаягаа оруулна уу...'
                    className='flex-1 px-8 py-1 md:py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 border border-[rgba(27,27,27,0.08)] shadow-[0px_8px_25px_0px_rgba(13,10,44,0.06)] bg-white placeholder-[rgba(71,103,136,1)] text-[14px] md:text-[16px] sm:text-xl font-normal'
                />
                {/* Button maintains its size */}
                <button className='flex-shrink-0 bg-[rgba(41,134,254,1)] shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)] rounded-full md:py-3 py-1 px-3 md:px-4 text-[14px] sm:text-lg md:text-[16px] text-white'>
                    Sign up
                </button>
            </div>
            {/* Checkboxes remain stacked vertically and aligned to the start */}
            <div className="flex flex-col md:flex-row space-y-2 text-gray-500 text-sm w-full max-w-xl mx-auto items-start md:justify-around">
                {/* Хөрөнгө оруулалтын боломж - placed first as per image */}
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600 text-sm">
                    <input
                        type="checkbox"
                        checked={isInvestmentChecked}
                        onChange={() => setIsInvestmentChecked(!isInvestmentChecked)}
                        className="sr-only peer"
                    />
                    <span className={`
                        w-4 h-4 rounded border border-gray-400 flex items-center justify-center
                        peer-checked:bg-blue-500 peer-checked:border-blue-500
                        transition-colors duration-200
                    `}>
                        {isInvestmentChecked && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </span>
                    <span>Хөрөнгө оруулалтын боломж</span>
                </label>

                {/* 7 хоногийн тойм - placed second as per image */}
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600 text-sm">
                    <input
                        type="checkbox"
                        checked={isSummaryChecked}
                        onChange={() => setIsSummaryChecked(!isSummaryChecked)}
                        className="sr-only peer"
                    />
                    <span className={`
                        w-4 h-4 rounded border border-gray-400 flex items-center justify-center
                        peer-checked:bg-blue-500 peer-checked:border-blue-500
                        transition-colors duration-200
                    `}>
                        {isSummaryChecked && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </span>
                    <span>7 хоногийн тойм</span>
                </label>
            </div>
        </section>
    );
}

export default Email;
