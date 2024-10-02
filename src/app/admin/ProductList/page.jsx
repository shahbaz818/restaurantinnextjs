"use client"
import DeleteProduct from "@/components/adminComponents/DeleteProduct"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [listProduct, setListProduct] = useState([])

  const fetchData = async () => {
    let res = await axios.get("http://localhost:3000/api/food")
    console.log(res)
    setListProduct(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

<h1 className='text-2xl text-blue-500 text-center m-5'>Product List</h1>
      <div className="overflow-x-auto m-3">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Category</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((item, index) => {
              return (
                <tr key={index._id}>

                  <td className="py-3 px-4 border-b">{item._id}</td>
                  <td className="py-3 px-4 border-b">{item.name}</td>
                  <td className="py-3 px-4 border-b">{item.price}</td>
                  <td className="py-3 px-4 border-b">{item.category}</td>
                  <td className="delete-cell">
                    <DeleteProduct id={item._id} />
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
