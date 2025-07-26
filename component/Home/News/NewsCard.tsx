// src/components/NewsCard.tsx

import Image from 'next/image';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isLarge?: boolean;
}

export default function NewsCard({ title, description, imageUrl, isLarge = false }: NewsCardProps) {
  // Картуудын нийтлэг загвар

  // isLarge prop-оор том картын байрлалыг тохируулна
  if (isLarge) {
    return (
      <div className='flex flex-col h-ful'>
        {/* Том картын зургийг харуулах хэсэг */}
        <div className="relative w-full h-48 md:h-72 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105 rounded-2xl"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-2xl mb-2 text-gray-900">{title}</h3>
            {/* description-г HTML-ээс тусад нь оруулах хэрэгтэй */}
            <p
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Жижиг картын хувьд энгийн босоо байрлалтай
  return (
      <div className='flex flex-col h-ful'>
      <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105 rounded-2xl"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-gray-900">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}