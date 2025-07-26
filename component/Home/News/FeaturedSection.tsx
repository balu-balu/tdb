// src/components/FeaturedSection.tsx

import Image from 'next/image';
import { FaEye } from 'react-icons/fa';

// Define a type for the featured news data
interface FeaturedNewsItem {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	date: string;
	category: string;
	views: number;
}

// Mock data for demonstration
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

	// Helper component for the highlight cards
function HighlightCard({ title, description, imageUrl, date, category, views }: FeaturedNewsItem) {
	return (
		<div className="bg-white rounded-md overflow-hidden border-custom-color transition-shadow duration-300 hover:shadow-lg p-3">
		<div className="relative w-full h-30">
			<Image
			src={imageUrl}
			alt={title}
			layout="fill"
			objectFit="cover"
			className="transition-transform duration-300 hover:scale-105 rounded-xl"
			/>
		</div>
		<div className="pt-2">
			<h4 className="text-md font-medium mb-2 text-custom-blue">{title}</h4>
			<p className="text-[rgba(71,103,136,1)] text-sm mb-4 pb-4 border-b border-[rgba(0,0,0,0.1)]">{description}</p>
			<div className="items-center text-xs text-[rgba(91,91,91,1)]">
			<span>{date}</span>
			<div className='flex justify-between items-center pb-6'>
				<span className="font-medium text-sm text-blue-500">{category}</span>
					<div>
						<span>{views}</span>
						<FaEye className="w-4 h-4 text-gray-700"/>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default function FeaturedSection() {
	return (
		<section className='mx-16'>
		<div className="flex justify-between items-center mb-6">
			<h2 className="text-3xl font-semibold text-gray-900">Онцлох мэдээ</h2>
			<a href="#" className="text-blue-600 hover:underline transition-colors duration-200 font-medium">Read more</a>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
			{featuredData.map(item => (
			<HighlightCard key={item.id} {...item} />
			))}
		</div>
		</section>
	);
}