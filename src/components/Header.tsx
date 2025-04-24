"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const Header: React.FC = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navItems = [
        { label: "Accueil", href: "/" },
        { label: "Traiteur", href: "/about" },
        { label: "Menu", href: "/menu" },
        { label: "Galerie", href: "/galerie" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#F7F6F0]/80 text-[#222220] border-b border-[#EAE9E4]">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-semibold tracking-wide uppercase">
                    Kadibio
                </Link>

                {/* Navigation desktop */}
                <nav className="hidden md:flex space-x-6 items-center text-sm font-medium uppercase tracking-wide">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:underline underline-offset-4 transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Bouton de réservation */}
                <Link
                    href="/reservation"
                    className="hidden border-1 border-black md:block bg-[#FEF8DF] text-[#222220] px-4 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-[#FEF8DF] transition"
                >
                    Réserver
                </Link>

                {/* Menu mobile */}
                <div className="md:hidden">
                    <button
                        className="text-2xl"
                        onClick={() => setIsMobileOpen(true)}
                    >
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Menu mobile plein écran */}
            {isMobileOpen && (
                <div className="fixed h-[100dvh] inset-0 bg-[#F7F6F0] z-50 flex flex-col items-center justify-center space-y-8 text-xl text-[#222220]">
                    <button
                        className="absolute top-6 right-6 text-2xl"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="text-2xl hover:underline underline-offset-4"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/reservation"
                        className="border border-black px-6 py-2 rounded-full font-semibold"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Réserver
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
