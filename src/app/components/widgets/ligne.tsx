import { motion } from 'framer-motion'
import React from 'react'

const Ligne = () => {
    return (

        <div className='flex flex-row items-center justify-center p-6'>
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className='w-32 h-[1px] bg-customOrange'></motion.div>
            <img src="/icons/hand.png" alt="" className='h-9 text-customOrange' />
            <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} className='w-32 h-[1px] bg-customOrange'></motion.div>
        </div>

    )
}

export default Ligne