"use client"
import DeleteCustomer from "@/components/adminComponents/DeleteCustomer"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [listCustomer, setListCustomer] = useState([])

  const fetchData = async () => {
    let res = await axios.get("https://restaurantinnextjs.vercel.app/api/customer")
    console.log(res)
    setListCustomer(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      <h1 className='text-2xl text-blue-500 text-center m-5'>Customer List</h1>
      <div className="overflow-x-auto m-3">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Email</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time</th>
              <th className="py-3 px-4 border-b">People</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {listCustomer.map((item, index) => {
              return (
                <tr key={index._id}>

                  <td className="py-3 px-4 border-b">{item._id}</td>
                  <td className="py-3 px-4 border-b">{item.name}</td>
                  <td className="py-3 px-4 border-b">{item.email}</td>
                  <td className="py-3 px-4 border-b">{item.date}</td>
                  <td className="py-3 px-4 border-b">{item.time}</td>
                  <td className="py-3 px-4 border-b">{item.people}</td>
                  <td className="delete-cell">
                    <DeleteCustomer id={item._id} />
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

    </>

  )
}

export default Page
