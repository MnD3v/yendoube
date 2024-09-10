"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import AppBar from '../components/app-bar';
import { motion } from 'framer-motion';

const Paiement = () => {

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const router = useRouter();

    const date = Date.now().toString(32);

    const [amountError, setAmountError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)


    const [isLoading, setLoading] = useState(false)



    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [identifier, setIdentifier] = useState(date);
    const [network, setNetwork] = useState('FLOOZ'); // ou 'TMONEY'
    const [loading, setIfLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const handlePayment = async function (): Promise<string> {
        setLoading(true);
        const res = await fetch('/api/paiement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth_token: '13c195ab-00aa-41a5-a8a5-5668cd77a623', // à remplacer par ta clé API
                phone_number: phoneNumber,
                amount,
                description: 'Paiement test', // Optionnel
                identifier,
                network,
            }),
        });

        const data = await res.json();
        console.log("0");
        console.log(data)
        console.log("0");


        if (data.success) {
            setResponseMessage(`Paiement réussi. Référence: ${data.tx_reference}`);
        } else {
            setResponseMessage(`Erreur de paiement: ${data.error}`);
        }
        return data['tx_reference']
    };
    const handleVerification = async function (tx_reference: string): Promise<string> {
        console.log("handle-verification")
        console.log(tx_reference)
        setLoading(true);
        const res = await fetch('/api/check-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                auth_token: '13c195ab-00aa-41a5-a8a5-5668cd77a623', // à 
                tx_reference: tx_reference
            }),
        });

        const data = await res.json();

        if (data.success) {
            setResponseMessage(`Paiement réussi. Référence: ${data.tx_reference}`);
        } else {
            setResponseMessage(`Erreur de paiement: ${data.error}`);
        }

        console.log("after data")

        return data["status"]

    };

    const checkPayementStatus = async (tx_reference: string) => {
        console.log("exectué")
        handleVerification(tx_reference).then((status) => {
            if (status === '0') {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current)

                }
            }
        });
    }

    useEffect(() => {


        return () => {
            if (
                intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])


    return (
        <div className='m-6'>
            {
                isLoading && (
                    <div className='fixed flex flex-col items-center justify-center w-screen h-full inset-0 bg-black/40 z-auto p-0 m-0'>
                        <div className="loader"></div>

                    </div>
                )
            }


            <AppBar></AppBar>
            <div className='flex flex-col items-center mt-32 '>
                <p className='font-extralight text-3xl text-customOrange'>Merci d'avance</p>
                <br />
                <h1 className='font-roboto text-3xl md:text-5xl'>Paiement</h1>
                <h3 className='text-lg text-slate-700'>Informations personnelles</h3>
                <div className=' my-9 flex flex-col  max-w-[850px] px-2 py-6 md:p-9 md:bg-zinc-200'>
                    <div className=' md:grid grid-cols-2 gap-3'>
                        <div className='w-full'>

                            <p className='text-zinc-500 font-roboto font-semibold'>Votre nom</p>
                            <input type="text" placeholder='Votre nom' className='border-2 focus:border-1 focus:border-customOrange outline-none px-3 py-4 w-full' />
                        </div>

                        <div className='w-full my-4 md:my-0'>
                            <p className='text-zinc-500 font-roboto font-semibold'>Votre prénom</p>
                            <input type="text" placeholder='Votre prénom' className='border-2 focus:border-1 focus:border-customOrange outline-none px-3 py-4 w-full' />
                        </div>

                        <div className='bg-white p-1 border flex flex-row justify-between items-center col-span-2 h-16 mb-3 md:mb-0'>
                            <button onClick={() => {
                                setNetwork('FLOOZ')
                            }} className={`h-full w-1/2 ${network === 'FLOOZ' ? 'bg-customOrange' : 'bg-transparent'}  content-center justify-center text-center border-customOrange`}>
                                <motion.div >
                                    Flooz
                                </motion.div>
                            </button>
                            <button onClick={() => {
                                setNetwork('TMONEY')
                            }} className={`h-full w-1/2 ${network === 'TMONEY' ? 'bg-customOrange' : 'bg-transparent'}  content-center justify-center text-center`}>
                                <motion.div >
                                    Tmoney
                                </motion.div>
                            </button>


                        </div>
                        <div className='flex flex-col col-span-2'>
                            <div className='flex'>
                                <p className='px-4 py-4 bg-customOrange border-customOrange text-black border-2'>+228</p>
                                <input type="number" onChange={

                                    (event: any) => {
                                        setPhoneError(false)
                                        setPhoneNumber(event.target.value)
                                    }

                                } placeholder='Numéro de télephone' className='w-full right-2 border-2 focus:border-1 focus:border-customOrange outline-none px-3 h-16  ' />
                            </div>
                            {phoneError &&
                                (<p className='text-red-500'>Veuillez entrer un numero de télephone valide</p>)
                            }

                        </div>

                        <div className='flex flex-col col-span-2 my-4'>
                            <div className='flex'>
                                <p className='px-4 py-4 border-customOrange bg-customOrange text-black border-2'>FCFA</p>
                                <input type="number" onChange={

                                    (event: any) => {
                                        setAmountError(false)
                                        setAmount(event.target.value)
                                    }

                                } placeholder='montant' className='w-full right-2 border-2 focus:border-1 focus:border-customOrange outline-none px-3 h-16  ' />
                            </div>
                            {amountError &&
                                (<p className='text-red-500'>Veuillez entrer un montant valide</p>)
                            }

                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setAmountError(false)
                            setPhoneError(false)
                            if (phoneNumber.trim().length != 8) {
                                setPhoneError(true)
                                return
                            }
                            if (amount.trim() === '' || parseFloat(amount.trim()) < 200) {
                                setAmountError(true)
                                return
                            }

                            setAmount(amount.trim())
                            handlePayment().then((tx_reference) => {

                                intervalRef.current = setInterval(() => checkPayementStatus(tx_reference), 5000);
                                console.log("1")
                                console.log(tx_reference)
                                console.log("2")

                            })




                        }}
                        className='w-full my-4 bg-black hover:ring-4 ring-customOrange/30 hover:shadow-lg hover:bg-customOrange600 px-16 py-5  text-white'>
                        Donner
                    </button>
                    {/* </Link> */}
                </div>


            </div>
        </div>
    )
}

export default Paiement