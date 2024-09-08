"use client"
import React, { useEffect, useState } from 'react'
import AppBar from './app-bar'
import Link from 'next/link'
import { animate, motion } from "framer-motion";



const Presentation = () => {

    const container = {
        hidden: {
            opacity: 0,

        },
        show: {
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    }

    const itemS = (duration: any) => ({
        hidden: { opacity: 0, y: 120 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                opacity: { duration: duration, },  // Animation linéaire pour l'opacité
                y: { duration: duration, },        // Animation linéaire pour la translation
            },
        },
    });

    return (
        <motion.section id='presentation'

            className='flex flex-col items-center'>



            <motion.div className="w-full bg-cover bg-[url('/orphan.jpg')]">
                <motion.div className='mt-16 md:mt-28 bg-black/30 px-10 py-12 md:py-20 w-full flex flex-col items-center'>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        className=" w-full max-w-[96rem]  relative flex flex-col items-start ">
                        <motion.h1
                            variants={itemS(0.9)}
                            className="leading-7 tracking-wider  font-extralight text-white text-2xl md:text-4xl ">
                            Soutenir Un
                            <span className="text-customOrange pl-2">
                                Démuni
                            </span>
                        </motion.h1>

                        <motion.h1
                            variants={itemS(1.5)}
                            className="tracking-wider  text-3xl md:text-6xl text-white font-roboto font-semibold">
                            Pour un monde<span className="text-customOrange font-black font-roboto"> meilleur</span>
                        </motion.h1>

                        <motion.p
                            variants={itemS(1.9)}

                            className="mt-10 text-white mx-2">
                            Ensemble, donnons espoir et bâtissons un avenir pour tous.
                        </motion.p>

                        <motion.a
                            variants={itemS(2.4)}
                            animate={{ scale: [1, 1.2] }}  // L'animation alterne entre scale 1 et 1.2
                            transition={{
                                duration: 3.5,      // Durée de chaque phase
                                repeat: Infinity,   // Répéter à l'infini
                                // Alterner entre 1 et 1.2, puis revenir à 1
                            }}
                            href='/paiement'>
                            <button className="text-[1rem] md:text-base font-semibold  delay-1000 animate-fade-in-up text-white bg-black/30 hover:bg-customOrange600 hover:ring-offset-2 ring-offset-black ring ring-white transition-all duration-500  px-5 py-3 md:px-8 md:py-4  my-10 mx-2 ">
                                DONNER MAINTENANT
                            </button>
                        </motion.a>

                    </motion.div>
                </motion.div>
            </motion.div>


        </motion.section >

    )
}

export default Presentation