"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

export function DarkMode(){
    const [isNight, setIsNight] = useState(false);


    useEffect(() => {
        const storedDarkMode = localStorage.getItem('theme');
        if (storedDarkMode === "dark") setIsNight(true)
      }, []);
      
    useEffect(()=>{
        if (isNight) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[isNight])
    return(
        <div className="  bg-[#223344] flex items-center rounded-2xl w-max space-x-2 p-1 cursor-pointer " onClick={()=>setIsNight(!isNight)}>
        <Image className={`${isNight ? 'bg-white' : 'bg-none'} rounded-full`} src={`${isNight ? 'Moon_fill.svg' : 'Moon_fill_light.svg'}`} alt="" width={20} height={20}/>
        <Image className={`${isNight ? 'bg-none' : 'bg-white'} rounded-full`} src={"/Sun_fill.svg"} alt="" width={20} height={20} style={{
           filter: ` ${isNight ? 'brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(422%) hue-rotate(294deg) brightness(119%) contrast(100%)' : ''} `,
        }} />
    </div>
    )
}