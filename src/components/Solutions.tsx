"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Solution {
    title: string;
    description: string;
    plus: string;
    image: string;
}

const solutions: Solution[] = [
    {
        title: "Traiteur",
        description: " Faites vivre à vos invités une expérience gastronomique",
        plus: "Que ce soit pour un événement professionnel ou privé, nous créons des repas à la hauteur de vos attentes : <br/> -  Repas complets <br/>-  Buffets & Cocktails <br/>- Événements d’entreprise <br/>- Réceptions privées ",
        image: "/images/IMG_2128.jpeg",
    },
    {
        title: "Livraison",
        description: "Votre repas bio, prêt à déguster !",
        plus: "Passez commande, recevez-la en moins de 72h, et savourez nos plats faits maison en toute simplicité.",
        image: "/images/IMG_2239.jpeg",
    },
    {
        title: "Cheffe à domicile",
        description: "Laissez la magie opérer chez vous",
        plus: "Envie d’un dîner d’exception, cuisiné sous vos yeux ? KadiBio transforme votre cuisine en restaurant privé : Une expérience culinaire inoubliable, inspirée du mariage entre gastronomie française et méditerranéenne Un service chic et personnalisé Une cuisine raffinée, semi-gastronomique et ultra-fraîche",
        image: "/images/IMG_2598.jpeg",
    },
];

const Solutions: React.FC = () => {
    const [selected, setSelected] = useState<Solution | null>(null);

    return (
        <section className="bg-[#98B7C9] py-16 px-6 relative">
            <div className="container mx-auto">
                {/* Titre */}
                <h2 className="text-[#F7F6F0] underline underline-offset-[1rem] decoration-[3px] text-[4rem] font-bold text-center mb-8">
                    Nos Services – Un Traiteur Bio à votre mesure
                </h2>
                <h3 className="text-[2rem] font-bold text-center text-[#F7F6F0] mb-8">Un événement ? Un dîner ? Une célébration ?</h3>
                <p className="text-[#F7F6F0] text-xl text-center pb-12">
                    KadiBio s’occupe de tout pour vous régaler avec une cuisine 100% bio, raffinée et ultra-fraîche, livrée partout en Île-de-France. <br />
                    Nous cuisinons, nous livrons… et nous disparaissons ! Ou bien nous restons pour vous offrir un service traiteur clé en main avec prestation sur place. Et pour les occasions vraiment spéciales, nous vous proposons une expérience unique avec notre cheffe à domicile : un dîner préparé sous vos yeux, digne des plus belles tables.
                </p>

                {/* Cartes */}
                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-[#F7F6F0] border-2 overflow-hidden cursor-pointer hover:shadow-xl transition"
                            onClick={() => setSelected(solution)}
                        >
                            <div className="relative h-56">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 bg-[#98B7C9]">
                                <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                                <p className="text-sm text-white/80 pb-[2rem]">{solution.description}</p>
                                <span className="block text-[#F7F6F0] font-semibold underline">
                                    En savoir plus
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popin */}
            {selected && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                    <div className="bg-white max-w-3xl w-full rounded-xl overflow-hidden shadow-lg relative">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-4 text-black hover:scale-110 transition"
                        >
                            <X size={28} />
                        </button>

                        <div className="w-full h-[250px] relative">
                            <Image
                                src={selected.image}
                                alt={selected.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 space-y-4">
                            <h2 className="text-2xl font-bold text-[#222220]">{selected.title}</h2>
                            <p className="text-[#333]">{selected.description}</p>
                            <p className="text-sm text-gray-500">{selected.plus}</p>

                            <div className="flex justify-end gap-4 pt-4">
                                <button
                                    onClick={() => setSelected(null)}
                                    className="px-4 py-2 border border-black text-black rounded hover:bg-gray-100 transition"
                                >
                                    Fermer
                                </button>
                                <a
                                    href="https://wa.me/33600000000" // remplace par ton numéro WhatsApp ou ton lien de commande
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-[#222220] text-white rounded hover:bg-black transition"
                                >
                                    Commander
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Solutions;
