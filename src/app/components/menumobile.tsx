import Image from "next/image"
import { useState } from "react"
import { DarkMode } from "./darkMode";

export function MenuMobile(){


    const [isOpen,setIsOpen] = useState(false);
    
    return(
        <>
        <div className="">
      <ul className=" hidden md:flex space-x-9 text-[#111729] text-xl font-medium dark:text-white ">
             <li className="hover:text-[#2A4DD0]  dark:hover:text-white hover:underline hover:underline-offset-4 cursor-pointer ">About us</li>
             <li className="hover:text-[#2A4DD0] dark:hover:text-white  hover:underline hover:underline-offset-4 cursor-pointer ">Product</li>
             <li className="hover:text-[#2A4DD0] dark:hover:text-white  hover:underline hover:underline-offset-4 cursor-pointer ">Resource</li>
             <li className="hover:text-[#2A4DD0] dark:hover:text-white  hover:underline hover:underline-offset-4 cursor-pointer ">Contact</li>
         </ul>
      </div>
      <div className=" hidden md:block ">
      <DarkMode/>
      </div>
       
       <div className="md:hidden cursor-pointer " onClick={()=>setIsOpen(true)}>
        <Image src={"/hamburger-button.svg"} alt={""} width={40} height={40}/>
      </div>
      
      {isOpen && (
         <div className="bg-white fixed right-0 grid w-[60%] top-0 min-h-screen justify-items-center justify-center items-baseline text-center   ">
         <div className="top-6 absolute right-5 cursor-pointer " onClick={()=>setIsOpen(false)} >
             <Image src={"/close-button.svg"} alt="" width={30} height={30}/>
         </div>
         <ul className=" items-end  space-y-14 text-[#909193] text-2xl font-medium mt-24">
             <li className="hover:text-[#2A4DD0] hover:underline hover:underline-offset-4 cursor-pointer ">About us</li>
             <li className="hover:text-[#2A4DD0] hover:underline hover:underline-offset-4 cursor-pointer ">Product</li>
             <li className="hover:text-[#2A4DD0] hover:underline hover:underline-offset-4 cursor-pointer ">Resource</li>
             <li className="hover:text-[#2A4DD0] hover:underline hover:underline-offset-4 cursor-pointer ">Contact</li>
         </ul>
          <DarkMode/>
     </div>
      )}
        </>
    )
}