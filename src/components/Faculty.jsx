import React from 'react'
import images from "../assets/images_faculties"
import data from "../assets/faculty.json"

export default function Faculty() {
  return (
    <main>
    <div className="h-2 lg:h-4 w-full bg-[#00EBFE]">
      
    </div>

    <div className='font-mokoto flex flex-col items-center bg-gradient-to-b from-[#1D154F] to-[#1D15A9]'>
      <h1 className='text-[#FF86FF] mt-10 lg:mt-20 text-2xl lg:text-5xl'>MEET THE CPE FACULTY</h1>
      {/* <h2 className='text-[#00EBFE] mt-12 lg:mt-24 text-2xl lg:text-4xl'>THE EXECUTIVES</h2> */}

      <div className='flex flex-col w-full p-8 lg:p-20'>

        <div className='grid grid-cols-1 font-poppins mb-10'>
            <div className='flex flex-col text-center items-center gap-2'>
                <p className='font-mokoto text-[#00EBFE] text-xl lg:text-2xl'>CHAIRMAN</p>
                <img  className='w-24 h-24 lg:w-48 lg:h-48 object-cover rounded-full' src={images[0]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[0]["name"]}</p>
                    {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
            </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10'>
        {images.slice(1, images.length-1).map((img, i) => {
            return(
                <div key={img} className='flex flex-col text-center items-center gap-2'>
                    <img  className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                    <p className='font-medium text-xs lg:text-lg'>{data[i+1]["name"]}</p>
                    {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
                </div>
            )
        })}
        </div>
        <div className='grid grid-cols-1 font-poppins mt-10'>
          <div className='flex flex-col text-center items-center gap-2'>
                <img  className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={images[images.length-1]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[images.length-1]["name"]}</p>
                {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
