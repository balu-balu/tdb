// src/components/NewsSection.tsx

import NewsCard from './NewsCard';

// Define a type for the news data
interface NewsItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    isLarge?: boolean;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'Apple Inc Q2 Earnings:',
        description: 'On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing... <br></br>On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing',
        imageUrl: '/images/apple_logo.jpg',
        isLarge: true,
    },
    {
        id: 2,
        title: 'New York Stock Exchange',
        description: '',
        imageUrl: '/images/NYSE.jpg',
    },
    {
        id: 3,
        title: "Fed's Powell says:",
        description: 'On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing... <br></br>On May 2, 2024, Apple Inc (NASDAQ:AAPL) disclosed its financial outcomes for the fiscal second quarter ending March 30, 2024, through an 8-K filing',
        imageUrl: '/images/Fed.jpg',
        isLarge: true,
    },
];

export default function NewsSection() {
    return (
        <section className="mb-12 relative ml-16">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-3xl font-semibold text-gray-900">Шинэ мэдээлэл</h2>
					<nav className="flex space-x-4 text-sm font-medium">
						<a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">Latest</a>
						<a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">Most read</a>
					</nav>
				</div>
				
				<div className='flex space-x-6 overflow-x-auto pb-4 scrollbar-hide gap-6 py-6 '>
					<div className="flex flex-row space-x-6 flex-shrink-0 w-[55rem]">
						<div className="flex-shrink-0 w-[35rem]">
							<NewsCard {...newsData[0]} isLarge={true} />
						</div>
						<div className="flex flex-col space-y-6 flex-shrink-0 w-80">
							<NewsCard {...newsData[1]} />
							<NewsCard {...newsData[1]} />
						</div>
					</div>

					<div className="flex flex-row space-x-6 flex-shrink-0 w-[55rem]">
						<div className="flex-shrink-0 w-[35rem]">
							<NewsCard {...newsData[2]} isLarge={true} />
						</div>
						<div className="flex flex-col space-y-6 flex-shrink-0 w-80">
							<NewsCard {...newsData[1]} />
							<NewsCard {...newsData[1]} />
						</div>
					</div>

					<div className="flex flex-row space-x-6 flex-shrink-0 w-[55rem]">
						<div className="flex-shrink-0 w-[35rem]">
							<NewsCard {...newsData[0]} isLarge={true} />
						</div>
						<div className="flex flex-col space-y-6 flex-shrink-0 w-80">
							<NewsCard {...newsData[1]} />
							<NewsCard {...newsData[1]} />
						</div>
					</div>
				</div>
				<div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
        </section>
    );
}