import React from 'react'
import { IoIosMan } from "react-icons/io";
import { RiRestaurantFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Head from 'next/head';




const Services = () => {
    return (
        <>
            <Head>
                <title>Services page</title>
                <meta name="description" content="This is a services of my Next.js page." />
                <meta name="viewport" content="viewport-fit=cover" />
            </Head>
            <div className="">
            <div className="h-screen w-[300px] items-center overflow-hidden md:w-auto md:overflow-hidden mt-[250px] md:ml-10 ">
                <h1 className=" text-center text-5xl text-blue-500">----Our Services----</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 w-[1450px] mx-auto mt-10 gap-4 px-4">
                    <div className="h-[450px] w-[300px] md:w-[350px] p-4 bg-white border border-gray-200 hover:bg-pink-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <IoIosMan style={{ color: 'brown', fontSize: '24px' }} className="h-20 w-20 mx-auto" />
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Master Chefs</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-800 text-lg dark:text-gray-400 text-center">Master chefs craft symphonies of flavor, where every dish tells a story. With passion as their secret ingredient, they transform simple ingredients into culinary masterpieces.</p>
                    </div>

                    <div className="h-[450px] w-[300px] md:w-[350px] p-4 bg-white border border-gray-200 hover:bg-pink-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <RiRestaurantFill style={{ color: 'brown', fontSize: '24px' }} className="h-20 w-20 mx-auto" />
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Quality Food</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-800 text-lg dark:text-gray-400 text-center">Quality food delights the senses and nourishes the soul, blending fresh ingredients with careful preparation. Every bite offers a harmony of taste and texture, elevating the dining experience to a celebration of life.</p>
                    </div>

                    <div className="h-[450px] w-[300px] md:w-[350px] p-4 bg-white border border-gray-200 hover:bg-pink-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaShoppingCart style={{ color: 'brown', fontSize: '24px' }} className="h-20 w-20 mx-auto" />
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Online Order</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-800 text-lg dark:text-gray-400 text-center">Enjoy the convenience of high-quality meals delivered straight to your door—fresh, flavorful, and ready to savor. Simply order online and experience gourmet dining without leaving home.</p>
                    </div>

                    <div className="h-[450px] w-[300px] md:w-[350px] p-4 bg-white border border-gray-200 hover:bg-pink-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <RiCustomerService2Fill style={{ color: 'brown', fontSize: '24px' }} className="h-20 w-20 mx-auto" />
                        <a href="#">
                            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">24/7 Services</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-800 text-lg dark:text-gray-400 text-center">Our 24/7 service ensures you are never left waiting, with support and solutions available any time of day or night. Count on us for reliable assistance whenever you need it.</p>
                    </div>
                </div>
            </div>

            </div>
            
        </>
    )
}

export default Services