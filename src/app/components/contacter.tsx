"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import itemS from './utils/item'
import container from './utils/container'

const Contacter = () => {

    const [showNotification, setShowNotification] = useState(false);

    const [formData, setFormData] = useState({ name: '', message: '' });
    const newErrors = { name: '', message: '' };

    const [errors, setErrors] = useState(newErrors);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newErrors = { name: '', message: '' };

        if (!formData.name) {
            newErrors.name = "Nom Complet est requis.";
        }

        if (!formData.message) {
            newErrors.message = "Votre message est requis.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Traitement du formulaire ici
        }
    };


    return (
        <section className='my-16 flex flex-col items-center'>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                aria-required
                className='flex flex-col items-center max-w-[888px] content-center '>
                <motion.h1
                    // initial={{ opacity: 0, x: -100 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    variants={itemS(0.9)}
                    className='font-roboto text-3xl md:text-5xl'>Nous contacter</motion.h1>
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
                    <div className='mx-4'>
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            Nom Complet *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 w-full px-3 py-2 bg-zinc-50 text-white border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:border-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                            Votre message *
                        </label>
                        <textarea

                            id="message"
                            name="message"
                            required
                            className="mt-1 w-full px-3 py-2 bg-zinc-50 text-white border border-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:border-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}


                    </div>

                    <button
                        type="submit"
                        className=" mb-6 bg-zinc-600 text-white px-12 py-2 rounded hover:bg-zinc-800"
                    >
                        Envoyer
                    </button>
                </form>
                <h3 className='font-roboto text-customOrange'>Contacts</h3>
                <h4>Telephone</h4>
                <p>+228 90 14 40 43</p>
                <p>+228 90 90 90 90</p>
                <br />
                <h4>message</h4>
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