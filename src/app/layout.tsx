import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { motion } from "framer-motion";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/logo-icon.png"
  },
  title: "Yendoubé App",
  description: "Help orphan site",
  openGraph: {
    type: 'website',
    url: 'https://yendoube.vercel.app/', // Remplace par l'URL de ton site
    title: 'Aide aux démunis',
    description: "Découvrez la plateforme d'aide aux défavorisés.",
    images: [
      {
        url: 'https://i.ibb.co/zXsTRzL/Group-2-5.png', // URL de ton image
        width: 1200,
        height: 630,
        alt: 'Image de partage pour les réseaux sociaux',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}

        <footer>
          <div className="bg-zinc-800 w-full flex flex-col justify-center items-center p-12">
            <div className=" max-w-96 flex flex-col items-center">

              <img src="./logo.png" alt="" className="w-32 md:w-44" />
              <br />
              <p className="text-white text-center">Nous nous engageons à défendre les veuves, à scolariser les orphelins et à soutenir les personnes handicapées. Notre mission est de garantir à chacun une chance égale de vivre dignement, en leur offrant protection, éducation et accompagnement. Ensemble, construisons un monde plus juste et inclusif, où chaque individu peut s'épanouir, quelles que soient les épreuves de la vie.</p>
              <div className="flex justify-center">
                <a href="https://facebook.com"

                  target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                    <img src="./icons/facebook.png" alt="" className="w-12 object-contain" />
                  </div></a>
                <a href="https://linkedin.com" target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                  <img src="./icons/linkedin.png" alt="" className="w-12" />
                </div>
                </a>
                <a href="https://twitter.com"

                  target="_blank"> <div className="bg-white h-16 w-16 rounded-full p-4 flex justify-center m-2">
                    <img src="./icons/twitter.png" alt="" className="w-12" />
                  </div>
                </a>


              </div>
            </div>
            <div className="bg-zinc-400 h-px w-[90%] my-9">

            </div>
            <p className="text-white font-mono">
              Copyright ©, powered by zezui
            </p>
            <br />
          </div>
        </footer>
      </body>

    </html >
  );
}
