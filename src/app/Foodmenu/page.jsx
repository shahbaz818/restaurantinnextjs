"use client"
import React from 'react'
import Image from 'next/image'
import { GiCoffeeCup } from "react-icons/gi";
import { MdLunchDining } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { useEffect, useState } from 'react';
import axios from 'axios';

const FoodMenu = () => {
    const [items,setItems]=useState([])
    const [menu,setMenu]=useState("")

    const fetchData=async()=>{
        let res=await axios.get("https://restaurantinnextjs.vercel.app/api/food")
        console.log(res)
        setItems(res.data)
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    <div className="flex justify-center items-center h-screen w-full mt-[700px]  md:mt-[0px]">
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex justify-center items-center">
                <div className="w-28 h-1 bg-blue-500 text-3xl"></div>
                <h1 className="text-2xl text-blue-600">Food Menu</h1>
                <div className="w-28 h-1 bg-blue-500 text-3xl"></div>
            </div>
            <h1 className="text-4xl text-black">Most Popular Items</h1> 

            <div className="grid grid-cols-1 justify-center items-center text-center gap-5 md:grid-cols-3">
                <div className= "flex items-center gap-4">
                    <GiCoffeeCup style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <div className="flex flex-col space-y-3 mt-5">
                        <h1 className="text-2xl text-gray-500">Papular</h1>
                        <button onClick={()=>setMenu("Breakfast")}  className={menu === "Breakfast" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Breakfast</button>

                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <MdLunchDining style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <div className="flex flex-col space-y-3 mt-5">
                        <h1 className="text-2xl text-gray-500">Special</h1>
                        <button onClick={()=>setMenu("Lunch")} className={menu === "Lunch" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Lunch</button>

                    </div>
                </div>
                <div className="flex items-center gap-4">
                <IoFastFood style={{ color: 'orange', fontSize: '24px' }} className="h-28 w-28"/>
                    <div className="flex flex-col space-y-3 mt-5">
                        <h1 className="text-2xl text-gray-500">Lovely</h1>
                        <button onClick={()=>setMenu("Dinner")} className={menu === "Dinner" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Dinner</button>
                    </div>
                </div>
            </div>
            {/* cart section to display different foods */}
            <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
                {items.filter((item)=> menu===""?true:item.category===menu).map((item, index) => (
                    <div key={index._id} className="flex justify-center items-center gap-5">
                    <Image src={item.image} alt="" width={130} height={130} className="rounded-md"/>
                    <div className="flex flex-col screen w-[300px] md:w-[600px]">
                        <div className="flex justify-between">
                            <h1 className="text-2xl">{item.name}</h1>
                            <h1 className="text-2xl">${item.price}</h1>
                        </div>
                        <div className="h-[0.5px] w-[600px] bg-gray-400"></div>
                        <p className="text-md">{item.detail}</p>
                    </div>
                </div>

                ))}
                
                
            </div>
        </div>
    </div>
    </>
  )
}

export default FoodMenu