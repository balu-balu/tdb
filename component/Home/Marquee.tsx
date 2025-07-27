import React from 'react';
import Image from 'next/image';

const images = [
    { src: '/images/acme.png', alt: 'Лого 1' },
    { src: '/images/apex.png', alt: 'Лого 2' },
    { src: '/images/celestia.png', alt: 'Лого 3' },
    { src: '/images/echo.png', alt: 'Лого 4' },
    { src: '/images/pulse.png', alt: 'Лого 5' },
    { src: '/images/quantum.png', alt: 'Лого 6' },
];

const Marquee = () => {
    const renderImageSet = (keyPrefix: string) => (
        images.map((image, index) => (
            <div key={`${keyPrefix}-${index}`} 
				className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex-shrink-0">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={50}
                    className="max-w-none h-6 sm:h-8 md:h-12 lg:h-14 w-auto"
                    style={{ height: 'auto' }}
                />
            </div>
        ))
    );

    return (
        <div className="bg-white">
            <div className="relative mx-auto max-w-7xl overflow-hidden">
                <div 
                    className="flex w-max items-center animate-scroll-right-to-left">
                    {renderImageSet("first")}
                    {renderImageSet("second")}
                </div>
                
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"></div>
            </div>
        </div>
    );
};

export default Marquee;