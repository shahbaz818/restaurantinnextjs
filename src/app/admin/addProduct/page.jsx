'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
  const [name,setName]=useState("")
  const [image,setImage]=useState("")
  const [price,setPrice]=useState("")
  const [detail,setDetail]=useState("")
  const [category,setCategory]=useState("breakfast")
  const handleChange=async(e)=>{
    e.preventDefault()
    console.log(name,image,price,detail,category);
    const res=await fetch("http://localhost:3000/api/food",{
      method:"POST",
      body: JSON.stringify({name,image,price,detail,category }),
      headers:{
        "Content-Type":"application/json",
      },
    })
    const result = await res.json();
    if (result.success) {
      toast.success('Product Added successfully!');
    } else {
      toast.error('Product Add process fail!');
    }
    
  }

  const style = {
    backgroundImage: "url('/adminbg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%', 
    width: '100%',  
    opacity:0.7,
  };

  return (
   <>
   <div className='bg-slate-100 h-full' style={style} >
    <div className='flex flex-col justify-center items-center ml-20 mt-20'>
    <h1 className='text-4xl text-blue-500'>Add Blog</h1>
    <form >
      <div className='flex flex-col gap-2'>
      <label className='mt-2 text-white text-xl'>Name</label>
      <input type="text" name='title' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Add Title' className='outline h-10 w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 text-white text-xl'>Image</label>
      <input type="text" name='image' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Add Title' className='outline h-10 w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 text-white text-xl'>Price</label>
      <input type="number" name='price' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Add Title' className='outline h-10 w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 text-white text-xl'>Detail</label>
      <textarea placeholder='Add Title' rows={6} name='description' value={detail} onChange={(e)=>setDetail(e.target.value)}  className='outline w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 text-white text-xl'>Category</label>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}  className='mt-1 h-10 w-[120px] outline'>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <button className='mt-4 bg-blue-600 h-10 w-[120px] rounded-md text-xl' onClick={handleChange}>Add Product</button>

      </div>
      
    </form>
    </div>
   
   </div>
   
   </>
  )
}

export default Page