"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Paiement = () => {
    const date = Date.now().toString(32);

    const router = useRouter();

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = () => {

        // router.push()
    }
    return (
        <div className='m-6'>
            <div className='flex flex-col items-center'>
                <h1 className='font-roboto text-3xl md:text-5xl'>Paiement</h1>
                <h3 className='text-lg text-slate-700'>Informations personnelles</h3>
                <div className=' my-9 flex flex-col md:grid grid-cols-2 gap-3 max-w-[850px] p-9 bg-zinc-200'>
                    <div className='w-full'>
                        <p className='font-roboto font-semibold'>Votre nom</p>
                        <input type="text" placeholder='Votre nom' className='border-2 focus:border-1 focus:border-customOrange outline-none px-3 py-4 w-full' />
                    </div>
                    <div className='w-full'>
                        <p className='font-roboto font-semibold'>Votre prénom</p>
                        <input type="text" placeholder='Votre prénom' className='border-2 focus:border-1 focus:border-customOrange outline-none px-3 py-4 w-full' />
                    </div>
                    <div className='md:col-span-2'>
                        <p className='font-roboto font-semibold'>Votre email</p>
                        <input type="text" placeholder='Votre email' className='border-2 focus:border-1 focus:border-customOrange outline-none px-3 py-4 w-full' />
                    </div>
                    <div className='flex col-span-2'>
                        <p className='px-4 h-16 bg-zinc-400 content-center text-white border-2'>FCFA</p>
                        <input type="number" onChange={handleInputChange} placeholder='montant' className='relative right-2 border-2 focus:border-1 focus:border-customOrange outline-none px-3 h-16 w-60 ' />
                    </div>
                    <Link href={`https://paygateglobal.com/v1/page?token=13c195ab-00aa-41a5-a8a5-5668cd77a623&amount=${inputValue}&description=test&identifier=${date}`} target='_blank'>     <button className='mt-3 w-56 bg-customOrange  py-3 rounded-full text-white '>
                        Donner
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Paiement