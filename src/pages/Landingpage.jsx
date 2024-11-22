import BgImage from '../assets/timothy-buck-psrloDbaZc8-unsplash.jpg';

const Landingpage = () => {
  return (
    <>
    <div className="h-[80vh] relative z-20 w-full overflow-hidden group cursor-pointer">
  {/* Background Image */}
  <img
    src={BgImage}
    alt="bgImage"
    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 animate-zoom"
  />

  {/* Paragraph over the image */}
  <div className="absolute top-1/2 mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 sm:px-6 w-full max-w-lg sm:max-w-2xl md:max-w-4xl 2xl:hidden lg:hidden md:block block ">
  <div className="bg-black bg-opacity-50 p-2 rounded-lg">
    
    <ul className="flex flex-col gap-4 text-lg font-semibold">
      <li className="hover:text-teal-600 duration-300">APARTMENTS</li>
      <li className="hover:text-teal-600 duration-300">SHARED SPACES</li>
      <li className="hover:text-teal-600 duration-300">BUILDING</li>
      <li className="hover:text-teal-600 duration-300">LIFE @BRIX</li>
      <li className="hover:text-teal-600 duration-300">NEIGHBOURHOOD</li>
      <li className="hover:text-teal-600 duration-300">CONCIERGE SERVICES</li>
      <li className="hover:text-teal-600 duration-300">ART @BRIX</li>
      <button className="my-2 hover:bg-gray-800 bg-teal-600 px-4 py-3 text-white duration-300 border-none text-xl font-semibold">
        RENT @BRIX
      </button>
      <li className="hover:text-teal-600 duration-300">CONTACT US</li>
    </ul>
  </div>
</div>

</div>

    </>
  );
};

export default Landingpage;
