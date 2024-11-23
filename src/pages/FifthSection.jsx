import React from 'react'
import SecondSlider from '../Components/SecondSlider'
import SixthSection from './SixthSection'
import SeventhSection from './SeventhSection'

const FifthSection = () => {
    
  return (
    <div className=' w-full h-96 py-16 '>
      <div className='text-center 2xl:px-16 xl:px-16 md:px-16 px-8'>
        <div>
            <h1 className='2xl:text-7xl xl:text-7xl md:text-6xl text-5xl font-bold text-black'>BUILDING COMMUNITY</h1>
        </div>
        <div className='my-6 '>
            <p className='2xl:text-3xl xl:text-3xl md:text-2xl text-xl 2xl:text-center xl:text-center md:text-left text-center'>For neighbours and friends these spaces were built to speak connections.Summer <br/> sunset on the rooftop, movie nights, dinner parties some things are best shared</p>
        </div>
        <div>
            <button className='bg-teal-600 py-2 px-4 text-2xl text-white hover:bg-black duration-1000'>THE BUILDING &gt;</button>
        </div>
      </div>
      <div>
      <div className=" w-full h-96 md:h-32 sm:h-24">
      <SecondSlider />
      <div className=' text-center 2xl:px-16 xl:px-16 md:px-16  pt-8 pb-16'>
        <div>
            <h1 className='2xl:text-7xl xl:text-7xl md:text-6xl text-5xl font-bold text-black '>(UN)COMMON SPACES</h1>
        </div>
        <div className='my-6 px-6'>
            <p className='2xl:text-3xl xl:text-3xl md:text-2xl text-lg 2xl:text-center xl:text-center md:text-left text-center'>Your apartment is your sanctuary, the whole building is your home. All 20,000 <br /> square feet of its shared spaces. Enjoy the gorgeous green backyard, inspering <br /> space to work, relax, have fun, cook, or host guests</p>
        </div>
        <div>
            <button className="bg-teal-600 py-2 px-4 text-2xl text-white hover:bg-black duration-1000">SPACES &gt;</button>
        </div>
    </div>

    <SixthSection/>
    <SeventhSection/>
    </div>

      </div>
    
    </div>
  )
}

export default FifthSection
