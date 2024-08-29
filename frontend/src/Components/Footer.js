import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className=" mx-auto flex justify-between items-center px-4 max-[400px]:flex-col">
        <div className="mb-4  max-md:mb-0">
          <h1 className="text-xl font-bold text-center">R for Restaurant</h1>
          <p className='my-2 '>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com" className="text-white hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
