import React from 'react'
import Image from 'next/image';

const page = () => {
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
    <div style={style} className="h-screen width-full">
      <h1 className="flex justify-center mt-[200px] text-white text-4xl text-bold">Wellcome to Admin Panel</h1>
    </div>
    </>
  )
}

export default page