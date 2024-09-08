import { motion } from 'framer-motion'
import React from 'react'

const Donner = () => {
  return (
    <motion.a href={"/paiement"}

    animate={{ scale: [1, 1.2] }}  // L'animation alterne entre scale 1 et 1.2
    transition={{
        duration: 3.5,      // Durée de chaque phase
        repeat: Infinity,   // Répéter à l'infini
        // Alterner entre 1 et 1.2, puis revenir à 1
    }}
> <button className='m-3 bg-customOrange hover:ring-4 ring-customOrange/30 hover:shadow-lg hover:bg-customOrange600 px-16 py-3 rounded-full text-white'>
        Donner
    </button>
</motion.a>
  )
}

export default Donner
