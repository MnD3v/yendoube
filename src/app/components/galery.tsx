import Link from 'next/link'
import React from 'react'

const Galery = () => {

    const images = ['https://borgenproject.org/wp-content/uploads/10-Facts-about-Orphans-in-South-Africa-1.jpg', 'https://borgenproject.org/wp-content/uploads/15734662856_8de7a6424f_o-300x200.jpg', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RIVCKQNUIqJwTfgK5Pll93xsSNG0b4VZBoJxJ11YSKK4DlsvF4iAl3wZlw82JNcRzY0&usqp=CAU", 'https://earthtimes.org/cdn/shop/articles/world-day-war-orphans_6113.jpg?v=1684443180', 'https://pmedia.launchgood.com/97687/support_orphans_across_zanzibar_today_Cover1-700x525.JPG']
    return (
        <section id='galerie' className='m-10'>
            <h1 className='font-roboto text-center'>Galerie</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                {
                    images.map((element) =>

                    (<div key={element} className='overflow-hidden cursor-pointer bg-yellow-200'>
                        <Link href={element}>
                            <img src={element} alt="" className='w-72 h-72 object-cover hover:scale-110' />
                        </Link>
                    </div>)

                    )
                }
            </div>
        </section>
    )
}

export default Galery