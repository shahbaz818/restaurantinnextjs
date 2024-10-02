import React from 'react'
import Image from 'next/image'
import restaurant1 from '../../public/restaurant1.jpg'
import restaurant2 from '../../public/restaurant2.jpg'
import { RiRestaurantFill } from "react-icons/ri";

const Aboutus = () => {
  return (
    <>
      <div className="m-6 h-screen w-[1800px] mt-[110px]">
        <div className="grid grid-cols-1 h-screen w-full md:grid-cols-2">
          <div className="flex flex-col h-[500px] w-[300px] ml-32 md:w-[650px]">
            <div className="flex space-x-3">
              <Image src={restaurant1} alt="image not show" height={500} width={400} className="rounded-sm " />
              <div className="flex-shrink-0">
                <Image
                  src={restaurant2}
                  alt="Small Image"
                  width={300}
                  height={400}
                  className="object-cover mt-44"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-4">

              <div className="flex-shrink-0 ml-[100px]">
                <Image
                  src={restaurant2}
                  alt="Small Image"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <Image src={restaurant1} alt="image" height={500} width={400} className="rounded-sm" />
            </div>
          </div>
          <div className="flex flex-col mt-[200px] ml-[200px] h-[600px] w-[300px] text-xl md:w-[600px] md:mt-[0px]">
            <h1 className="text-4xl text-blue-600">About US ----</h1>
            <div className="flex text-5xl mt-6 text-black text-bold">
              <h1>Welcome To</h1>
              <RiRestaurantFill style={{ color: 'brown', fontSize: '24px' }} className="h-20 w-20" />
              <h1>Restauran</h1>
            </div>
            <p className="text-gray-400">
              Service at Outclass is impeccable, with attentive staff who anticipate your needs without being intrusive. The restaurant boasts an extensive wine list, showcasing selections from renowned vineyards around the world. Each dish is a testament to the chef’s creativity, blending bold flavors with elegant presentation.
              Guests rave about the unique dining experience, often highlighting the perfect balance between innovation and tradition. Whether you’re celebrating a special occasion or simply indulging in a fine meal, Outclass Restaurant promises a memorable experience that exceeds expectations.
            </p>

            <div className="flex items-center h-screen w-full mt-20 space-x-12">
              <div className="w-2 h-28 bg-yellow-500"></div>
                <div className="flex justify-center items-center h-20 w-[200px]">
                  <h1 className="text-5xl text-blue-600">10</h1>
                  <div className="h-20 w-[160px] space-x-4 mt-4 text-2xl">
                    <h1 className="ml-3">Years Of</h1>
                    <h1>Experience</h1>
                  </div>
                </div>

                <div className="w-2 h-28 bg-yellow-500"></div>
                  <div className="flex justify-center items-center h-20 w-[200px]">
                    <h1 className="text-5xl text-blue-600">20</h1>
                    <div className="h-20 w-[160px] space-x-4 mt-4 text-2xl">
                      <h1 className="ml-3">Master</h1>
                      <h1>Shefs</h1>
                    </div>
                  </div>
                 
              </div>
              <button className="h-[100px] w-[170px] rounded-lg shadow-xl bg-yellow-500 mt-16">Read More</button>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Aboutus