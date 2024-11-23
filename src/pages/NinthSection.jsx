import React from 'react'
import ReviewSlider from '../Components/ReviewSlider'

const NinthSection = () => {
  return (
    <div className='flex place-content-center py-8'>
    <div className='2xl:px-16 xl:px-16 md:px-16 px-7 w-full py-10'>
        <div className='2xl:flex xl:flex md:flex-row flex-row place-content-center gap-28'>
            <div className='2xl:text-6xl xl:text-5xl md:text-6xl text-5xl font-bold'>
                <h1>TEANT REVIEWS</h1>
            </div>
            <div>
                <p className='2xl:mt-0 xl:mt-0 md:mt-4 mt-3 2xl:text-xl xl:text-3xl md:text-lg text-lg'>Our tenants are super happy with the community here at BRIX.Did you know, <br />BRIX has a tenant rating of 4.7/5 overall for staff and services? But don&apos;t just take <br />our word for it.... </p>
            </div>
        </div>
        <div>
      <ReviewSlider/>
        </div>
    </div>
    </div>
  )
}

export default NinthSection
