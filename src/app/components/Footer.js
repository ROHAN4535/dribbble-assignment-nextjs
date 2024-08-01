import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
         
          <div className="flex flex-col md:flex-row items-center space-x-8 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Dribbble</h1>
            <nav className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-gray-900 hover:underline font-bold">For designers</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Hire talent</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Inspiration</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Advertising</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Blog</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">About</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Careers</a>
              <a href="#" className="text-gray-900 hover:underline font-bold">Support</a>
            </nav>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-900 hover:text-black">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-900 hover:text-black">
              <FaPinterest size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-8 mb-4">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <p>© 2024 Dribbble</p>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>

          <div className="flex flex-wrap justify-center space-x-6 text-gray-500">
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Designers</a>
            <a href="#" className="hover:underline">Freelancers</a>
            <a href="#" className="hover:underline">Tags</a>
            <a href="#" className="hover:underline">Places</a>
            <a href="#" className="hover:underline">Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
