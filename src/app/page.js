import Image from "next/image";
import Services from "@/components/Services";
import Aboutus from "@/components/Aboutus";
import FoodManu from "@/components/FoodMenu";
import BookTable from "./BookingTable/page";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Reserve from "@/components/Reserve";

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
     <div style={style} className="h-screen w-full flex flex-col md:flex-row">
  {/* Text Section */}
  <div className="flex flex-col items-center justify-center h-screen w-full md:w-1/2 text-white font-bold p-5 space-y-5">
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
  <div className="flex items-center justify-center h-1/2 md:h-screen w-full md:w-1/2 p-5">
    <Image
      src="/pizzaa.jpg"
      width={500}
      height={500}
      alt="Rotating Image"
      objectFit="cover"
      className="rounded-full animate-rotate-slow w-3/4 h-auto md:w-[500px] md:h-[500px]"
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
