"use client";

import React from "react";

const SecondHero = () => {
    return (
        <section className="header relative w-full h-[80vh] overflow-hidden">
            <img
                src="/images/saladeAgrumes.jpg"
                alt="Préparation d’un plat"
                className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <h1 className="font-norman text-6xl md:text-8xl font-light">notre <span className="font-norman">menu</span></h1>
            </div>
            <div className="absolute inset-0 bg-black/40 z-0" />
        </section>
    );
};

export default SecondHero;
