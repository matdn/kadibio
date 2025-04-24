import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            {/* Bande supérieure réseaux sociaux */}
            <div className="bg-[#98B7C9] text-black py-4 px-6 flex justify-between items-center text-sm font-medium uppercase tracking-wide">
                <a href="https://www.tiktok.com/@khadi_cheffe?_t=ZN-8vlqSnFyjd0&_r=1"><span>tik tok</span></a>
                <span className="text-lg font-bold">Suivez-nous</span>
                <a href="https://www.instagram.com/cheffekadi?igsh=M2h3MDgzYm85dXQy"><span>instagram</span></a>
            </div>

            {/* Corps du footer */}
            <div className="bg-[#222220] text-white py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Coordonnées */}
                <div className="space-y-2 text-[#98B7C9] text-sm leading-relaxed">
                    <p>+33 6 12 34 56 78</p>
                    <p>hello@kadibio.com</p>
                    <p>1 rue des saveurs, Paris 75010</p>
                </div>

                {/* Navigation */}
                <nav className="space-y-2 text-white text-sm">
                    <Link href="/" className="block hover:underline">accueil</Link>
                    <Link href="/traiteur" className="block hover:underline">traiteur</Link>
                    <Link href="/menu" className="block hover:underline">menu</Link>
                    <Link href="/galerie" className="block hover:underline">galerie</Link>
                    <Link href="/contact" className="block hover:underline">contact</Link>
                </nav>

                {/* Logo */}
                <div className="flex justify-start md:justify-end font-norman">
                    <span className="text-5xl tracking-widest text-white font-norman">
                        KADIBIO
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
