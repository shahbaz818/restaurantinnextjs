import React from 'react'
import BookingTable from '../../components/BookingTable'
const BookTable = () => {
  return (
    <>
    <div className="h-screen w-full">
        <div className="grid grid-cols-1  ml-[100px] md:grid-cols-2">
          <video
            className="w-[800px] h-[735px] max-w-2xl rounded-lg shadow-lg"
            controls
            src="/restaurantvideo.mp4"
            type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        <div className="flex flex-col gap-5 ml-20 mr-20">
            <div className="flex gap-5 items-center">
                <h1 className="text-4xl text-orange-500">Reservation</h1>
                <div className="h-[3px] w-32 bg-orange-500"></div>
            </div>
            <h1 className="text-5xl">Book A Table Online</h1>
            <BookingTable/>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default BookTable