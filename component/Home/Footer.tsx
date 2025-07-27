import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-[rgba(245,245,247,1)] md:bg-[rgba(250,251,255,1)] text-blue-900 py-8 mt-8 border-t border-[rgba(239,240,246,1)]">
			<div className="container mx-auto px-12 md:px-4 ">

				{/* Top Section: Logo + Short Text */}
				<div className="hidden w-full md:flex flex-col md:flex-row items-center md:items-start justify-between border-b border-gray-300 pb-16 mt-4 space-y-4 md:space-y-0">
					{/* Logo */}
					<div className="mb-4 md:mb-0">
						<Image src="/images/TDBS_logo.png" alt="TDB Securities Logo" width={120} height={60} />
					</div>

					{/* Description */}
					<p className="text-gray-600 text-center md:text-left max-w-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					</p>
				</div>

				{/* Mobile only: Ready to Trade */}
				<div className="block md:hidden mt-12 mb-16">
					<h3 className="font-bold text-[20px] mb-4 text-center text-[rgba(11,53,88,1)]">Ready to Trade</h3>
					<p className="text-gray-600 mb-4 text-center">
						Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
					</p>
					<form className="space-y-4 max-w-sm mx-auto">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]"
						/>
						<div className='flex justify-center'>
						<button
							type="submit"
							className="flex bg-blue-500 text-white font-medium text-md py-1 px-3 rounded-full hover:bg-blue-600 transition-colors duration-200">
							Subscribe
						</button>
						</div>
					</form>
				</div>
				<div className='md:mx-20'>
					{/* Links Section */}
					<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-8 mb-24 mt-24">
						{/* Product */}
						<div>
							<h3 className="font-bold text-lg mb-4 text-[rgba(11,53,88,1)]">Product</h3>
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
							<h3 className="font-bold text-lg mb-4 text-[rgba(11,53,88,1)]">Company</h3>
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
							<h3 className="font-bold text-lg mb-4 text-[rgba(11,53,88,1)]">Support</h3>
							<ul className="space-y-2 text-gray-600">
								<li><a href="#" className="hover:text-blue-500">Getting started</a></li>
								<li><a href="#" className="hover:text-blue-500">Help center</a></li>
								<li><a href="#" className="hover:text-blue-500">Server status</a></li>
								<li><a href="#" className="hover:text-blue-500">Report a bug</a></li>
								<li><a href="#" className="hover:text-blue-500">Chat support</a></li>
							</ul>
						</div>

						{/* Desktop only: Ready to Trade */}
						<div className="hidden md:block">
							<h3 className="font-bold text-lg mb-4 text-[rgba(11,53,88,1)]">Ready to Trade</h3>
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
				</div>

				{/* Bottom Section */}
				<div className=" hidden md:flex md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-300 pt-8 space-y-4 md:space-y-0 mx-20">
					<p className="text-center">© 2024 TDB Securities SC LLC | All Rights Reserved</p>
					<div className="flex space-x-4 text-gray-600">
						<FaFacebookF className="hover:text-blue-600 cursor-pointer w-6 h-6" />
						<FaTwitter className="hover:text-blue-500 cursor-pointer w-6 h-6" />
						<FaInstagram className="hover:text-pink-500 cursor-pointer w-6 h-6" />
						<FaLinkedinIn className="hover:text-blue-700 cursor-pointer w-6 h-6" />
						<FaYoutube className="hover:text-red-500 cursor-pointer w-6 h-6" />
					</div>
				</div>
				{/* Mobile Footer*/}
					<div className="md:hidden flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-b border-gray-300 p-4">
					<div className="flex space-x-4 text-gray-600">
						<FaFacebookF className="hover:text-blue-600 cursor-pointer w-6 h-6" />
						<FaTwitter className="hover:text-blue-500 cursor-pointer w-6 h-6" />
						<FaInstagram className="hover:text-pink-500 cursor-pointer w-6 h-6" />
						<FaLinkedinIn className="hover:text-blue-700 cursor-pointer w-6 h-6" />
						<FaYoutube className="hover:text-red-500 cursor-pointer w-6 h-6" />
					</div>
					</div>
					<p className=" md:hidden text-left text-[10px] mt-3 text-[rgba(71,103,136,1)]">© 2024 TDB Securities SC LLC | All Rights Reserved</p>

			</div>
		</footer>
	);
};

export default Footer;
