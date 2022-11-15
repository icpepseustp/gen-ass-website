import React from 'react'

import images from "../assets/images_coms"
import data  from "../assets/committees.json"

export default function Committees() {
  return (
    <main>
    <div className='font-mokoto flex flex-col items-center'>
        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE OF DESIGN</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
          {images[0]["comdes"].map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[0]["comdes"][i]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE OF ACADEMIC AFFAIRS</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-80'>
          {images[1]["comaa"].slice(0,1).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[1]["comaa"][0]}</p>
                  </div>
              )
          })}
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-2 font-poppins gap-y-10 lg:px-80 mt-8'>
          {images[1]["comaa"].slice(1,3).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[1]["comaa"][i+1]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE OF EXTRA-CURRICULAR ACTIVITIES</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
          {images[2]["comea"].map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[2]["comea"][i]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE OF SPORTS</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
          {images[3]["comspo"].map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[3]["comspo"][i]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE FOR DOCUMENTATION</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-80'>
          {images[4]["comdoc"].slice(0,1).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[4]["comdoc"][0]}</p>
                  </div>
              )
          })}
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-2 font-poppins gap-y-10 lg:px-80 mt-8'>
          {images[4]["comdoc"].slice(1,3).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[4]["comdoc"][i+1]}</p>
                  </div>
              )
          })}
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>COMMITTEE FOR WEB DEVELOPMENT</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 font-poppins gap-y-10 lg:px-40'>
          {images[5]["comweb"].slice(0,4).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[5]["comweb"][i]}</p>
                  </div>
              )
          })}          
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-24 mt-8'>
          {images[5]["comweb"].slice(4,5).map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[5]["comweb"][4]}</p>
                  </div>
              )
          })}          
          </div>
        </div>

        <h2 className='text-[#00EBFE] text-center mt-6 lg:mt-12 text-2xl lg:text-4xl'>ICpEERS.VE LEAD</h2>
        <div className='flex flex-col w-full p-8 lg:p-20'>
          <div className='grid grid-cols-1 lg:grid-cols-1 font-poppins gap-y-10 lg:px-80'>
          {images[6]["icpeers"].map((img, i) => {
              return(
                  <div key={img} className='flex flex-col text-center items-center gap-2'>
                      <img className='w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full' src={img} alt='no'/>
                      <p className='font-medium text-xs lg:text-lg'>{data[6]["icpeers"][i]}</p>
                  </div>
              )
          })}
          </div>
        </div>
    </div>
    </main>
  )
}
