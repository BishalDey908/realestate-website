import React from 'react'
import Entertaining from "../assets/entertaining.png"
import Technology from "../assets/technology.png"
import Commuting from "../assets/commuting.png"
import Pets from "../assets/pets.png"
import Wellness from "../assets/wellness.png"
import Wellness2 from "../assets/wellness2.png"
import Working from "../assets/working.png"
import Cleaning from "../assets/cleaning.png"

const SixthSection = () => {
  return (
    <div className='bg-slate-900 w-full py-16 text-white'>
      <div className='mx-16 text-center'>
        <div className='py-6'>
          <h1 className='2xl:text-7xl xl:text-7xl md:text-7xl text-4xl text-white font-bold font-sub_head'>LIFE SIMPLIFYING SERVICES</h1>
        </div>
        <div className='mt-6'>
          <p className='2xl:text-3xl xl:text-3xl md:text-3xl text-xl text-white font-paragraph'>Apartment cleaning, dog walking,cat sitting,conference room reservation.....what <br /> do you need? BRIX residents have exclusive access to a la carte Concierge <br /> Services.
          </p>
        </div>
      </div>

      <div>
      <div className="container mx-auto py-16">
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
        {/* Logo 1 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Entertaining} alt="Entertaining" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Entertaining</h1>
        </div>
        {/* Logo 2 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Technology} alt="Technology" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Technology</h1>
        </div>
        {/* Logo 3 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Commuting} alt="Commuting" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Commuting</h1>
        </div>
        {/* Logo 4 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Pets} alt="Pets" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Pets</h1>
        </div>
        {/* Logo 5 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Wellness} alt="Wellness" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Wellness</h1>
        </div>
        {/* Logo 6 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Wellness2} alt="Wellness" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Wellness</h1>
        </div>
        {/* Logo 7 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Working} alt="Working" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Working</h1>
        </div>
        {/* Logo 8 */}
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Cleaning} alt="Cleaning" className="w-24 h-24 object-contain mb-4" />
          <h1 className="text-lg font-semibold">Cleaning</h1>
        </div>
      </div>
    </div>


      </div>
    </div>
  )
}

export default SixthSection
