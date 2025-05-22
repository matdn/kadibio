import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
    return (
        <section className="bg-[#98B7C9] py-16 px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#F7F6F0] rounded-lg shadow-lg overflow-hidden p-6">
                {/* Image */}
                <div className="w-full md:w-1/2 flex items-center justify-start">
                    <Image
                        src="/images/kadijaChef.png"
                        alt="Chef préparant un plat bio"
                        width={500}
                        height={700}
                        className="h-full object-contain"
                    />
                </div>

                {/* Texte */}
                <div className="w-full md:w-1/2 p-4 md:p-8">
                    <h2 className="text-4xl font-bold mb-4">À propos de Kadibio</h2>
                    <p className="text-gray-700 text-xl">
                        Ici, le bio n’est pas une tendance, mais une évidence.  Tous nos produits sont frais, de saison et 100% biologiques, soigneusement sélectionnés pour leur qualité exceptionnelle. <br /> <br />Nos créations sont une fusion subtile entre la richesse des saveurs méditerranéennes,
                        notamment de la cuisine marocaine et l’élégance de la gastronomie française, dans une approche saine et raffinée.
                    </p>

                    <Link href="/about" className="mt-4 inline-block text-black pt-[8rem]  font-semibold">
                        En savoir plus
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
