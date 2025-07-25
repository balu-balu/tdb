import React from 'react'
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
		<div key={`${keyPrefix}-${index}`} className="mx-8 flex-shrink-0">
			<Image
			src={image.src}
			alt={image.alt}
			width={150}
			height={50}
			className="max-w-none"
			/>
		</div>
		))
	);

	return (
		<div className="relative w-full overflow-hidden">
		<div className="flex w-max">
			<div className="flex animate-scroll-right-to-left items-center">
			{renderImageSet("first")}
			</div>
			<div className="flex animate-scroll-right-to-left items-center" aria-hidden="true">
			{renderImageSet("second")}
			</div>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
		</div>
		</div>
	);
};

export default Marquee;