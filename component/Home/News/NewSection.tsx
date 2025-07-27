// src/components/NewsSection.tsx
'use client';
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
]
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaAngleRight } from 'react-icons/fa';
export default function NewsSection() {
    return (
        <section className="mb-12 relative px-4 md:px-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 border-b -1 pb-2 border-[rgba(0,0,0,0.2)]">
                <h2 className="text-[20px] md:text-3xl font-medium text-[rgba(27,45,107,1)] ">
                    Шинэ мэдээлэл
                </h2>
                <FaAngleRight className='h-6 w-6'/>
            </div>

            <div className="md:hidden">
                <Swiper
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="swiper-pagination"
                >
                    {newsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <NewsCard {...item} isLarge />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* DESKTOP layout (hidden on mobile) */}
            <div className="hidden md:flex space-x-6 overflow-x-auto pb-4 scrollbar-hide gap-6 py-6">
                {/* 1-р багц */}
                <div className="flex flex-row space-x-6 flex-shrink-0 w-[55rem]">
                    <div className="flex-shrink-0 w-[35rem]">
                        <NewsCard {...newsData[0]} isLarge />
                    </div>
                    <div className="flex flex-col space-y-6 flex-shrink-0 w-80 ">
                        <NewsCard {...newsData[1]} />
                        <NewsCard {...newsData[1]} />
                    </div>
                </div>

                {/* 2-р багц */}
                <div className="flex flex-row space-x-6 flex-shrink-0 w-[55rem]">
                    <div className="flex-shrink-0 w-[35rem]">
                        <NewsCard {...newsData[2]} isLarge />
                    </div>
                    <div className="flex flex-col space-y-6 flex-shrink-0 w-80">
                        <NewsCard {...newsData[1]} />
                        <NewsCard {...newsData[1]} />
                    </div>
                </div>
            </div>

            {/* DESKTOP fade gradient */}
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-100 to-transparent z-10 hidden lg:block"></div>
        </section>
    );
}
