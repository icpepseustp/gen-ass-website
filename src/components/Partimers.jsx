import React from 'react'
import images from "../assets/images_partimers"
import data from "../assets/partimers.json"

export const Partimers = () => {
  return (
    <main>
    <div className='font-mokoto flex flex-col items-center'>
      <div data-aos="fade-down" className='flex flex-col w-full p-8 lg:p-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 '>
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
