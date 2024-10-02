"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
const BookTable = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [date,setDate]=useState("")
    const [time,setTime]=useState("")
    const [people,setPeople]=useState("")
    const [message,setMessage]=useState("")

    const router=useRouter()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        // console.log(name,email,date,time,people,message)
        const response=await fetch("http://localhost:3000/api/customer",{
            method:"POST",
            body:JSON.stringify({name,email,date,time,people,message}),
            headers:{
                "Content-Type":"application/json",
            },
        })
        const result = await response.json();
        console.log(result)
        if(result.success){
            toast.success("Booked Successfully")
        }else{
            toast.error("Failed to book")
        }
    }
  return (
    <>
            <form>
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="time" class="block text-sm font-medium text-gray-700">Time</label>
                <input type="time" id="time" name="time" value={time} onChange={(e)=>setTime(e.target.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" required/>
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700">Select People</label>
                <select name="people" onClick={(e)=>setPeople(e.target.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500">
                    <option value="people1">Person 1</option>
                    <option value="people2">Person 2</option>
                    <option value="people3">Person 3</option>
                    <option value="people4">Person 4</option>
                    <option value="people5">Person 5</option>
                    <option value="people6">Person 6</option>
                    <option value="people7">Person 7</option>
                    <option value="people8">Person 8</option>
                </select>
            </div>

            <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" onClick={handleSubmit} class="w-full bg-orange-600 text-white text-2xl p-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
           
            
        </form>
    </>
  )
}

export default BookTable