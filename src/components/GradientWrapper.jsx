import React from 'react'
import Committees from './Committees'
import Executives from './Executives'
import ClassReps from './ClassReps'
import Footer from './Footer'

export default function GradientWrapper() {
  return (
    <div className='bg-gradient-to-b from-[#1D1547] to-[#1F1DAC]'>
      <Executives/>
      <Committees/>
      <ClassReps/>
      <Footer/>
    </div>
  )
}
