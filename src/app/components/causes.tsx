import React from 'react'
import Ligne from './widgets/ligne'
import Link from 'next/link';


class Cause {
    image: string;
    titre: string;
    description: string;

    constructor({ image, titre, description }: { image: string, titre: string, description: string }) {
        this.description = description;
        this.image = image;
        this.titre = titre;
    }
}

const Causes = () => {

    const causes = [
        new Cause({ image: '/scolarise.jpg', titre: 'Scolariser', description: "assurer l'accès à l'éducation des orphelins et des démunis, pour leur permettre de briser le cycle de la pauvreté et de bâtir un avenir autonome. Nous croyons que chaque enfant mérite une chance égale de réussir, quel que soit son parcours." }),
        new Cause({ image: '/widow.webp', titre: 'Défendre', description: "défendre les droits des veuves, souvent vulnérables face à l’injustice et à la discrimination. Nous nous engageons à leur offrir un soutien juridique, social et moral afin qu'elles puissent retrouver leur dignité et exercer pleinement leurs droits." }),
        new Cause({ image: '/handicap.jpg', titre: 'Soutenir', description: "Soutenir les personnes en situation de handicap en leur offrant les ressources et l'accompagnement nécessaires pour vivre avec dignité et autonomie. Nous œuvrons pour une société inclusive où chacun, indépendamment de ses capacités, a les mêmes opportunités de s'épanouir et de contribuer pleinement." }),



    ]
    return (
        <section id="mission" className='flex flex-col items-center mt-8'>
            <div className='max-w-[80rem] mt-8'>

                <div className="text-zinc-950 justify-center text-center">
                    <h1 className="font-roboto text-3xl md:text-5xl font-bold text-customOrange">
                        Nos causes
                    </h1>
                    <Ligne></Ligne>
                    <div className='flex flex-wrap justify-center'>

                        {
                            causes.map((element) =>
                            (
                                <div key={element.titre} className='w-80 shadow-xl m-6 overflow-hidden'>
                                    <img src={element.image} alt="" className='w-80 h-60 object-cover hover:scale-105 transition-all duration-300' />
                                    <div className='p-6'>
                                        <p className='font-roboto font-semibold text-lg'>{element.titre}</p>
                                        <p>{element.description} </p>
                                        <Button></Button>
                                    </div>

                                </div>

                            )

                            )
                        }
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Causes




const Button = () => {
    return (
        <Link href={"/paiement"}> <button className='m-3 bg-customOrange hover:ring-4 ring-customOrange/30 hover:shadow-lg px-16 py-3 rounded-full text-white'>
            Donner
        </button>
        </Link>
    )
}

