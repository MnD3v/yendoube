import React from 'react'
import Ligne from './widgets/ligne'

const Fondateur = () => {
    return (
        <section id='a-propos' className='my-24 flex flex-col items-center '>
            <h1 className='font-roboto text-center my-2'>A propos</h1>
            <Ligne></Ligne>
            <p className='max-w-[800px] m-6 pb-6 text-center'> <span className='font-bold'>Yendoubé</span> est dédié à promouvoir la justice sociale et l'inclusion à travers des actions concrètes. Notre mission est de défendre les droits des veuves, de scolariser les orphelins et de soutenir les personnes handicapées. En travaillant avec passion et détermination, nous visons à offrir une chance équitable à ceux qui en ont besoin, en leur fournissant protection, éducation et accompagnement. Nous croyons en un avenir où chacun a la possibilité de s’épanouir, malgré les défis de la vie. Rejoignez-nous dans notre engagement pour un monde plus juste et solidaire.</p>
            <div className='flex justify-center '>
                <div className=' flex flex-wrap m-8  justify-center gap-6'>
                    <img src="/fonder.png" alt="" className='w-96 h-[550px] object-cover' />
                    <div className='max-w-96 flex flex-col'>
                        <h3 className=' font-roboto text-zinc-700 underline underline-offset-8 px-4'>Fondateur</h3>
                        <h2 className='text-start font-roboto'>Alede Kokou Joseph</h2>
                        <p className='px-4'>Révérend [Nom du fondateur] est un pasteur, enseignant et directeur d'école passionné par la justice sociale. Son engagement envers les veuves, les orphelins et les personnes handicapées découle de sa profonde foi et de son expérience éducative. Il inspire et dirige notre organisation avec compassion, visant à bâtir une communauté plus juste et solidaire.</p>

                        <div className='font-roboto text-center w-60 inline-block mx-4 mt-2 border-2 px-4 py-2 rounded-xl bg-customOrange/10 content-center gap-1'>
                            <p >aledekodou@gmail.com</p>

                            <p>+228 90144043</p>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fondateur