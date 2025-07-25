import React from 'react'

const AboutDirector = () => {
	return (
		<div className='mb-20 mx-20 border p-6 rounded-4xl border-custom-color'>
		<div className='flex items-center'>
			<img src={"images/director.jpg"} alt='Director' className='w-[420px] h-[360px] object-cover rounded-2xl'></img>
			<div className='ml-20 mr-10 text-justify'>
				<div className='text-sm text-custom-blue-gray'>
				Монгол Улсын хөрөнгийн зах зээл 33 жилийн хөгжлийн түүхтэй бөгөөд энэхүү хөгжлийн тэн хагасыг бид эрхэм харилцагч, хөрөнгө оруулагчдынхаа хамтаар бичилцсэн. 2008 онд үүсгэн байгуулагдсан цагаасаа хойш бид “анхдагч, шинийг санаачлагч, үндэсний баялаг бүтээгчдийг дэмжигч, харилцагчдын найдвартай зөвлөх байх” эрхэм зорилгын хүрээнд харилцагчдын хүсэл зорилгыг эрхэмлэсэн, дэвшилтэт технологид суурилсан цогц бүтээгдэхүүн үйлчилгээ, санхүүгийн шийдлийг мэргэжлийн дээд түвшинд харилцагчдадаа хүргэн ажилласаар байна.
				<br /><br />
				Хөрөнгийн зах зээл боломжоор дүүрэн. Та энэхүү боломж дүүрэн зах зээлийн аялалд гарахад сайн хөтөч хамгийн чухал. Бид таны газрын зураг болж энэхүү аялалд амжилттай гарахад үргэлж хамт байх болно.
				</div>
				<div className='font-semibold text-3xl text-custom-blue mt-5 '>
					Г. Энхбат
				</div>
				<div className='mt-5'>“Ти Ди Би Секьюритис ҮЦК” ХХК-ийн Гүйцэтгэх захирлын тэргүүн орлогч</div>
			</div>
		</div>
		</div>
	)
}

export default AboutDirector
