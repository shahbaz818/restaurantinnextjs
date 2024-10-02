import React from 'react'
import Image from 'next/image'
import customer from '../../public/customer.jpg'
import customer1 from '../../public/customer1.jpg'
import customer2 from '../../public/customer2.jpg'
import Head from 'next/head';
import { DiYeoman } from "react-icons/di";

const Testimonial = () => {
  return (
    <>
        <Head>
            <title>Testimonial page</title>
            <meta name="description" content="This is a Testimonial of my Next.js page." />
        </Head>
        <div className="mt-[1100px] h-screen w-full md:mt-[0px]">
            <div className="flex flex-col justify-center items-center gap-6 mt-20">
            <div className="flex gap-5 items-center">
                <div className="h-[3px] w-16 bg-orange-500"></div>
                <h1 className="text-4xl text-orange-500">Our Client</h1>
                <div className="h-[3px] w-16 bg-orange-500"></div>
            </div>
            <h1 className="flex items-center justify-center text-5xl bg-blue-500 rounded-md h-14 w-[400px] text-center">Our Clients Say!!!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-24">
                <div className=" flex flex-col h-[450px] w-[400px] space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <DiYeoman style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <h1 className="text-md font-bold text-gray-400 ml-2">The seasonal menu featured dishes bursting with fresh flavors, and the roasted beet salad was a standout. Service was attentive without being intrusive. I highly recommend their house-made pasta it was perfectly
                         cooked and rich in flavor. Overall, a delightful spot</h1>
                    <div className="flex justify-center items-center m-12">
                        <Image src={customer} alt="Shefs" className="h-[120px] w-[120px] rounded-full "/>
                        <div className="flex flex-col items-center ml-4 gap-4">
                            <h1 className="text-2xl font-bold text-orange-400">Samuel</h1>
                            <p className="text-lg text-gray-800">From America</p>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col h-[450px] w-[400px] space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <DiYeoman style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <h1 className="text-md font-bold text-gray-400 ml-2">The ambiance is warm and inviting, perfect for both romantic dinners and lively gatherings. Their wood-fired pizzas are a must-try, boasting a perfectly crispy crust and fresh, vibrant toppings. 
                        I was particularly impressed with the homemade pasta.</h1>
                    <div className="flex m-12 justify-center items-center">
                        <Image src={customer1} alt="Shefs" className="h-[120px] w-[120px] rounded-full "/>
                        <div className="flex flex-col items-center ml-4 gap-4">
                            <h1 className="text-2xl font-bold text-orange-400">Sheraz Khan</h1>
                            <p className="text-lg text-gray-800">From Pakistan</p>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col h-[450px] w-[400px] space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <DiYeoman style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <h1 className="text-md font-bold text-gray-400 ml-2">The flavors were incredible! Each dish was beautifully presented and tasted even better than it looked.I was particularly impressed with the homemade pasta. The service was friendly and
                     attentive. Fresh, vibrant toppings. I cant wait to come back for more</h1>
                    <div className="flex justify-center items-center m-12">
                        <Image src={customer2} alt="Shefs" className="h-[120px] w-[120px] rounded-full "/>
                        <div className="flex flex-col items-center ml-4 gap-4">
                            <h1 className="text-2xl font-bold text-orange-400">Siddharth</h1>
                            <p className="text-lg text-gray-800">From India</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Testimonial