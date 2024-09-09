import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import itemS from './utils/item'
import container from './utils/container'
import Ligne from './widgets/ligne'

const Galery = () => {

    const images = [{ description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae nobis minima delectus nesciunt. Accusamus, ullam rem nostrum, quae eos quas magnam assumenda qui vero ab quis maiores voluptates expedita.', image: 'https://borgenproject.org/wp-content/uploads/10-Facts-about-Orphans-in-South-Africa-1.jpg' }, { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae nobis minima delectus nesciunt. Accusamus, ullam rem nostrum, quae eos quas magnam assumenda qui vero ab quis maiores voluptates expedita.', image: 'https://borgenproject.org/wp-content/uploads/15734662856_8de7a6424f_o-300x200.jpg' }, { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae nobis minima delectus nesciunt. Accusamus, ullam rem nostrum, quae eos quas magnam assumenda qui vero ab quis maiores voluptates expedita.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RIVCKQNUIqJwTfgK5Pll93xsSNG0b4VZBoJxJ11YSKK4DlsvF4iAl3wZlw82JNcRzY0&usqp=CAU" }, { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae nobis minima delectus nesciunt. Accusamus, ullam rem nostrum, quae eos quas magnam assumenda qui vero ab quis maiores voluptates expedita.', image: 'https://earthtimes.org/cdn/shop/articles/world-day-war-orphans_6113.jpg?v=1684443180' }, { description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae nobis minima delectus nesciunt. Accusamus, ullam rem nostrum, quae eos quas magnam assumenda qui vero ab quis maiores voluptates expedita.', image: 'https://pmedia.launchgood.com/97687/support_orphans_across_zanzibar_today_Cover1-700x525.JPG' }]
    return (
        <section id='galerie' className='m-10'>
            <motion.div variants={container}
                initial="hidden"
                whileInView="show">
                <motion.h1
                    // initial={{ opacity: 0, x: -100 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    variants={itemS(0.9)}
                    className='m-4 font-roboto text-center text-3xl md:text-5xl'>Evenements</motion.h1>
            </motion.div>
            <Ligne></Ligne>
            <br />
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {
                    images.map((element) =>

                    (<motion.div key={element.image}
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 * images.indexOf(element) } }}

                        className='w-72  overflow-hidden cursor-pointer shadow-lg'>
                        <Link href={element.image}>
                            <img src={element.image} alt="" className='relative w-72 h-60 object-cover hover:scale-110' />
                        </Link>
                        <div className='p-4'>
                            <p className='font-roboto font-light py-2'>21 Janvier 2021</p>
                            <p className='font-roboto font-bold py-2'>{element.description.substring(0, 80)}</p>
                            <p className='font-roboto font-bold text-customOrange py-2'>VOIR PLUS</p>

                        </div>

                    </motion.div>)

                    )
                }
            </div>
        </section>
    )
}

export default Galery