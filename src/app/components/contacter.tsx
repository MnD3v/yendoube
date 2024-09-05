import React from 'react'

const Contacter = () => {
    return (
        <section className='my-16 flex flex-col items-center'>
            <div className='flex flex-col items-center max-w-[888px] content-center '>
                <h1 className='font-roboto text-3xl md:text-5xl'>Nous contacter</h1>
                <div>
                    <input type="text" placeholder='Nom' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />
                    <input type="text" placeholder='Email' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />
                    <textarea placeholder='Message' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />

                </div>
                <button className='m-3 bg-customOrange px-16 py-3 rounded-full text-white'>
                    Envoyer
                </button>
                <h3 className='font-roboto text-customOrange'>Contacts</h3>
                <h4>Telephone</h4>
                <p>+228 90 14 40 43</p>
                <p>+228 90 90 90 90</p>
                <br />
                <h4>Email</h4>
                <p>yendoube@gmail.com</p>
                <br />
                <h4>Localisation</h4>
                <p>Dapaong-Tantigou</p>

            </div>
        </section>
    )
}

export default Contacter