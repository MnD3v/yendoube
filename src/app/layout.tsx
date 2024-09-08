import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { motion } from "framer-motion";
import Footer from "@/footer";
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
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}

        <Footer></Footer>
      </body>

    </html >
  );
}
