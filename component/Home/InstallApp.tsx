import React from 'react'

const InstallApp = () => {
	return (
		<section className='my-12 relative w-full'>
			<img src="images/tdb_app.jpg" alt='TDB_app' className='w-full h-[80%] object-cover z-0 layout="fill"'></img>
			<div className='absolute inset-0 z-10 flex flex-col justify-end items-start p-8 md:p-16'>
				<button className="bg-white  text-[rgba(41,134,254,1)] font-bold text-lg py-1 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 ">
				АПП татах
				</button>
			</div>
		</section>
	)
}

export default InstallApp
