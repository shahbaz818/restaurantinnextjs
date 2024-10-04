"use client"
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import  Link from 'next/link'
import Recaptcha from '@/components/Recaptcha'

const Login = () => {
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    const [loading,setLoading]=useState(false)
    const router = useRouter()

    const login=async()=>{
        try {
            setLoading(true)
            const response = await axios.post('https://restaurantinnextjs.vercel.app/api/user/login',user)
            console.log("Login Successfully", response.data);
            router.push('/')

        } catch (error) {
            alert("cant login")
            
            
        }

    }
  return (
    <>
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h1 className="text-xl text-gray-600 text-center">{loading? "Processing" : "Login Form!"}</h1>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              required
              value={user.email}
              onChange={(e)=>setUser({...user, email:e.target.value})}
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password:e.target.value})}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
            >
              Forget Password?
            </a>
          </div>
          <Recaptcha/>
          <div className="mt-8">
            <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            onClick={login}>
              Login
            </button>
          </div>
          
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <Link href='/signup'><span className="text-blue-700"> Sign Up</span></Link>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login