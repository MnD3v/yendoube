"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="bg-zinc-700 w-full flex flex-col justify-center items-center p-12">
                <div className="max-w-96 flex flex-col items-center">

                    <img src="./logo.png" alt="" className="w-44" />
                    <br />
                    <p className="text-white text-center">Nous nous engageons à défendre les veuves, à scolariser les orphelins et à soutenir les personnes handicapées. Notre mission est de garantir à chacun une chance égale de vivre dignement, en leur offrant protection, éducation et accompagnement. Ensemble, construisons un monde plus juste et inclusif, où chaque individu peut s'épanouir, quelles que soient les épreuves de la vie.</p>
                    <div className="flex justify-center">
                        <motion.a href="https://facebook.com"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                                <img src="./icons/facebook.png" alt="" className="w-12 object-contain" />
                            </div></motion.a>
                        <a href="https://linkedin.com" target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                            <img src="./icons/linkedin.png" alt="" className="w-12" />
                        </div>
                        </a>
                        <motion.a href="https://twitter.com"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                                <img src="./icons/twitter.png" alt="" className="w-12" />
                            </div>
                        </motion.a>


                    </div>
                </div>
                <div className="bg-zinc-400 h-px w-[90%] my-9">

                </div>
                <p className="text-white font-mono">
                    Copyright ©, powered by zezui
                </p>
                <br />
            </div>
        </footer>
    )
}

export default Footer