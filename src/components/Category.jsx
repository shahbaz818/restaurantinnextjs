"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
    const [food,setFood]=useState([])
        const fetchData=async()=>{
            let res=await fetch("https://restaurantinnextjs.vercel.app/api/food")
            const data=await res.json()
            console.log(data)
            setFood(data)
            
        }
        useEffect(()=>{
            fetchData()
        },[])
   
  return (
    <>
    
    </>
  )
}

export default Category