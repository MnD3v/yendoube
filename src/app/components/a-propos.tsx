import React from 'react'
import Ligne from './widgets/ligne'
import { motion } from 'framer-motion'
import itemS from './utils/item'
import container from './utils/container'

const Fondateur = () => {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            id='a-propos' className='my-24 flex flex-col items-center '>
            <motion.h1
                variants={itemS(0.9)}
                className='font-roboto text-center my-2 text-3xl md:text-5xl'>A propos</motion.h1>
            <Ligne></Ligne>
            <p className='max-w-[800px] m-6 pb-6'> <span className='font-extrabold text-customOrange text-xl font-roboto'>Yendoubé</span> est dédié à promouvoir la justice sociale et l'inclusion à travers des actions concrètes. Notre mission est de défendre les droits des veuves, de scolariser les orphelins et de soutenir les personnes handicapées. En travaillant avec passion et détermination, nous visons à offrir une chance équitable à ceux qui en ont besoin, en leur fournissant protection, éducation et accompagnement. Nous croyons en un avenir où chacun a la possibilité de s’épanouir, malgré les défis de la vie. Rejoignez-nous dans notre engagement pour un monde plus juste et solidaire.</p>
            <div className='flex justify-center '>
                <div className=' flex flex-wrap m-8  justify-center gap-6'>
                    <motion.img
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        src="/fonder.png" alt="" className='w-96 h-[300px] md:w-96 md:h-[550px] object-cover' />
                    <div className='max-w-96 flex flex-col'>
                        <h3 className='text-lg md:text-3xl font-roboto text-zinc-700 underline underline-offset-8 px-4'>Fondateur</h3>
                        <h2 className='text-start font-roboto text-xl md:text-3xl'>ALEDE Kokou Joseph</h2>
                        <p className='px-4'>Révérend ALEDE est un pasteur, enseignant et directeur d'école passionné par la justice sociale. Son engagement envers les veuves, les orphelins et les personnes handicapées découle de sa profonde foi et de son expérience éducative. Il inspire et dirige notre organisation avec compassion, visant à bâtir une communauté plus juste et solidaire.</p>

                        <div className='w-full font-roboto text-center inline-block mx-4 mt-2 border-2 px-4 py-2 bg-black/10 content-center gap-1'>
                            <p >aledekodou@gmail.com</p>

                            <p>+228 90144043</p>
                        </div>




                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Fondateur