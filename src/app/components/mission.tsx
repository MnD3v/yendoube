import React from 'react'

const Mission = () => {
    return (
        <section id="mission" className='flex flex-col items-center mt-8'>
            <div className='max-w-[80rem] mt-8'>

                <div className="text-zinc-950 justify-center text-center">
                    <h1 className="font-roboto text-5xl font-bold text-customOrange">
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
                        <div className=' inline-block max-w-[48rem] p-12 border-l-2 border-b-2 border-r-2 border-customOrange/40 bg-customOrange/10 rounded-2xl'>
                            <img src="/icons/goal.png" alt="" className='h-16 inline' />
                            <p className='font-roboto font-semibold text-2xl   text-customOrange p-4'>Transformer</p>
                            <p className='text-zinc-700 leading-relaxed'><span className='font-bold'>Yendoubé</span> s'engage à transformer la vie des personnes en difficulté en fournissant un soutien complet et intégré. Notre approche vise non seulement à répondre aux besoins immédiats, comme l'accès à l'éducation, la sécurité alimentaire et la défense des droits, mais aussi à favoriser l'autonomisation à long terme. Nous travaillons en étroite collaboration avec les communautés locales pour identifier et adresser les défis uniques que rencontrent les personnes vulnérables. Notre objectif est de créer des opportunités qui permettent à chacun de surmonter les obstacles, de réaliser son potentiel et de contribuer de manière positive à la société. En combinant compassion, action et collaboration, nous aspirons à bâtir un avenir plus juste et équitable pour tous.

                                .</p>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Mission