import React, { useEffect } from 'react'
import divider from "../assets/images/Footer/divider-black.svg"
import logo from "../assets/images/classreps/glitch-icon1.png"
import images from "../assets/images_reps"
import data  from "../assets/classreps.json"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ClassReps() {
    useEffect(()=>{
        AOS.init({duration:1000})
      },[]);
    return (
        <main>
        <div className='font-mokoto flex flex-col items-center'>
            <h1 className='text-[#FF86FF] mt-10 text-center lg:mt-20 text-2xl lg:text-6xl'>CLASS REPRESENTATIVES</h1>
            <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>1ST YEAR</h2>
            <div className='flex flex-col w-full p-8 lg:p-20'>
          <div data-aos="fade-down" className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
          {images[0]["year-1"].slice(0,4).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[0]["year-1"][0]}</p>
                  </div>
              )
          })}
          </div>
          <div data-aos="fade-up" className='grid grid-cols-2 lg:grid-cols-2 font-poppins gap-y-10 lg:px-80 mt-8'>
          {images[0]["year-1"].slice(4,6).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[0]["year-1"][i+1]}</p>
                  </div>
              )
          })}
          </div>
        </div>

            <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>2ND YEAR</h2>
            <div data-aos="fade-up" className='flex flex-col w-full p-8 lg:p-20'>
                <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
                {images[1]["year-2"].map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[1]["year-2"][i]}</p>
                  </div>
                    )
                })}
                </div>
            </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>3RD YEAR</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div data-aos="fade-down" className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-80'>
          {images[2]["year-3"].slice(0,1).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[2]["year-3"][0]}</p>
                  </div>
              )
          })}
          </div>
          <div data-aos="fade-up" className='grid grid-cols-2 lg:grid-cols-2 font-poppins gap-y-10 lg:px-80 mt-8'>
          {images[2]["year-3"].slice(1,3).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[2]["year-3"][i+1]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>4TH YEAR</h2>
        <div data-aos="fade-up" className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-80'>
          {images[3]["year-4"].slice(0,1).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[3]["year-4"][0]}</p>
                  </div>
              )
          })}
          </div>
          <div data-aos="fade-down" className='grid grid-cols-2 lg:grid-cols-2 font-poppins gap-y-10 lg:px-80 mt-8'>
          {images[3]["year-4"].slice(1,3).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[3]["year-4"][i+1]}</p>
                  </div>
              )
          })}
          </div>
        </div>
        </div>
        <div className='flex flex-row justify-center items-center'>
            <img src={logo} alt="logo" className='-mb-[50px] px-12 lg:w-[800px] lg:-mb-[70px] flex justify-content-center'/>
        </div>
        <img src={divider} alt="divider" className='z-[10]' />
        </main>
      )
  }