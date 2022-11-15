import React from 'react'

import reboot from "../assets/reboot.svg"
import ustp from "../assets/ustp_art.svg"

export default function Header() {
  return (
  <main>
    <div className="h-full w-full">
      <div className="flex flex-row w-full h-[250px] py-8 lg:h-screen px-[100px] lg:px-[120px] justify-center lg:items-center">
        <img src={ustp} alt= "ustp-bg" className="mt-2 lg:mt-[36px] object-cover absolute"/>
        <img src={reboot} alt= "reboot-bg" className="z-10 mt-6 object-contain h-[120px] lg:mt-0 lg:h-[450px] lg:w-[800px]"/>
      </div>
    </div> 
  </main>
  )
}
