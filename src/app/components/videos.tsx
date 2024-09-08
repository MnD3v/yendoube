import { motion } from 'framer-motion'
import React from 'react'
import container from './utils/container'
import itemS from './utils/item'

const Videos = () => {
    return (
        <section

            className='bg-zinc-100 my-9'>
            {/* <div className="relative w-64 h-40">
                <img src="/orphan.jpg" alt="Thumbnail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quisquam. Itaque minus rerum nostrum, architecto sed repellat porro repellendus ex quia commodi modi numquam, atque cum magni a reprehenderit explicabo?</p>
                </div>
            </div> */}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex flex-wrap items-center justify-center'>
                <div className='relative justify-center h-80 w-[33rem] m-4'>
                    {/* <img src="/orphan.jpg" alt="" className='h-80 w-[43rem] object-cover relative' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <img src="/icons/play.png" alt="" className=' h-16 ' />
                    </div> */}

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/GgppShKWMuA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
                <motion.div
                    variants={itemS(0.9, -1,)}
                    className='w-[33rem] mx-4'>
                    <p className='font-roboto text-2xl font-bold'>Redonner le sourir</p>
                    <div className='w-28 h-px bg-customOrange my-6'></div>
                    <p>Découvrez comment nous apportons joie et espoir aux orphelins grâce à des initiatives réconfortantes. Cette vidéo montre des moments de bonheur, des sourires sincères et l'impact des actions solidaires pour transformer des vies. Rejoignez-nous pour voir comment nous redonnons le sourire aux enfants dans le besoin.</p>

                </motion.div>
            </motion.div>
            <div className='h-12'></div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex flex-wrap-reverse items-center justify-center'>
                <motion.div
                    variants={itemS(0.9)}


                    className='w-[33rem] mx-4'>
                    <p className='font-roboto text-2xl font-bold'>Aider un peu</p>
                    <div className='w-28 h-px bg-customOrange my-6'></div>
                    <p>Voyez comment de petits gestes peuvent faire une grande différence. Dans cette vidéo, nous aidons les orphelins avec des actions simples mais significatives, apportant soutien et réconfort. Découvrez comment chaque contribution, aussi modeste soit-elle, peut illuminer une journée et offrir un sourire aux enfants dans le besoin. Rejoignez-nous pour voir l'impact de ces moments de générosité et d’aide.</p>

                </motion.div>
                <div className='relative justify-center h-80 w-[33rem] m-4'>
                    {/* <img src="/orphan.jpg" alt="" className='h-80 w-[43rem] object-cover relative' />
                    <div className='absolute inset-0 flex justify-center items-center'>
                        <img src="/icons/play.png" alt="" className=' h-16 ' />
                    </div> */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/GgppShKWMuA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

            </motion.div>

        </section>
    )
}

export default Videos