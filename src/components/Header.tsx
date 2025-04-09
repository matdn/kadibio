import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full text-[#F7F6F0] z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-[#F7F6F0]">
                    Kadibio
                </Link>

                {/* Menu de navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/about" className="hover:text-[#F7F6F0] transition">
                        accueil
                    </Link>
                    <Link href="/services" className="hover:text-[#F7F6F0] transition">
                        traiteur
                    </Link>
                    <Link href="/menu" className="hover:text-[#F7F6F0] transition">
                        menu
                    </Link>
                    <Link href="/contact" className="hover:text-[#F7F6F0] transition">
                        galerie
                    </Link>
                    <Link href="/contact" className="hover:text-[#F7F6F0] transition">
                        contact
                    </Link>
                </nav>

                {/* Bouton */}
                <Link
                    href="/reservation"
                    className="hidden md:block border-[#FEF8DF] border bg-[#F7F6F0] text-black px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Réserver
                </Link>

                {/* Menu mobile */}
                <div className="md:hidden">
                    <button className="text-2xl">&#9776;</button> {/* Icône burger */}
                </div>
            </div>
        </header>
    );
};

export default Header;
