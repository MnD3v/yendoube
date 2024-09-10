import { motion } from 'framer-motion'
import React from 'react'

const Donner = () => {
  return (
    <button className="text-[1rem] md:text-base font-medium  delay-1000 animate-fade-in-up text-white bg-customOrange hover:bg-customOrange600 hover:ring-offset-2 ring-offset-black  transition-all duration-500  px-5 py-3 md:px-8 md:py-4  my-10 mx-2 rounded-md shadow-xl shadow-customOrange/35">
      FAIRE UN DON
    </button>
  )
}

export default Donner
