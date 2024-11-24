import React from 'react'
import Image1 from "../assets/bedroom.jpg"

const Card = ({date,img}) => {
  return (
    

<div className="max-w-xs rounded-lg shadow text">
    <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
    </a>
    <div className="">
        <div className='py-3 flex gap-2'>
            <div className='pt-[1.5px]  text-center bg-yellow-400 w-20 font-paragraph'>
                PRESS
            </div>
            <div className='my-auto'>
                <p className='text-white font-paragraph'>{date}</p>
            </div>
        </div>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold text-white font-sub_head">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-paragraph">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>

  )
}

export default Card
