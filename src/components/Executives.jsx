import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import images from "../assets/images_exec"
import data from "../assets/executives.json"

export default function Executives() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);
  return (
    <main>
    <div className='font-mokoto flex flex-col items-center'>
      <h1 className='text-[#FF86FF] mt-10 lg:mt-20 text-2xl lg:text-6xl'>ICPEP.SE-USTP</h1>
      <h2 className='text-[#00EBFE] mt-12 lg:mt-24 text-xl lg:text-4xl'>THE EXECUTIVES</h2>

      <div data-aos="fade-down" className='flex flex-col w-full p-8 lg:p-20'>
        <div className='grid grid-cols-2 lg:grid-cols-5 font-poppins gap-y-10 '>
        {images.map((img, i) => {
            return(
                <div key={img} className='flex flex-col text-center items-center gap-2'>
                    <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                    <p className='font-medium text-xs lg:text-lg'>{data[i]["name"]}</p>
                    <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p>
                </div>
            )
        })}
        </div>
      </div>
    </div>
    </main>
  )
}
