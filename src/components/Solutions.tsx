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
        title: "Événements & Réceptions",
        description: "Mariages, anniversaires, séminaires… Optez pour un menu bio qui ravira vos convives avec des plats originaux et colorés.",
        plus: "Nous adaptons nos recettes selon vos besoins, vos envies et la saison. Buffet, service à l’assiette ou finger food : à vous de choisir.",
        image: "/images/maakouda.jpg",
    },
    {
        title: "Repas du Quotidien",
        description: "Découvrez nos plats sains et équilibrés, livrés directement chez vous.",
        plus: "Idéal pour les familles, les étudiants et les actifs pressés. Nos plats changent chaque semaine.",
        image: "/images/saladeAgrumes.jpg",
    },
    {
        title: "Traiteur Entreprise",
        description: "Offrez à vos collaborateurs une alimentation bio et responsable.",
        plus: "Des formules adaptées à vos événements pros : séminaires, repas d’équipe, plateaux repas ou buffet froid.",
        image: "/images/soupeHarira.jpg",
    },
];

const Solutions: React.FC = () => {
    const [selected, setSelected] = useState<Solution | null>(null);

    return (
        <section className="bg-[#98B7C9] py-16 px-6 relative">
            <div className="container mx-auto">
                {/* Titre */}
                <h2 className="text-[#F7F6F0] text-[4rem] font-bold text-center mb-8">
                    Le goût du bio, livré chez vous
                </h2>
                <p className="text-[#F7F6F0] text-xl text-center pb-12">
                    "Chez Kadibio, nous croyons que bien manger ne devrait pas être un luxe. Nos chefs concoctent chaque jour des plats savoureux, équilibrés et respectueux de l’environnement."
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
