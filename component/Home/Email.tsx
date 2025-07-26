"use client";
import React, { useState } from 'react';

const Email = () => {
	const [isSummaryChecked, setIsSummaryChecked] = useState(false);
    const [isInvestmentChecked, setIsInvestmentChecked] = useState(false);
	return (
		<section className='mb-20'>
			<div className=' container mx-auto flex flex-col items-center text-5xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-[#005CA8] to-[#2986FE] pb-10'>И-Мэйл хаяг бүртгүүлэх ?</div>
			<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6'>
				<input type="email" placeholder='Мэйл хаягаа оруулна уу...' 
				className='w=full sm:80px px-8 py-3 rounded-4xl pr-48 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 border border-[rgba(27,27,27,0.08)] shadow-[0px_8px_25px_0px_rgba(13,10,44,0.06)] bg-white placeholder-[rgba(71,103,136,1)] text-xl font-normal'>
				</input>
				<button className='bg-[rgba(41,134,254,1)] shadow-[0px_3px_12px_0px_rgba(74,58,255,0.18)] rounded-4xl py-3 px-6 text-xl text-white'>Sign up</button>
			</div>
			<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-gray-500 text-sm justify-center">
                {/* 7 хоногийн тойм */}
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

                {/* Хөрөнгө оруулалтын боломж */}
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
			</div>
		</section>
	)
}

export default Email
