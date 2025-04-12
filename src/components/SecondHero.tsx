"use client";

import React from "react";
import Image from "next/image";

interface SecondaryHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

const SecondaryHero = ({ title, subtitle, backgroundImage }: SecondaryHeroProps) => {
    return (
        <section className="relative w-full h-[80vh] overflow-hidden">
            <img
                src={backgroundImage}
                alt="Image de fond"
                className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-6">
                <h1 className="font-norman text-5xl md:text-7xl font-light">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default SecondaryHero;
