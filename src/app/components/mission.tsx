import React from 'react'

const Mission = () => {
    return (
        <section id="mission" className='flex flex-col items-center mt-8'>
            <div className='max-w-[80rem] mt-8'>

                <div className="text-zinc-950 justify-center text-center">
                    <h1 className="font-roboto text-3xl md:text-5xl font-bold text-customOrange">
                        Notre mission
                    </h1>
                    {/* ligne sous notre mission */}
                    <div className='flex flex-row items-center justify-center p-6'>
                        <div className='w-32 h-[1px] bg-slate-200'></div>
                        <img src="/icons/hand.png" alt="" className='h-9 text-customOrange' />
                        <div className='w-32 h-[1px] bg-slate-200'></div>
                    </div>
                    {/* ligne sous notre mission */}

                    <div className=' m-3 flex flex-row item-center justify-center flex-wrap'>
                        <div className=' inline-block max-w-[48rem] p-3 md:p-12 border-l-2 border-b-2 border-r-2 border-zinc/40 bg-zinc-400/10 rounded-2xl shadow-lg'>
                            <img src="/icons/goal.png" alt="" className='h-16 inline' />
                            <p className='font-roboto font-semibold text-2xl   text-customOrange p-4'>Transformer</p>
                            <p className='text-zinc-700 leading-relaxed'><span className='font-bold'>Yendoubé</span>  s'engage à transformer la vie des personnes en difficulté en offrant un soutien complet, couvrant l'éducation, la sécurité alimentaire et la défense des droits. Nous travaillons avec les communautés pour surmonter les défis uniques des personnes vulnérables, en créant des opportunités qui favorisent leur autonomisation et leur contribution positive à la société, dans le but de bâtir un avenir plus juste et équitable.</p>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Mission