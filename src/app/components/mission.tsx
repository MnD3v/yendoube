import React from 'react'
import Ligne from './widgets/ligne'
import { motion } from 'framer-motion'
import itemS from './utils/item'
import container from './utils/container'

const Mission = () => {
    return (
        <section id="mission" className='flex flex-col items-center mt-8'>
            <div className='max-w-[80rem] mt-8'>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    className="text-zinc-950 justify-center text-center">
                    <motion.h1
                        variants={itemS(0.9)}
                        className="font-roboto text-3xl md:text-5xl font-bold text-customOrange">
                        Notre mission
                    </motion.h1>
                    <Ligne></Ligne>

                    <div className=' m-3 flex flex-row item-center justify-center flex-wrap'>
                        <div className=' inline-block max-w-[48rem] p-3 md:p-12 shadow-lg'>
                            <motion.img src="/icons/goal.png" alt="" className='h-12 inline m-3' initial={{ scale: 2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} />

                            <p className='text-zinc-700 leading-relaxed'><span className='font-extrabold text-customOrange text-xl font-roboto'>Yendoubé</span>  s'engage à transformer la vie des personnes en difficulté en offrant un soutien complet, couvrant l'éducation, la sécurité alimentaire et la défense des droits. Nous travaillons avec les communautés pour surmonter les défis uniques des personnes vulnérables, en créant des opportunités qui favorisent leur autonomisation et leur contribution positive à la société, dans le but de bâtir un avenir plus juste et équitable.</p>
                        </div>

                    </div>


                </motion.div>
            </div>
        </section>
    )
}

export default Mission