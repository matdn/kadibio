import React from "react";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";

const offres = {
    receptions: {
        title: "Événements & Réceptions",
        image: "/images/saladeVitalité.jpg",
        description:
            "Mariages, anniversaires, séminaires… Optez pour un menu bio qui ravira vos convives avec des plats originaux et colorés.",
        plus:
            "Nous adaptons nos recettes selon vos besoins, vos envies et la saison. Buffet, service à l’assiette ou finger food : à vous de choisir.",
    },
    entreprise: {
        title: "Offres Entreprises",
        image: "/images/maakouda.jpg",
        description:
            "Régalez vos équipes lors de déjeuners pros, séminaires ou événements d’entreprise avec notre cuisine engagée et locale.",
        plus:
            "Nos plats sont conçus pour être équilibrés, savoureux et faciles à servir. Une pause gourmande et responsable.",
    },
    anniversaires: {
        title: "Anniversaires & Moments de vie",
        image: "/images/crumble.jpg",
        description:
            "Fêtez vos moments les plus précieux avec une cuisine généreuse, maison et pleine de fraîcheur.",
        plus:
            "Des menus adaptés à tous les âges, à toutes les préférences et à toutes les saisons. Et toujours avec des produits bio.",
    },
};

export default function OffrePage({ params }: { params: { slug: string; }; }) {
    const offre = offres[params.slug as keyof typeof offres];

    if (!offre) {
        return (
            <div className="text-center py-20 text-xl text-gray-700">
                Offre introuvable.
            </div>
        );
    }

    return (
        <main className="bg-[#B3C7D6] min-h-screen py-16 px-4 flex flex-col items-center text-white">
            <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden text-black shadow-xl">
                {/* Image */}
                <div className="w-full h-[400px] relative">
                    <Image
                        src={offre.image}
                        alt={offre.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-10 space-y-6">
                    <h1 className="text-4xl font-bold text-slate-700">{offre.title}</h1>
                    <p className="text-lg leading-relaxed">{offre.description}</p>
                    <p className="text-md text-gray-600">{offre.plus}</p>

                    <div className="pt-8">
                        <ContactSection />
                    </div>
                </div>
            </div>
        </main>
    );
}
