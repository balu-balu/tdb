import React from 'react';
import Image from 'next/image';

const InstallApp = () => {
    return (
        <section className='my-8 relative w-full overflow-hidden'>
            <Image 
                src="/images/tdb_app.jpg" 
                alt='TDB_app' 
                layout="responsive"
                width={4}
                height={3}
                objectFit="cover"
                objectPosition="top"
                className='z-0'
            />

            <div className='absolute inset-0 z-10 flex flex-col justify-end items-start p-8 md:p-16'>
                <button className="bg-white text-[rgba(41,134,254,1)] font-bold text-xs md:text-lg py-0.5 px-2 md:py-2 md:px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 border border-[rgba(41,134,254,1)]">
                    АПП татах
                </button>
            </div>
        </section>
    );
};

export default InstallApp;