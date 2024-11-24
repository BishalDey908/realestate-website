import { FaGreaterThan } from "react-icons/fa6";
import FirstSlider from "../Components/FristSlider";

const SecondSection = () => {
  return (
//     <div className="bg-slate-900 2xl:w-full text-white">

//   <div className="mx-10 sm:mx-20 md:mx-20 2xl:mx-48 pt-16 pb-10">
//     <div className="flex flex-col md:flex-row 2xl:gap-16 sm:gap-10 md:gap-4">
//       <div className="2xl:w-[150%] sm:w-[120%] md:w-[180%] 2xl:text-7xl sm:text-4xl md:text-5xl font-semibold">
//         <h1 className="md:mb-2 ">YOUR APARTMENT.</h1>
//         <h1 className="">YOU&#39;RE HOME.</h1>
//       </div>
//       <div className="w-full sm:w-[100%] md:w-[120%]">
//         <p className="text-base sm:text-lg md:text-xl">
//           Each apartment is fully equipped with the fastest internet available for 6 appliances, and efficient heating and cooling systems. So skip ahead to the part where you make it your own.
//         </p>
//       <div className="my-8 sm:my-10 md:my-12">
//         <button className="flex bg-white text-black font-bold hover:bg-teal-600 duration-1000 px-6 py-3 sm:px-5 sm:py-2 text-lg sm:text-xl md:text-2xl">
//           <span>LOOK INSIDE</span>{" "}
//           <span className="ml-2 mt-0.5">
//             <FaGreaterThan />
//           </span>
//         </button>
//       </div>
//       </div>
//     </div>
//   </div>

//   <div>
//     <div>
//       <FirstSlider />
//     </div>
//   </div>
// </div>

<div className="bg-slate-900 w-full text-white">
  <div className="mx-10 sm:mx-20 md:mx-20 xl:mx-48 2xl:mx-60 pt-16 pb-10 ">
    <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-10 xl:gap-16">
      {/* Text Section */}
      <div className="w-full sm:w-[120%] md:w-[180%] xl:w-[140%] 2xl:w-[120%] text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-semibold font-sub_head">
        <h1 className="mb-2 md:mb-4">YOUR APARTMENT.</h1>
        <h1 className="">YOU&#39;RE HOME.</h1>
      </div>
      
      {/* Description Section */}
      <div className="w-full sm:w-[100%] md:w-[120%] font-paragraph">
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl">
          Each apartment is fully equipped with the fastest internet available for 6 appliances, and efficient heating and cooling systems. So skip ahead to the part where you make it your own.
        </p>
        
        {/* Button Section */}
        <div className="my-8 sm:my-10 md:my-12 font-head">
          <button className="flex bg-white text-black font-bold hover:bg-teal-600 duration-1000 px-6 py-3 sm:px-5 sm:py-2 text-lg sm:text-xl md:text-2xl xl:text-3xl">
            <span>LOOK INSIDE</span>{" "}
            <span className="ml-2 mt-0.5">
              <FaGreaterThan />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Slider Section */}
  <div>
    <FirstSlider />
  </div>
</div>


  );
};

export default SecondSection;
