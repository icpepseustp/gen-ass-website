import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import images from "../assets/images_faculties"
import data from "../assets/faculty.json"

export default function Faculty() {

  const [isShowing, setIsShowing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  function show(index) {

    console.log(index)

    if(!isShowing){
      setCurrentIndex(index);
      setIsShowing(true);
    }

    // console.log(currentIndex)
    console.log(isShowing)
  }

  function hide(){
      setIsShowing(false);
  }

  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);

  return (
    <main>
    <div className="mt-20 lg:mt-0 h-2 lg:h-4 w-full bg-[#00EBFE]">
      
    </div>

    <div className='font-mokoto flex flex-col items-center bg-gradient-to-b from-[#1D154F] to-[#1D15A9]'>
      <h1 className='text-[#FF86FF] mt-10 lg:mt-20 text-2xl lg:text-5xl'>MEET THE CPE FACULTY</h1>
      {/* <h2 className='text-[#00EBFE] mt-12 lg:mt-24 text-2xl lg:text-4xl'>THE EXECUTIVES</h2> */}

      <div className='flex flex-col w-full p-8 lg:p-20 items-center'>
        <p className='font-mokoto text-[#00EBFE] text-xl mb-4 lg:text-2xl'>CHAIRMAN</p>
        <div data-aos="fade-right"
              className='font-poppins mb-10'>  
            {(isShowing && currentIndex === 0) ? (<div className='p-4 cursor-pointer flex flex-col text-center items-center gap-2 border-2 border-[#00DDD2] rounded-xl drop-shadow-xl'>
                <p onClick={()=> hide()} className="text-end text-sm text-[#00EBF3]">Close</p>
                <img  className='w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full' src={images[0]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[0]["name"]}</p>
                <div className='mt-8 text-start'>
                  {data[0]['des'].map((des) => {
                    return(
                      <p className='font-medium text-xs lg:text-sm'> <span className='text-[8px]'>{'\u2B24'}</span> {des}</p>
                    )
                  })}
                </div>
               
            </div>): (<div onClick={() => show(0)} className='cursor-pointer flex flex-col text-center items-center gap-2'>
                <img  className='w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full' src={images[0]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[0]["name"]}</p>
                    {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
            </div>)}
           
        </div>

        <div data-aos="fade-up"
              className='grid grid-cols-1 lg:grid-cols-3 font-poppins gap-x-10 gap-y-10'>
        {images.slice(1, images.length-1).map((img, i) => {
            return(
              (isShowing && currentIndex === i+1) ? (<div key={img} className='p-4 cursor-pointer flex flex-col text-center items-center gap-2 border-2 border-[#00DDD2] rounded-xl drop-shadow-xl'>
                <p onClick={()=> hide()} className="text-end text-sm text-[#00EBF3]">Close</p>
                <img  className='w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full' src={img} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[i+1]["name"]}</p>
                <div className='mt-8 text-start'>
                  {data[i+1]['des'].map((des) => {
                    return(
                      <p className='font-medium text-xs lg:text-sm'> <span className='text-[8px]'>{'\u2B24'}</span> {des}</p>
                    )
                  })}
                </div>
               
            </div>): (<div onClick={() => show(i+1)} key={img} className='cursor-pointer flex flex-col text-center items-center gap-2'>
                <img  className='w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full' src={img} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[i+1]["name"]}</p>
                    {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
            </div>)
                
            )
        })}
        </div>

        <div data-aos="fade-left"
             className='grid grid-cols-1 font-poppins mt-10'>
          {(isShowing && currentIndex === images.length-1 ) ? (<div key={images[images.length-1]} className='p-4 cursor-pointer flex flex-col text-center items-center gap-2 border-2 border-[#00DDD2] rounded-xl drop-shadow-xl'>
                <p onClick={()=> hide()} className="text-end text-sm text-[#00EBF3]">Close</p>
                <img  className='w-32 h-32 lg:w-48 lg:h-48 object-cover rounded-full' src={images[images.length-1]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[data.length-1]["name"]}</p>
                <div className='mt-8 text-start'>
                  {data[data.length-1]['des'].map((des) => {
                    return(
                      <p className='font-medium text-xs lg:text-sm'> <span className='text-[8px]'>{'\u2B24'}</span> {des}</p>
                    )
                  })}
                </div>
               
            </div>): (<div onClick={() => show(images.length-1)} className='cursor-pointer flex flex-col text-center items-center gap-2'>
                <img  className='w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full' src={images[images.length-1]} alt='no'/>
                <p className='font-medium text-xs lg:text-lg'>{data[data.length-1]["name"]}</p>
                    {/* <p className='italic font-light text-xs lg:text-sm'>{data[i]["position"]}</p> */}
            </div>)}
        </div>
      </div>
    </div>
    </main>
  )
}
