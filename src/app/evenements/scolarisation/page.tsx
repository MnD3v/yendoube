import AppBar from '@/app/components/app-bar'
import React from 'react'

const Scolarisation = () => {
    return (
        <div>
            <AppBar></AppBar>
            <div className='my-24 md:mt-36 flex flex-wrap justify-center'>
                <div className='shadow-xl max-w-[600px] mx-4'>
                    <img src="https://borgenproject.org/wp-content/uploads/10-Facts-about-Orphans-in-South-Africa-1.jpg" alt="" className='w-full h-[500px] object-cover max-sm:h-[300px]' />
                    <div className='p-4'>
                        <p className='font-roboto pt-4'>21 Janvier 2021</p>
                        <h2 className='font-roboto text-2xl md:text-4xl my-3'>Scolarisation des enfants</h2>
                        <p>
                            Le 15 août 2024, notre association a réalisé un rêve pour 50 orphelins grâce à un projet de scolarisation qui a marqué un tournant dans leur vie. Ce jour-là, ces enfants, qui avaient été privés de la chaleur d’un foyer, ont fait leur rentrée dans des écoles de qualité, équipés de tout le nécessaire pour réussir.

                            Grâce à la générosité de nos donateurs et au travail acharné de nos bénévoles, nous avons pu offrir à chaque enfant un kit complet comprenant des uniformes, des fournitures scolaires et des bourses couvrant leurs frais de scolarité pour l’année scolaire 2024-2025. Ce soutien a permis de garantir que chaque enfant puisse se concentrer sur ses études sans se soucier des coûts associés à l’éducation.

                            La cérémonie de remise des kits a eu lieu dans les locaux de notre association, en présence de représentants locaux, de membres de notre équipe et des familles des enfants. Les visages des enfants, illuminés par des sourires de joie et de soulagement, ont été un témoignage émouvant de l'impact de cette initiative. De nombreux parents et tuteurs ont exprimé leur gratitude, reconnaissant la chance que leurs enfants avaient désormais d’accéder à une éducation digne et enrichissante.

                            Outre les aspects matériels, cette initiative a également inclus des séances d'accompagnement psychologique pour aider les enfants à surmonter les défis émotionnels liés à leur situation. Nous avons mis en place des groupes de soutien et des sessions de tutorat pour les aider à s’intégrer pleinement dans leur nouvel environnement scolaire.

                            En offrant cette opportunité éducative, nous avons non seulement donné à ces enfants les outils pour un avenir meilleur, mais nous avons aussi renforcé notre conviction que chaque enfant mérite une chance de briller, peu importe son passé. Ensemble, nous œuvrons pour un monde où chaque orphelin peut se lever avec espoir et détermination.


                        </p>
                    </div>
                </div>
                <div>
                    <h3 className='font-roboto text-customOrange mt-3 md:mt-0'>Publication récentes</h3>
                    <div className='h-px w-36 bg-customOrange my-4'></div>
                    <br />
                    <p className='font-roboto tracking-widest text-zinc-700 '>Soutient aux sans abris</p>
                    <div className='h-px w-72 bg-zinc-300 my-4'></div>
                    <p className='font-roboto tracking-widest text-zinc-700 '>Nouriture pour les affamés</p>
                    <div className='h-px w-72 bg-zinc-300 my-4'></div> <p className='font-roboto tracking-widest text-zinc-700 '>Cadeaux de noel</p>
                    <div className='h-px w-72 bg-zinc-300 my-4'></div> <p className='font-roboto tracking-widest text-zinc-700 '>Louer Dieu ensemble</p>
                    <div className='h-px w-72 bg-zinc-300 my-4'></div>

                </div>
            </div>
        </div>
    )
}

export default Scolarisation