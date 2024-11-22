import React from 'react'

const ThirdSection = () => {
  return (
//     <div className=' h-96 w-full py-10'>
//       <div className='text-center'>
//         <div className='mb-4'>
//             <h1 className='text-6xl text-black font-bold'>BEING A BRIXTER</h1>
//         </div>
//         <div className='flex place-content-center mb-4'>
//         <div className='w-[80%]'>
//             <p className='text-black text-3xl'>Built into the BTIX culture is the ongoing planning and organizing of events,<br/>shows,talks and workshops.Things are brewing! Move night,chef presentation,<br/>pop-up store,BBQ event, stand-up comedy,fitness workshop, dog behaviour<br/> conference, art workshop, wine & cheese, music jam session, and so much more </p>
//             <p className='text-black text-3xl'>This is what it means to be a Brixter</p>
//         </div>
//         </div>

//         <div>
//             <button className="text-2xl py-2 px-4 bg-teal-600 text-white hover:bg-black duration-1000">RENT@BRIX &gt;</button>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-full bg-slate-400 h-96">
//   <div className="relative w-[80%] h-auto" style={{ paddingBottom: "56.25%" }}>
//     <iframe
//       className="absolute top-0 left-0 w-full h-full"
//       src="https://www.youtube.com/embed/dECxLXuEafE"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   </div>
// </div>

//     </div>


<div className="w-full py-20 bg-white">
  {/* Header Section */}
  <div className="text-center">
    <div className="mb-4">
      <h1 className="text-6xl text-black font-bold">BEING A BRIXTER</h1>
    </div>
    <div className="flex justify-center mb-8">
      <div className="2xl:w-[80%] xl:w-[80%] md:w-[90%] w-[90%]">
        <p className="text-black 2xl:text-3xl xl:text-3xl md:text-lg text-lg leading-relaxed">
          Built into the BTIX culture is the ongoing planning and organizing of events,
         <br/> shows, talks, and workshops. Things are brewing! Movie night, chef presentation,<br/>
          pop-up store, BBQ event, stand-up comedy, fitness workshop, dog behavior<br/>
          conference, art workshop, wine & cheese, music jam session, and so much more.
        </p>
        <p className="text-black 2xl:text-3xl xl:text-3xl md:text-lg text-lg  ">
          This is what it means to be a Brixter.
        </p>
      </div>
    </div>

    {/* Button Section */}
    <div>
      <button className="text-2xl py-3 px-6 bg-teal-600 text-white  hover:bg-black transition-all duration-1000 ">
        RENT@BRIX &gt;
      </button>
    </div>
  </div>

  {/* Video Section */}
  <div className="flex justify-center items-center w-full mt-10">
  <div
    className="relative 2xl:w-[90%] xl:w-[90%] md:w-[90%] h-0 w-[90%] sm:pb-[40.25%] pb-[56.25%]"
  >
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/6dwJNZcUJB4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

</div>



  )
}

export default ThirdSection
