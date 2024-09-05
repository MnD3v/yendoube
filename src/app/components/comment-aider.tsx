import React from 'react'
import Ligne from './widgets/ligne'

const CommentAider = () => {
    return (
        <div className='flex flex-col items-center bg-zinc-200 pt-11'>
            <h1 className='font-roboto'>
                Comment aider ?
            </h1>
            <Ligne></Ligne>
            <div className='text-center'>
                <p>Vous pouvez aider, soutenir et défendre de plusieurs façons !</p>
            </div>


            <div className='flex flex-wrap items-center justify-center m-6'>
                <img src="https://www.dralicenicholls.com/wp-content/uploads/2021/12/How-to-help-someone-in-Autistic-Burnout-768x432.png" alt="" className='h-[29rem] w-[32rem] object-cover' />
                <div className='grid grid-cols-2 max-md:grid-cols-1  m-4'>
                    <div className='flex flex-col items-center w-56 m-4'>
                        <img src="/icons/wallet.png" alt="" className='h-16' />
                        <h3 className='font-roboto'>Donner de l'argent</h3>
                        <p className='text-center'> Votre soutien financier est crucial pour nos projets. Chaque contribution aide à étendre notre impact et à réaliser nos initiatives. </p>
                    </div>
                    <div className='flex flex-col items-center w-56 m-4'>
                        <img src="/icons/godfather.png" alt="" className='h-16' />
                        <h3 className='font-roboto'>Parainer un enfant</h3>
                        <p className='text-center'>Votre parrainage offre un soutien personnalisé à un enfant, en contribuant à son éducation, sa santé et son bien-être. C'est un investissement direct dans son avenir. </p>
                    </div>
                    <div className='flex flex-col items-center w-56 m-4'>
                        <img src="/icons/gift.png" alt="" className='h-16' />
                        <h3 className='font-roboto'>Faire des cadeaux</h3>
                        <p className='text-center'>aire des Cadeaux : Vos dons de biens, comme des vêtements ou des fournitures, apportent un soutien immédiat et précieux aux personnes que nous aidons.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentAider