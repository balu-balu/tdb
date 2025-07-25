import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
	
	const Nav = () => {
	return (
		<nav className=" absolute z-10 flex w-full items-center  justify-between px-30 py-4 ">
			<div className="flex items-center space-x-4">
				<img src="/images/TdbLogo.png" alt="logo" className='h-8 w-auto' />
			</div>
			<div className="hidden items-center justify-center w-[700px] md:flex space-x-6 font-semibold text-white bg-black/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-black/20">
				{NavLinks.map((link)=>{
					return (
						<Link 
							href={link.url} 
							key={link.id} 
						>
						<p>
							{link.label}
						</p>
						</Link>
					);
				})}
                <button><HiSearch className='h-[25px] w-[25px]'></HiSearch></button>
			</div>
            <div className='flex items-center space-x-4'>
                <button className='text-white font-semibold cursor-pointer' >Нэвтрэх</button>
                <button className='bg-blue-500 text-white font-semibold py-1 px-4 rounded-4xl items-center cursor-pointer'>Данс нээх</button>
            </div>
		</nav>
	)
	}
	
	export default Nav
	