import Image from "next/image";
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import FoodManu from "@/components/FoodMenu";
import BookTable from "./BookingTable/page";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Reserve from "@/components/Reserve";
import Head from 'next/head';

export default function Home() {
  const style = {
    backgroundImage: "url('/imagebg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '800px',
    width: '100%',
    opacity: 0.7,
  };
  return (
    <>
      <Head>
  <title>Food Menu Page</title>
  <meta name="description" content="This is a Food menu of my Next.js page." />
  <meta name="viewport" content="viewport-fit=cover" />
</Head>
<div style={style} className="h-screen flex flex-col md:flex-row overflow-hidden">
  {/* Text Section */}
  <div className="flex flex-col items-center justify-center h-full w-full md:w-1/2 text-white font-bold p-5 space-y-5">
    <h1 className="text-3xl md:text-5xl text-center">Enjoy Our Delicious Meal</h1>
    <p className="text-lg md:text-2xl text-center">
      Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
      Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
    </p>
    <button className="h-12 w-full md:w-[250px] rounded-xl bg-blue-500 text-lg md:text-2xl hover:bg-blue-600 transition duration-300">
      <Reserve />
    </button>
  </div>

  {/* Image Section */}
  <div className="flex items-center justify-center h-1/2 md:h-full w-full md:w-1/2 p-5">
    <Image
      src="/pizzaa.jpg"
      width={500}
      height={500}
      alt="Rotating Image"
      objectFit="cover"
      className="rounded-full animate-rotate-slow w-full h-auto max-w-[400px] md:max-w-[500px]"
    />
  </div>
</div>


      <Services />
      <Aboutus />
      <FoodManu />
      <BookTable />
      <Team />
      <Testimonial />
    </>
  );
}
