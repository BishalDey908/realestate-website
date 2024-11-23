import React from 'react'
import Person1 from "../assets/person1.jpg"
import Person2 from "../assets/person1.jpg"
import Person3 from "../assets/person1.jpg"
import Person4 from "../assets/person1.jpg"
import Person5 from "../assets/person1.jpg"

const ReviewSlider = () => {
  return (
<div className="2xl:w-full xl:w-[80%] md:w-full overflow-hidden py-16 relative">
  <div className="flex animate-carousel space-x-4 md:space-x-6 lg:space-x-8 ">
    {/* Review 1 */}
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 max-w-full md:max-w-[50%] lg:max-w-[33.33%] bg-slate-900 shadow-md p-4 lg:p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={Person1}
          alt="John Doe"
          className="w-12 h-12 rounded-full"
        />
        <div className='flex-row'>
          <h4 className="font-semibold text-white">
            - John Doe
            <span className="text-yellow-500 text-sm ml-2">
              ★★★★★
            </span>
          </h4>
        </div>
      </div>
      <p className="mt-4 text-white italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis quia? Quae, vel! Nesciunt pariatur atque rem, incidunt nisi sunt eveniet magnam aliquam a doloremque iste. Saepe vero maxime similique distinctio reiciendis dicta iste, suscipit ipsa sit ut ipsum laboriosam exercitationem delectus. Nobis beatae nihil voluptatem in, obcaecati consequuntur minus iste perspiciatis, fugiat vel facilis.
      </p>
    </div>
    {/* Review 2 */}
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 max-w-full md:max-w-[50%] lg:max-w-[33.33%] bg-slate-900 shadow-md p-4 lg:p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={Person2}
          alt="Jane Smith"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-white">
            - Jane Smith
            <span className="text-yellow-500 text-sm ml-2">
              ★★★★★
            </span>
          </h4>
        </div>
      </div>
      <p className="mt-4 text-white italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis quia? Quae, vel! Nesciunt pariatur atque rem, incidunt nisi sunt eveniet magnam aliquam a doloremque iste. Saepe vero maxime similique distinctio reiciendis dicta iste, suscipit ipsa sit ut ipsum laboriosam exercitationem delectus. Nobis beatae nihil voluptatem in, obcaecati consequuntur minus iste perspiciatis, fugiat vel facilis.
      </p>
    </div>
    {/* Review 3 */}
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 max-w-full md:max-w-[50%] lg:max-w-[33.33%] bg-slate-900 shadow-md p-4 lg:p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={Person3}
          alt="Alex Johnson"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-white">
            - Alex Johnson
            <span className="text-yellow-500 text-sm ml-2">
              ★★★★★
            </span>
          </h4>
        </div>
      </div>
      <p className="mt-4 text-white italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis quia? Quae, vel! Nesciunt pariatur atque rem, incidunt nisi sunt eveniet magnam aliquam a doloremque iste. Saepe vero maxime similique distinctio reiciendis dicta iste, suscipit ipsa sit ut ipsum laboriosam exercitationem delectus. Nobis beatae nihil voluptatem in, obcaecati consequuntur minus iste perspiciatis, fugiat vel facilis.
      </p>
    </div>
    {/* Review 4 */}
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 max-w-full md:max-w-[50%] lg:max-w-[33.33%] bg-slate-900 shadow-md p-4 lg:p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
         src={Person4}
          alt="Chris Lee"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-white">
            - Chris Lee
            <span className="text-yellow-500 text-sm ml-2">
              ★★★★★
            </span>
          </h4>
        </div>
      </div>
      <p className="mt-4 text-white italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis quia? Quae, vel! Nesciunt pariatur atque rem, incidunt nisi sunt eveniet magnam aliquam a doloremque iste. Saepe vero maxime similique distinctio reiciendis dicta iste, suscipit ipsa sit ut ipsum laboriosam exercitationem delectus. Nobis beatae nihil voluptatem in, obcaecati consequuntur minus iste perspiciatis, fugiat vel facilis.
      </p>
    </div>
    {/* Review 5 */}
    <div className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 max-w-full md:max-w-[50%] lg:max-w-[33.33%] bg-slate-900 shadow-md p-4 lg:p-6 rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          src={Person5}
          alt="Sarah Parker"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-white">
            - Sarah Parker
            <span className="text-yellow-500 text-sm ml-2">
              ★★★★★
            </span>
          </h4>
        </div>
      </div>
      <p className="mt-4 text-white italic">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis quia? Quae, vel! Nesciunt pariatur atque rem, incidunt nisi sunt eveniet magnam aliquam a doloremque iste. Saepe vero maxime similique distinctio reiciendis dicta iste, suscipit ipsa sit ut ipsum laboriosam exercitationem delectus. Nobis beatae nihil voluptatem in, obcaecati consequuntur minus iste perspiciatis, fugiat vel facilis.
      </p>
    </div>
  </div>
</div>


  )
}

export default ReviewSlider
