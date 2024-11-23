import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [checker, setChecker] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Side Menu */}
      {checker && (
        <div
          className={`w-72 2xl:h-[90%] lg:h-[90%] md:h-[100%] h-[100%] py-10 fixed right-0 bg-slate-300 z-50 text-gray-800 shadow-lg shadow-gray-500 ${
            checker ? "animate-slideIn" : ""
          }`}
        >
          <div className="mt-1">
            <MdClose
              className="text-5xl fixed right-4 cursor-pointer"
              onClick={() => setChecker(!checker)}
            />
          </div>
          <div className="flex gap-6 justify-center">
            <div className="text-6xl mt-14 text-center font-extrabold">BRIX</div>
          </div>

          <div className="my-12">
            <ul className="text-center flex-row text-xl font-semibold gap-10 cursor-pointer">
              <li className="my-4 hover:text-teal-600 duration-300">APARTMENTS</li>
              <li className="my-4 hover:text-teal-600 duration-300">SHARED SPACES</li>
              <li className="my-4 hover:text-teal-600 duration-300">BUILDING</li>
              <li className="my-4 hover:text-teal-600 duration-300">LIFE @BRIX</li>
              <li className="my-4 hover:text-teal-600 duration-300">NEIGHBOURHOOD</li>
              <li className="my-4 hover:text-teal-600 duration-300">
                CONCIERGE SERVICES
              </li>
              <li className="my-4 hover:text-teal-600 duration-300">ART @BRIX</li>
              <button className="my-2 hover:bg-gray-800 bg-teal-600 px-4 py-3 text-white duration-300 border-none text-xl font-semibold">
                RENT @BRIX
              </button>
              <li className="my-4 hover:text-teal-600 duration-300">CONTACT US</li>
            </ul>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div
        className={`px-14 fixed w-full h-[10%] z-40 transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-800 text-white shadow-md"
            : "bg-transparent text-gray-200"
        }`}
      >
        <div className="flex justify-between items-center h-full">
          <h1 className="text-7xl font-extrabold font-sans">BRIX</h1>

          <div className="2xl:w-[45%] xl:w-[75%]  py-4">
            <ul className="flex items-center justify-between 2xl:text-2xl xl:text-lg md:text-xl text-sm font-semibold gap-4 ">
              <li className="hover:bg-teal-600 hover:py-2 hover:px-4 duration-500 2xl:block lg:block md:hidden hidden">
                RENT@BRIX
              </li>
              <li className="hover:bg-teal-600 hover:py-2 hover:px-4 duration-500 2xl:block lg:block md:hidden hidden">
                +1 514800-2558
              </li>
              <li className="bg-teal-600 py-2 px-4 hover:bg-gray-800 duration-300 2xl:block lg:block md:hidden hidden">
                BOOK NOW!
              </li>
              <li className="hover:bg-black hover:py-2 hover:px-2 duration-500 rounded-full 2xl:block lg:block md:hidden hidden">
                EN
              </li>
              <li className="2xl:block lg:block md:hidden hidden">
                <IoReorderThree
                  className="text-5xl cursor-pointer "
                  onClick={() => setChecker(!checker)}
                />
              </li>

              <li className="2xl:hidden lg:hidden md:block block fixed right-4">
                <IoReorderThree
                  className="text-5xl cursor-pointer "
                  onClick={() => setChecker(!checker)}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Navbar;
