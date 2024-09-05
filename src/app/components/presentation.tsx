"use client"
import React, { useEffect, useState } from 'react'
import AppBar from './app-bar'
import Link from 'next/link'



const Presentation = () => {



    const Soutenir = () => (
        <h1 className="font-roboto text-white text-2xl md:text-4xl animate-fade-in-up delay-100">
            Soutenir un
            <span className="text-customOrange font-black pl-2">
                démuni
            </span>
        </h1>
    )

    const MondeMeilleur = () =>
    (
        <h1 className="animate-fade-in-up delay-200 text-3xl md:text-6xl text-white font-roboto font-semibold">
            Pour un monde<span className="text-customOrange font-black"> meilleur</span>
        </h1>
    )

    const Description = () => (
        <p className="animate-fade-in-up delay-300 mt-10 text-white mx-2">
            Chaque histoire de réussite commence par un acte de bienveillance
        </p>
    )

    const Donner = () => (
        <Link href='/paiement'>
            <button className=" delay-1000 animate-fade-in-up text-white bg-customOrange hover:ring-offset-2 ring-offset-transparent ring ring-customOrange/50 transition-all duration-500 px-5 py-5 w-96 my-10 rounded-full">“
                DONNER MAINTENANT
            </button>
        </Link>
    )

    interface Item {
        id: number;
        component: () => React.JSX.Element;
    }


    const items = [{ id: 1, component: Soutenir }, { id: 2, component: MondeMeilleur }, { id: 3, component: Description }, { id: 4, component: Donner }]

    const [visibleItems, setVisibleItems] = useState<number[]>([])

    useEffect(() => {
        items.forEach((item) => {
            setTimeout(() => {
                setVisibleItems((prev) => [...prev, item.id]);
            }, 100 * item.id);
        })
    }, [])
    return (
        <section id='presentation' className='relative h-[700px] flex flex-col items-center'>
            {/* image */}
            <img src="/orphan.jpg" alt="" className="w-full h-full object-cover absolute z-0" />
            {/* image */}

            {/* pardessus noir */}
            <div className='w-full h-full bg-black/65 absolute'> </div>
            {/* pardessus noir */}
            <div className=' mt-24 px-10 w-full flex flex-col items-center'>
                <div className=" w-full max-w-[96rem]  relative flex flex-col items-start ">


                    <div className='h-44'></div>
                    {items.map((item, index) => {
                        const Component = item.component
                        const duration = `${item.id * 500}ms`
                        return (
                            <div key={item.id} style={{ transitionDuration: duration }} className={`flex flex-col transition-all ease-in-out transform 
                            ${visibleItems.includes(item.id)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-full opacity-0'}`}>
                                {item.component()}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >

    )
}

export default Presentation