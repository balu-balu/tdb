import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-[rgba(250,251,255,1)] text-blue-900 py-8 mt-8 border-[rgba(239,240,246,1)] border-t">
		<div className="container mx-auto">
			{/* Дээд хэсэг */}
			<div className="w-[full] flex flex-col md:flex-row items-center md:items-start justify-between border-b border-gray-300 pb-16 mt-4">
			<div className="mb-4 md:mb-0">
				{/* TDB SECURITIES лого */}
				<div className="flex items-center space-x-2">
				{/* Логоны зураг */}
				<Image src="/images/TDBS_logo.png" alt="TDB Securities Logo" width={120} height={60} />
				</div>
			</div>
			<p className="text-gray-600 text-center md:text-right max-w-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			</p>
			</div>

			{/* Холбоосуудын хэсэг */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 mt-24">
			{/* Product */}
			<div>
				<h3 className="font-bold text-lg mb-4">Product</h3>
				<ul className="space-y-2 text-gray-600">
				<li><a href="#" className="hover:text-blue-500">Features</a></li>
				<li><a href="#" className="hover:text-blue-500">Pricing</a></li>
				<li><a href="#" className="hover:text-blue-500">Case studies</a></li>
				<li><a href="#" className="hover:text-blue-500">Reviews</a></li>
				<li><a href="#" className="hover:text-blue-500">Updates</a></li>
				</ul>
			</div>

			{/* Company */}
			<div>
				<h3 className="font-bold text-lg mb-4">Company</h3>
				<ul className="space-y-2 text-gray-600">
				<li><a href="#" className="hover:text-blue-500">About</a></li>
				<li><a href="#" className="hover:text-blue-500">Contact us</a></li>
				<li><a href="#" className="hover:text-blue-500">Careers</a></li>
				<li><a href="#" className="hover:text-blue-500">Culture</a></li>
				<li><a href="#" className="hover:text-blue-500">Blog</a></li>
				</ul>
			</div>

			{/* Support */}
			<div>
				<h3 className="font-bold text-lg mb-4">Support</h3>
				<ul className="space-y-2 text-gray-600">
				<li><a href="#" className="hover:text-blue-500">Getting started</a></li>
				<li><a href="#" className="hover:text-blue-500">Help center</a></li>
				<li><a href="#" className="hover:text-blue-500">Server status</a></li>
				<li><a href="#" className="hover:text-blue-500">Report a bug</a></li>
				<li><a href="#" className="hover:text-blue-500">Chat support</a></li>
				</ul>
			</div>

			{/* Ready to Trade */}
			<div>
				<h3 className="font-bold text-lg mb-4">Ready to Trade</h3>
				<p className="text-gray-600 mb-4">
				Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
				</p>
				<form className="space-y-2">
				<input
					type="email"
					placeholder="Enter your email"
					className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white font-medium text-md py-4 px-6 rounded-full hover:bg-blue-600 transition-colors duration-200">
					Subscribe
				</button>
				</form>
			</div>
			</div>

			{/* Доод хэсэг */}
		<div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-300 pt-8">
			<p>© 2024 TDB Securities SC LLC | All Rights Reserved</p>
			<div className="flex space-x-4 mt-4 md:mt-0 text-gray-600">
			<FaFacebookF className="hover:text-blue-600 cursor-pointer w-6 h-6" />
			<FaTwitter className="hover:text-blue-500 cursor-pointer w-6 h-6" />
			<FaInstagram className="hover:text-pink-500 cursor-pointer w-6 h-6" />
			<FaLinkedinIn className="hover:text-blue-700 cursor-pointer w-6 h-6" />
			<FaYoutube className="hover:text-red-500 cursor-pointer w-6 h-6" />
			</div>
		</div>
		</div>
		</footer>
	);
};

export default Footer;