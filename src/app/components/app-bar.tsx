"use client"
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'



const AppBar = () => {

    const pathname = usePathname();
    const inPaiement = pathname != '/' ? true : false;


    const [menuIsOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const toggleMenu = () => {
        setIsOpen(!menuIsOpen)
    }

    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    return (
        <motion.div className=" bg-white fixed top-0 h-16 md:h-28 inset-0 flex flex-row justify-center px-10 py-8 z-10 shadow-md"
        >
            <div className='w-full max-w-[96rem] flex justify-between items-center'>
                <div className="cursor-pointer flex items-center">
                    <a href={inPaiement ? "/" : "#"}>
                        <img src="/logo.png" alt="" className="h-8 md:h-16" />
                    </a>

                </div>
                <button onClick={toggleMenu}>
                    <img src="/icons/menu.png" alt="" className='md:hidden h-4' />
                </button>

                {/* mobile menu */}
                {
                    menuIsOpen && (
                        <div ref={menuRef} className='md:hidden fixed right-0 top-[2.2rem] bg-white p-4 mx-2 shadow-lg'>
                            <ul className="">
                                <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <button onClick={toggleMenu} className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <a href={inPaiement ? "/" : "#presentation"}> Accueil</a></button></li>
                                <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <button onClick={toggleMenu} className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <a href={inPaiement ? "/" : "#mission"}> Mission</a></button></li>
                                <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"><button onClick={toggleMenu} className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all ">  <a href={inPaiement ? "/" : "#a-propos"}> A propos</a></button></li>
                                <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <button onClick={toggleMenu} className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <a href={inPaiement ? "/" : "#galerie"}> Galerie</a></button></li>
                                <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <button onClick={toggleMenu} className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <a href={inPaiement ? "/#contact" : "#contact"}> Contact</a></button></li>
                            </ul>
                        </div>
                    )
                }
                {/* mobile menu */}

                <ul className="max-md:hidden flex flex-row">
                    <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400 transition-all "> <a href={inPaiement ? "/" : "#presentation"}> Accueil</a></li>
                    <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <a href={inPaiement ? "/" : "#mission"}>Mission</a></li>
                    <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <a href={inPaiement ? "/" : "#a-propos"}> A propos</a></li>
                    <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <a href={inPaiement ? "/" : "#galerie"}> Galerie</a></li>
                    <li className=" px-3 py-2 text-zinc-950 hover:text-orange-400"> <a href={inPaiement ? "/" : "#contact"}> Contact</a></li>
                </ul>
            </div>
        </motion.div>
    )
}

export default AppBar