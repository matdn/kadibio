import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Solution {
    title: string;
    description: string;
    image: string;
    link: string;
}

const solutions: Solution[] = [
    {
        title: "Événements & Réceptions",
        description: "Mariages, anniversaires, séminaires... Optez pour un menu bio qui ravira vos convives.",
        image: "/images/maakouda.jpg", // Remplace avec le bon chemin d'image
        link: "/events",
    },
    {
        title: "Repas du Quotidien",
        description: "Découvrez nos plats sains et équilibrés, livrés directement chez vous.",
        image: "/images/saladeAgrumes.jpg",
        link: "/daily",
    },
    {
        title: "Traiteur Entreprise",
        description: "Offrez à vos collaborateurs une alimentation bio et responsable.",
        image: "/images/soupeHarira.jpg",
        link: "/business",
    },
];

const Solutions: React.FC = () => {
    return (
        <section className="bg-[#98B7C9] py-16 px-6">
            <div className="container mx-auto">
                {/* Titre */}
                <h2 className="text-[#F7F6F0] text-[4rem] font-bold text-center text-white mb-8">
                    Le goût du bio, livré chez vous
                </h2>
                <p className="text-[#F7F6F0] text-xl text-center pb-12">"Chez Kadibio, nous croyons que bien manger ne devrait pas être un luxe. Nos chefs concoctent chaque jour des plats savoureux, équilibrés et respectueux de l’environnement."</p>
                {/* Cartes */}
                <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution, index) => (
                        <div key={index} className="rounded-lg border border-[#F7F6F0] border-2 overflow-hidden">
                            <div className="relative h-56">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-6 bg-[#98B7C9]">
                                <h3 className="text-lg font-bold">{solution.title}</h3>
                                <p className="text-sm text-gray-700 pb-[2rem]">{solution.description}</p>
                                <Link href={solution.link} className=" block text-[#F7F6F0] font-semibold">
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
