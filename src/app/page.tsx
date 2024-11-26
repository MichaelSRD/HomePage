"use client"
import Image from "next/image";
import { Poppins } from "next/font/google"
import { MenuMobile } from "./components/menumobile";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900']
})

export default function Home() {
   
  return (
    <div className={`${poppins.className} grid p-4 md:px-16 `}>
     <header className="flex justify-between items-center">
      <div className="dark:text-white text-3xl  font-bold text-[#111729]">
        Alarado
      </div>
      <MenuMobile />
     </header>
      <main className=" md:grid md:grid-cols-2 mt-10 ">
        <div className="flex justify-center col-start-2 ">
          <Image src={"/hero-image-simple-homepage.png"} layout="responsive" alt="" width={600} height={600} className=" object-contain w-full h-auto " priority />
        </div>
        <div className="md:col-start-1 md:row-start-1">
          <p className="text-[#111729] font-medium my-5 dark:text-white ">😎 Simple way to communicate</p>
          <h1 className="lg:leading-[5.7rem] md:text-[70px] leading-[4rem]  text-4xl pr-16 font-bold text-[#223344] pb-4 dark:text-white">Actions for Accessibility in Design</h1>
          <p className="md:text-[#223344] text-lg text-[#909193] dark:text-white ">The fastest way to build and deploy websites with reusable components.</p>
          <div className="grid  gap-4 items-center mt-4  grid-cols-[max-content_max-content]">
            <div className="bg-[#2A4DD0] text-white rounded-lg w-max  px-4 py-2 font-bold ">
            <p>GET STARTED</p>
            </div>
            
            <p className="text-[#2A4DD0] underline underline-offset-8 font-semibold dark:text-white ">Get live demo</p>
            <div  className=" dark:text-white flex items-center  text-sm mt-4 space-x-2 text-[#909193] md:text-[#223344]">
              <Image src={"/Done_ring_round_fill.svg"} alt={""} width={30} height={30}/>
              <p>No credit card required</p>
            </div>
            <div  className=" dark:text-white flex items-center text-sm mt-4 space-x-2 text-[#909193] md:text-[#223344]">
              <Image src={"/Done_ring_round_fill.svg"} alt={""} width={30} height={30}/>
              <p>No software to install</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
