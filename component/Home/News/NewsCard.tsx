// src/components/NewsCard.tsx

import Image from 'next/image';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isLarge?: boolean;
}
export default function NewsCard({
    title,
    description,
    imageUrl,
    isLarge = false,
}: NewsCardProps) {
    return (
        <div className="flex flex-col h-full overflow-hidden bg-none mb-10">
            <div className={`relative w-full ${isLarge ? 'h-48 sm:h-64 md:h-72' : 'h-40 md:h-48 '}`}>
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105 rounded-2xl "
                />
            </div>
            <div className='py-2'>
                <h3 className={`text-blue-900 md:text-black font-bold text-left ${isLarge ? 'text-lg sm:text-xl md:text-2xl' : 'text-md md:text-lg'}`}>
                    {title}
                </h3>
                {description && isLarge && (
                    <p
                        className="md:text-[rgba(1,13,62,1)] text-[rgba(11,53,88,1)] font-medium text-[16px] text-left mt-2 line-clamp-3 md:line-clamp-none md:font-light"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </div>
        </div>
    );
}
