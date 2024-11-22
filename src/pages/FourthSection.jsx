


const FourthSection = () => {
  return (
    <div className='bg-slate-900 w-full h-auto pt-8 2xl:py-16 xl:py-16 md:py-16'>
      <div className='text-center mx-10'>
        <div className='2xl:text-6xl xl:text-6xl md:text-5xl text-4xl text-white font-bold  pb-8 flex-row '>
            <p className='2xl:pb-6 xl:pb-6 md:pb-6 pb-2'>IT'S THE BIGGEST</p>
            <p className=''>RESIDENTAL GYM IN MTL</p>
        </div>
        <div className='text-white pb-8'>
            <p className='2xl:text-3xl xl:text-2xl md:text-xl text-lg'>Equipped for all your training needs, the gym features a cross fit rig, a yoga <br/> studio and a sauna.</p>
        </div>
        <div>
            <button className='2xl:text-2xl xl:text-2xl md:text-2xl text-xl py-2 px-4 bg-slate-300 hover:bg-teal-600 duration-1000'>SEE ALL AMINITIES &gt;</button>
        </div>
      </div>
      <div className=''>
      <div className="flex justify-center items-center w-full py-10">
  <div className="relative w-[90%] sm:w-[90%] ">
    <video
      className="w-full h-[10%] rounded-lg shadow-lg"
      controls
      autoPlay
      muted
      loop
    >
      <source src="/home_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

      </div>
    </div>
  )
}

export default FourthSection
