import React from 'react'
import { IoMdShare } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="text-sm text-black font-head">
          © 2024 <span className="font-bold">BRiX</span>. All rights reserved
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 font-head">
          <a
            href="/privacy-policy"
            className="text-sm text-black hover:text-gray-700"
          >
            Privacy Policy
          </a>
          {/* Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-700">
            <IoMdShare />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
            <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
            <FaFacebookF />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
            <TfiYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
