

import FirstImage from "../assets/andrei-r-popescu-FmOPaefLRA0-unsplash.jpg"
import Navbar from '../Components/Navbar'
import { FaGreaterThan } from "react-icons/fa6";
import Building from "../assets/building.jpg"
import BedRoom from '../assets/bedroom.jpg';
import Dinning from "../assets/dinning room.jpg"

const FirstSection = () => {
  return (

<div className="flex flex-col xl:flex-row gap-8 p-8 2xl:mx-16 md:mx-20 my-10">
  {/* Left Section (Text) */}
  <div className="flex-1 text-center lg:text-left ">


    <div className="2xl:text-center xl:text-center md:text-center text-start text-4xl font-sub_head">
    <p className="font-semibold mb-2">THE FIRST MONTREAL BUILDING </p>
    <p className="font-semibold ">WITH AN ENRICHING LIFESTYLE</p>
    </div>


    <div className="text-2xl my-6 2xl:text-center xl:text-center md:text-center text-start font-paragraph">
      <p>Beautiful apartments, vibrant shared apaces and </p>
      <p>concierge services. #1 in customer satisfaction.*</p>
    </div>


    <div className="2xl:ml-36 font-paragraph">
      <div className="text-lg mt-4 mb-8 2xl:text-start xl:text-center md:text-center text-start ">
    <p className="">
      In the heart of Montreal, and to the rhythm of its beat. Make your 
    </p>
    <p>
    vision come true, beacause at BRIX, the details are taken care of.
    </p>
      </div>
     
    <div className="my-4 2xl:text-start xl:text-center md:text-center text-start">
      <h1 className="text-xl mb-4">Starting from:</h1>
      <ul>
        <li className="text-lg">&gt; Studio: $1,650 (As of July)</li>
        <li className="text-lg">&gt; 1 Bedroom: $1,500 (As of August)</li>
        <li className="text-lg">&gt; 2 Bedrooms / 1 bathroom: $2,650</li>
        <li className="text-lg">&gt; 2 Bedroom / 2 bathrooms: $2,799</li>
      </ul>
    </div>

    <p className="text-lg mb-8 2xl:text-start xl:text-center md:text-center text-start">Discover our community in complete security with new health and safety measures in place. Virtual visits are also available.</p>

    <div className="flex flex-col md:items-center sm:items-center 2xl:items-start">
  <button className="bg-teal-600 w-full sm:w-96 md:w-96 2xl:w-[80%] 2xl:text-2xl px-6 py-3 sm:text-sm font-semibold md:text-xl text-white hover:bg-black duration-1000 my-4 sm:py-4 sm:px-4">
    CHECK OUT WHAT'S INCLUDED IT'S BEYOND YOUR EXPECTATIONS.
  </button>
  
  <button className="bg-black w-full sm:w-80 md:w-96 2xl:w-[80%] px-6 py-3 2xl:text-xl sm:text-lg md:text-lg font-semibold text-white hover:bg-teal-600 duration-1000 flex items-center justify-center gap-2 mt-2 ">
    <span>BOOK YOUR GUIDED TOUR TODAY!</span>
    <FaGreaterThan className="" />
  </button>
</div>


   

  </div>


  </div>

  {/* Right Section (Image Section) */}
  <div className="flex-1 grid 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 py-12">
    {/* First subsection (Single Image) */}
    <div className="flex justify-center">
      <img 
        src={Building} 
        alt="Single Image"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>

    {/* Second subsection (Two Images) */}
    <div className="grid grid-cols-1 gap-6">
      <div className="flex justify-center">
        <img 
          src={BedRoom} 
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="flex justify-center">
        <img 
          src={Dinning} 
          alt="Image 2"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>



    
  )
}

export default FirstSection
