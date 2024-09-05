"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import AppBar from './components/app-bar';
import Presentation from './components/presentation';
import Mission from './components/mission';
import Causes from './components/causes';
import Videos from './components/videos';
import CommentAider from './components/comment-aider';
import Fondateur from './components/a-propos';
import Galery from './components/galery';
import { useEffect } from 'react';
import Contacter from './components/contacter';

export default function Home() {

  useEffect(() => {
    const scollButton = document.getElementById('scrollButton');
    if (scollButton) {
      scollButton.addEventListener('click', function () {
        scrollToBottom(60000); // Durée de 2000ms (2 secondes) pour le défilement
      });
    }


    function scrollToBottom(duration: number) {
      const totalHeight = document.body.scrollHeight;
      const currentPosition = window.pageYOffset;
      const distance = totalHeight - currentPosition;
      const startTime = performance.now();

      function scrollStep(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const scrollFraction = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, currentPosition + (distance * scrollFraction));

        if (elapsedTime < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    }

    return () => {

    }
  }, [])



  return (
    <main className="">
      <AppBar></AppBar>
      <Presentation />

      <Mission></Mission>
      <Causes></Causes>
      <div className='h-24'></div>
      <Videos></Videos>
      <CommentAider></CommentAider>
      <a href='#presentation'>
        <div className=' flex justify-center items-center content-center cursor-pointer fixed bottom-4 right-4 bg-customOrange w-12 h-12'>
          <img src="/icons/go-arrow.png" alt="" className='-rotate-90 h-6' />
        </div>
      </a>
      <div className="bg-[url('/banner.jpg')] ">
        <div className='bg-black/60 h-full w-full py-16 md:py-34 px-4 md:px-9'>
          <p className=' text-2xl md:text-4xl leading-relaxed font-roboto text-white font-bold text-center'>Devenez le <span className='font-bold text-customOrange'>père</span>  d'un orphelin, le <span className='font-bold text-customOrange'>défenseur</span>  d'une veuve, le <span className='font-bold text-customOrange'>soutien</span> d'un handicapé</p>
        </div>

      </div>
      <Fondateur></Fondateur>
      <Galery></Galery>
      <Contacter></Contacter>
    </main>
  );
}
