"use client";
import Image from "next/image";

export default function CulinaryIntro() {
    return (
        <section className="bg-[#F7F6F0] min-h-screen w-full flex flex-col md:flex-row">
            {/* Colonne gauche - statique */}
            <div className="w-full bg-[#F7F6F0] md:w-1/3 p-8 md:p-12 flex items-center justify-center">
                <div className="text-left text-[#222220]">
                    <p className="text-6xl uppercase leading-snug">
                        Bienvenue<br />
                        dans notre<br />
                        univers <span className="font-bold">culinaire</span>
                    </p>
                </div>
            </div>

            {/* Colonne droite - scrollable */}
            <div className="w-full md:w-2/3 h-[100vh] overflow-y-auto p-6 md:p-12 space-y-12">
                {/* Bloc 1 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Une histoire de passion et de transmission</h3>
                    <p className="text-sm leading-relaxed text-[#222220]">
                        Depuis des générations, les recettes de nos mères se transmettent avec minutie et délicatesse.
                        Chaque plat raconte une histoire, un savoir-faire ancestral enrichi par une recherche constante d’excellence.
                        Diplômée de l’École Ducasse, forte de plus de 20 ans d’expérience dans le commerce bio et naturopathe de formation,
                        elle met tout son savoir et son amour de la cuisine au service d’une expérience unique.
                    </p>
                </div>

                {/* Bloc 2 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Une cuisine d’exception, entre tradition et modernité</h3>
                    <p className="text-sm leading-relaxed text-[#222220]">
                        ( Ici, le bio n’est pas une tendance, mais une évidence. )
                        Tous nos produits sont frais, de saison et 100% biologiques, soigneusement sélectionnés pour leur qualité exceptionnelle.
                        Nos créations sont une fusion subtile entre la richesse des saveurs méditerranéennes,
                        notamment de la cuisine marocaine et l’élégance de la gastronomie française, dans une approche saine et raffinée.
                    </p>
                </div>

                {/* Image + texte */}
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full max-w-md rounded-xl overflow-hidden">
                        <Image
                            src="/images/dessert_kadibio.jpg" // adapte le chemin à ton image
                            alt="Dessert bio raffiné"
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Bloc 3 */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Un voyage culinaire sur-mesure</h3>
                    <p className="text-sm leading-relaxed text-[#222220]">
                        Que ce soit pour un dîner en tête-à-tête, un repas en famille, un événement spécial ou une grande réception,
                        nous avons à cœur de vous offrir bien plus qu’un simple repas : une véritable expérience culinaire.
                        Grâce à notre service de traiteur, de livraison et de cheffe à domicile, nous vous accompagnons dans tous vos moments précieux
                        avec des plats savoureux, préparés avec passion et exigence. <br /><br />
                        Vivez l’excellence du bio, le plaisir du fait main et l’émotion du goût.
                    </p>
                </div>
            </div>
        </section>
    );
}
