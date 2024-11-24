import React from 'react'
import Footer from '../Components/Footer'

const TenthSection = () => {
  return (
    <>
    <div className="2xl:flex xl:flex md:flex-row flex-row h-auto">
      {/* Left Panel */}
      <div className="2xl:w-1/2 xl:w-1/2 md:w-full w-full bg-teal-500 text-white 2xl:py-16 xl:py-16 md:py-16 py-6 2xl:px-16 xl:px-16 md:px-16 px-6 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4 font-sub_head">CALL OR TEXT</h2>
          <p className="text-lg mb-6 font-paragraph">+1 514 800-2558</p>
          <h2 className="text-4xl font-bold mb-4 font-sub_head">WRITE</h2>
          <p className="text-lg mb-6 font-paragraph">rent@brixmtl.com</p>
          <h2 className="text-4xl font-bold mb-4 font-sub_head">LEASING OFFICE</h2>
          <p className="text-lg font-paragraph">
            1090 de Bleury <br />
            Montreal, QC, H2Z 0B7
          </p>
          <p className="text-lg ">
            Mon 10am – 6pm <br />
            Tue 10am – 6pm <br />
            Wed 10am – 6pm <br />
            Thus 10am – 6pm <br />
            Fri 10am – 6pm <br />
            Sat - Sun: Closed
          </p>
        </div>
        <div className="bg-gray-200 h-[100%] w-full mt-6 rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.170897569139!2d-73.56624558861591!3d45.50463293061994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5aac7fb00b%3A0x41929828472e20a2!2s1090%20Rue%20de%20Bleury%2C%20Montr%C3%A9al%2C%20QC%20H2Z%201N2%2C%20Canada!5e1!3m2!1sen!2sin!4v1732418278865!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Right Panel */}
      <div className="2xl:w-1/2 xl:w-1/2 md:w-full w-full bg-gray-900 text-white 2xl:py-16 xl:py-16 md:py-16 py-6 2xl:px-16 xl:px-16 md:px-16 px-6">
        <h2 className="text-4xl font-bold mb-6 font-sub_head">ASK US ANYTHING</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium font-paragraph">Subject*</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Enter subject"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium font-paragraph">Name*</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium font-paragraph">Email*</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium font-paragraph">Phone*</label>
            <input
              type="tel"
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              placeholder="Enter your phone"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium font-paragraph">
              Let us know what you need and we’ll get back to you shortly
            </label>
            <textarea
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm font-paragraph">
              Yes, please email me about BRiX updates and events
            </label>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white py-3 px-6 rounded hover:bg-teal-400 font-head font-bold"
          >
            SEND IT
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
      
  )
}

export default TenthSection
