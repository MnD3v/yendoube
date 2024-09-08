"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import itemS from './utils/item'
import container from './utils/container'

const Contacter = () => {

    const [showNotification, setShowNotification] = useState(false);

    const handleSendMessage = () => {
        console.log("Message envoyé");

        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };


    return (
        <section className='my-16 flex flex-col items-center'>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className='flex flex-col items-center max-w-[888px] content-center '>
                <motion.h1
                    // initial={{ opacity: 0, x: -100 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    variants={itemS(0.9)}
                    className='font-roboto text-3xl md:text-5xl'>Nous contacter</motion.h1>
                <div>
                    <input type="text" placeholder='Nom' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />
                    <input type="text" placeholder='Email' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />
                    <textarea placeholder='Message' className='my-6 p-4 w-full border-b-2 outline-none focus:border-customOrange' />

                </div>
                <button
                    onClick={handleSendMessage}
                    className='m-3 bg-customOrange hover:ring-4 ring-customOrange/30 hover:shadow-lg hover:bg-customOrange600 px-16 py-3 rounded-full text-white'>
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

            </motion.div>
            {showNotification && (
                <motion.div
                    initial={{ opacity: 0, y: 90 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 90 }}
                    className="transition-all duration-700 fixed bottom-12 left-auto bg-green-500 text-white px-8 py-4 rounded shadow-lg"
                >
                    Message envoyé avec succès !
                </motion.div>
            )}
        </section>
    )
}

export default Contacter