import React from 'react'
import Card from '../Components/Card'
import Travelling from "../assets/trave.jpg"
import People from "../assets/people.jpg"
import Building from "../assets/buildings.jpg"
import Consert from "../assets/consert.jpg"

const EighthSection = () => {
  return (
    <div className='bg-slate-900 w-full h-auto pb-8 px-4'>
      <div className='py-8 '>
        <h1 className='text-center text-white text-6xl font-bold font-sub_head'>LIFE @BRIX</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        <Card date="APRIL 29, 2024" img={Travelling}/>
        <Card date="MARCH 12, 2024" img={People}/>
        <Card date="May 19, 2024" img={Building}/>
        <Card date="JUN 20, 2024" img={Consert}/>
      </div>
    </div>
  )
}

export default EighthSection
