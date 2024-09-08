"use client"
import React from 'react'
import Ligne from './widgets/ligne'
import Link from 'next/link';
import { motion } from 'framer-motion';
import itemS from './utils/item';
import container from './utils/container';


class Cause {
    image: string;
    titre: string;
    description: string;

    constructor({ image, titre, description }: { image: string, titre: string, description: string }) {
        this.description = description;
        this.image = image;
        this.titre = titre;
    }
}

const Causes = () => {

    const causes = [
        new Cause({ image: '/scolarise.jpg', titre: 'Scolariser', description: "Assurer l'accès à l'éducation des orphelins et des démunis, pour leur permettre de briser le cycle de la pauvreté et de bâtir un avenir autonome. Nous croyons que chaque enfant mérite une chance égale de réussir, quel que soit son parcours." }),
        new Cause({ image: '/widow.webp', titre: 'Défendre', description: "Défendre les droits des veuves, souvent vulnérables face à l’injustice et à la discrimination. Nous nous engageons à leur offrir un soutien juridique, social et moral afin qu'elles puissent retrouver leur dignité et exercer pleinement leurs droits." }),
        new Cause({ image: '/handicap.jpg', titre: 'Soutenir', description: "Soutenir les personnes en situation de handicap en leur offrant les ressources et l'accompagnement nécessaires pour vivre avec dignité et autonomie. Nous œuvrons pour une société inclusive où chacun, indépendamment de ses capacités, a les mêmes opportunités de s'épanouir et de contribuer pleinement." }),



    ]
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
                        Nos causes
                    </motion.h1>
                    <Ligne></Ligne>
                    <div className='flex flex-wrap justify-center'>

                        {
                            causes.map((element) =>
                            (
                                <div key={element.titre} className=' cursor-pointer hover:bg-zinc-50-50 w-80 shadow-xl m-6 overflow-hidden'>
                                    <motion.img src={element.image} alt=""
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        className=' w-80 h-60 object-cover hover:scale-105 transition-all duration-300' />
                                    <div className='p-6 flex flex-col items-center justify-center'>
                                        <motion.p
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className='font-roboto font-semibold text-xl md:text-2xl text-customOrange'>{element.titre}</motion.p>
                                        <div className='h-px w-20 bg-customOrange m-4'></div>
                                        <motion.p
                                            initial={{ opacity: 0, y: -30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className='text-zinc-700'>{element.description} </motion.p>
                                        <a href={"/paiement"}


                                        > <motion.button
                                            // animate={{ scale: [1, 1.2], backgroundColor: ["#ffffff", "#F8B864",] }}  // L'animation alterne entre scale 1 et 1.2
                                            // transition={{
                                            //     duration: 3.5,      // Durée de chaque phase
                                            //     repeat: Infinity,   // Répéter à l'infini
                                            //     // Alterner entre 1 et 1.2, puis revenir à 1
                                            // }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            className='my-4 w-full hover:ring-4 ring-customOrange/30 
                                            shadow-lg border-4 border-customOrange
                                            hover:shadow-xl hover:bg-customOrange600 px-16 py-3  text-black'>
                                                Donner
                                            </motion.button>
                                        </a>
                                    </div>

                                </div>

                            )

                            )
                        }
                    </div>


                </motion.div>
            </div>
        </section>
    )
}

export default Causes





