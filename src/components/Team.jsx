import React from 'react'
import Image from 'next/image'
import shefs from '../../public/shefs.jpg'
import shefs1 from '../../public/shefs1.jpg'
import shefs2 from '../../public/shefs2.jpg'
import shefs3 from '../../public/shefs3.jpg'
import Head from 'next/head';

const Team = () => {
  return (
    <>  
        <Head>
            <title>Team page</title>
            <meta name="description" content="This is a team of my Next.js page." />
        </Head>
        <div className="mt-[650px] h-[600px] w-full md:mt-[0px]">
            <div className="flex flex-col justify-center items-center gap-6 mt-20">
            <div className="flex gap-5 items-center">
                <div className="h-[3px] w-16 bg-orange-500"></div>
                <h1 className="text-4xl text-orange-500">Our Team</h1>
                <div className="h-[3px] w-16 bg-orange-500"></div>
            </div>
            <h1 className="flex items-center justify-center text-5xl bg-blue-500 rounded-md h-14 w-[400px] text-center">Our Master Chefs</h1>
            <div className="grid grid-cols-1 gap-10 m-24 md:grid-cols-4">
                <div className=" flex flex-col items-center h-[300px] w-[300px] bg-slate-100 space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <Image src={shefs} alt="image" className="h-[200px] w-[200px] rounded-full mt-2"/>
                    <h1 className="text-2xl text-orange-500">Ahtisham</h1>
                    <p className="text-xl text-black">Master Chef</p>
                </div>
                <div className=" flex flex-col items-center h-[300px] w-[300px] bg-slate-100 space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <Image src={shefs1} alt="image" className="h-[200px] w-[200px] rounded-full mt-2"/>
                    <h1 className="text-2xl text-orange-500">Ali</h1>
                    <p className="text-xl text-black">Master Chef</p>
                </div>
                <div className=" flex flex-col items-center h-[300px] w-[300px] bg-slate-100 space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <Image src={shefs2} alt="image" className="h-[200px] w-[200px] rounded-full mt-2"/>
                    <h1 className="text-2xl text-orange-500">Imran</h1>
                    <p className="text-xl text-black">Master Chef</p>
                </div>
                <div className=" flex flex-col items-center h-[300px] w-[300px] bg-slate-100 space-y-3 border border-orange-400 rounded-md shadow-xl hover:bg-pink-300">
                    <Image src={shefs3} alt="image" className="h-[200px] w-[200px] rounded-full mt-2"/>
                    <h1 className="text-2xl text-orange-500">Hania</h1>
                    <p className="text-xl text-black">Master Chef</p>
                </div>
                
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Team