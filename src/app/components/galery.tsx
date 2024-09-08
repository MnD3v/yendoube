import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import itemS from './utils/item'
import container from './utils/container'

const Galery = () => {

    const images = ['https://borgenproject.org/wp-content/uploads/10-Facts-about-Orphans-in-South-Africa-1.jpg', 'https://borgenproject.org/wp-content/uploads/15734662856_8de7a6424f_o-300x200.jpg', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RIVCKQNUIqJwTfgK5Pll93xsSNG0b4VZBoJxJ11YSKK4DlsvF4iAl3wZlw82JNcRzY0&usqp=CAU", 'https://earthtimes.org/cdn/shop/articles/world-day-war-orphans_6113.jpg?v=1684443180', 'https://pmedia.launchgood.com/97687/support_orphans_across_zanzibar_today_Cover1-700x525.JPG']
    return (
        <section id='galerie' className='m-10'>
            <motion.div variants={container}
                initial="hidden"
                whileInView="show">
                <motion.h1
                    // initial={{ opacity: 0, x: -100 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    variants={itemS(0.9)}
                    className='m-4 font-roboto text-center text-3xl md:text-5xl'>Galerie</motion.h1>
            </motion.div>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {
                    images.map((element) =>

                    (<motion.div key={element}
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 * images.indexOf(element) } }}

                        className='overflow-hidden cursor-pointer bg-yellow-200'>
                        <Link href={element}>
                            <img src={element} alt="" className='w-28 h-28 md:w-72 md:h-72 object-cover hover:scale-110' />
                        </Link>
                    </motion.div>)

                    )
                }
            </div>
        </section>
    )
}

export default Galery