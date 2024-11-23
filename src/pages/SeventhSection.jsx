import React from 'react'
import FirstImage from "../assets/nature.jpg"
import SectionImage from "../assets/nature2.jpg"
import EighthSection from './EighthSection'
import NinthSection from './NinthSection'


const SeventhSection = () => {
  return (
    <>
    <div className=' w-full h-auto text-black pt-16 px-4 '>
      <div className='text-center'>
        <div>
            <h1 className='2xl:text-7xl xl:text-7xl md:text-6xl text-5xl font-bold'>YOUR KEY TO THE CITY</h1>
        </div>
        <div>
            <p className='2xl:text-3xl xl:text-3xl md:text-3xl text-lg my-6'>Location,location,location.BRIX is on the axis between work and play a <br />peaceful oasis in the certre of the action.</p>
        </div>
        <div>
            <button className='bg-teal-600 py-2 px-4 text-2xl font-bold text-white hover:bg-black duration-1000'>THE NEIGHOURHOOD &gt;</button>
        </div>
      </div>

      
      <div className="flex w-full justify-center py-16">
  <div className="flex flex-col md:flex-row w-[90%] space-y-8 md:space-y-0 md:space-x-8">
    {/* Image 1 */}
    <img 
      src={FirstImage} 
      alt="Image 1" 
      className="w-full md:w-[50%] max-h-[100vh] object-cover" 
    />
    {/* Image 2 */}
    <img 
      src={SectionImage} 
      alt="Image 2" 
      className="w-full md:w-[50%] max-h-[100vh] object-cover" 
    />
  </div>
</div>    
    </div>
  <EighthSection/>
  <NinthSection/>
    </>
  )
}

export default SeventhSection
