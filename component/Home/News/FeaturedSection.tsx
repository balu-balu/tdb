// src/components/FeaturedSection.tsx
"use client";
import Image from 'next/image';
import { FaAngleRight, FaEye } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface FeaturedNewsItem {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	category: string;
	views: number;
}

const featuredData: FeaturedNewsItem[] = [
	{
		id: 1,
		title: 'How technical and price action analysis can help traders through the US election',
		description: 'Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....',
		imageUrl: '/images/highlight1.jpg',
		date: 'Aug 19, 2024',
		category: 'Economic',
		views: 19,
	},
	{
		id: 2,
		title: 'How technical and price action analysis can help traders through the US election',
		description: 'Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....',
		imageUrl: '/images/highlight2.jpg',
		date: 'Aug 19, 2024',
		category: 'Economic',
		views: 19,
	},
	{
		id: 3,
		title: 'How technical and price action analysis can help traders through the US election',
		description: 'Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....',
		imageUrl: '/images/highlight3.jpg',
		date: 'Aug 19, 2024',
		category: 'Economic',
		views: 19,
	},
	{
		id: 4,
		title: 'How technical and price action analysis can help traders through the US election',
		description: 'Trading a discretionary or tactical strategy through the US election cycle is not an easy proposition – it requires thorough research, an understanding of....',
		imageUrl: '/images/highlight4.jpg',
		date: 'Aug 19, 2024',
		category: 'Economic',
		views: 19,
	},
];

function HighlightCard({ title, description, imageUrl, date, category, views }: FeaturedNewsItem) {
	return (
		<div className="bg-white rounded-md overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 p-4">
			<div className="w-full h-48 sm:h-40 relative rounded-xl overflow-hidden mb-3">
				<Image
					src={imageUrl}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<h4 className="text-base font-semibold text-custom-blue mb-2">{title}</h4>
			<p className="text-sm text-[rgba(71,103,136,1)] mb-4 pb-4 border-b border-gray-200">{description}</p>
			<div className="text-xs text-[rgba(91,91,91,1)]">
				<span>{date}</span>
				<div className="flex justify-between items-center pt-2">
					<span className="text-blue-500 font-medium">{category}</span>
					<div className="flex items-center gap-1">
						<span>{views}</span>
						<FaEye className="w-4 h-4 text-gray-700" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default function FeaturedSection() {
	return (
		<section className="px-4 sm:px-8 lg:px-16">
			<div className="md:hidden flex justify-between items-center mb-4 md:mb-6 border-b -1 pb-2 border-[rgba(0,0,0,0.2)]">
				<h2 className="text-[20px] md:text-3xl font-medium text-[rgba(27,45,107,1)]">
					Онцлох мэдээ
				</h2>
				<FaAngleRight className='h-6 w-6'/>
			</div>
			<div className="hidden md:flex  items-center mb-4 md:mb-6 pb-2 border-[rgba(0,0,0,0.2)]">
				<h2 className="text-[20px] md:text-[42px] font-medium text-[rgba(27,45,107,1)] mr-10 ">
					Онцлох мэдээ
				</h2>
				<div className='flex space-x-4 text-[rgba(71,103,136,1)] font-light text-[18px] border-b-1 pl-175 '>
					<div>Read more</div>
				</div>
			</div>
			{/* Desktop Grid */}
			<div className="hidden lg:grid grid-cols-4 gap-6">
				{featuredData.map((item) => (
					<HighlightCard key={item.id} {...item} />
				))}
			</div>

			{/* Mobile Swiper */}
			<div className="lg:hidden">
				<Swiper
					modules={[Pagination]}
					spaceBetween={16}
					slidesPerView={1}
					pagination={{ clickable: true }}
				>
					{featuredData.map((item) => (
						<SwiperSlide key={item.id}>
							<HighlightCard {...item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
