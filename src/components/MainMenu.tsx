"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactSection from "./ContactSection";

interface Plat {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface SubCategory {
    subcategory: string;
    plats: Plat[];
}

interface Category {
    category: string;
    items: SubCategory[];
}

const MainMenu = () => {
    const [menu, setMenu] = useState<Category[]>([]);
    const [indexes, setIndexes] = useState<{ [key: number]: number; }>({});
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

    useEffect(() => {
        fetch("/datas/plats_avril_septembre.json")
            .then((res) => res.json())
            .then((data) => setMenu(data));
    }, []);

    const handleNext = (i: number, total: number) => {
        setIndexes((prev) => ({
            ...prev,
            [i]: ((prev[i] ?? 0) + 1) % total,
        }));
    };

    const handlePrev = (i: number, total: number) => {
        setIndexes((prev) => ({
            ...prev,
            [i]: ((prev[i] ?? 0) - 1 + total) % total,
        }));
    };

    const selectedCategory = menu[selectedCategoryIndex];
    const allPlats = selectedCategory?.items.flatMap((sub) => sub.plats) || [];
    const chunks = Array.from(
        { length: Math.ceil(allPlats.length / 4) },
        (_, i) => allPlats.slice(i * 4, i * 4 + 4)
    );
    const index = indexes[selectedCategoryIndex] ?? 0;
    const isReversed = selectedCategoryIndex % 2 === 1;

    return (
        <section className="py-16 px-4 space-y-16 bg-[#F7F6F0]">
            {/* Tuiles de navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 h-[20dvh] grayscale-100 gap-4 max-w-5xl mx-auto">
                {menu.map((cat, i) => {
                    const image = cat.items[0]?.plats[0]?.image || "/images/IMG_2128.jpeg";
                    const isActive = selectedCategoryIndex === i;

                    return (
                        <button
                            key={i}
                            onClick={() => setSelectedCategoryIndex(i)}
                            className={cn(
                                "relative rounded-xl overflow-hidden shadow group transition border-1",
                                isActive ? "border-black" : "border-transparent hover:border-black"
                            )}
                        >
                            <img
                                src={image}
                                alt={cat.category}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                onError={(e) => {
                                    const target = e.currentTarget;
                                    target.onerror = null;
                                    target.src = "/images/IMG_2128.jpeg";
                                }}
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Texte */}
                            <p className="absolute bottom-4 left-4 text-lg text-white font-semibold">
                                {cat.category}
                            </p>
                        </button>

                    );
                })}
            </div>

            {/* Section sélectionnée */}
            {selectedCategory && (
                <div className="space-y-8 p-18">
                    <div className="text-center space-y-2">
                        <h2 className="text-4xl font-bold text-slate-500">{selectedCategory.category}</h2>
                        <p className="text-muted-foreground text-sm">
                            Découvrez nos {selectedCategory.category.toLowerCase()} soigneusement préparés avec des produits frais et bio.
                        </p>
                    </div>

                    <div className={cn("grid grid-cols-1 md:grid-cols-5 gap-6 items-start")}>
                        {isReversed ? (
                            <>
                                {/* Grille de plats */}
                                <div className="col-span-3 h-full">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {chunks[index]?.map((plat) => (
                                            <div
                                                key={plat.id}
                                                className="bg-[#F7F6F0] rounded-xl p-4 flex flex-col justify-between shadow border-2 border-[#98B7C9] h-full"
                                            >
                                                <div>
                                                    <h4 className="font-bold text-lg text-black mb-2">{plat.name}</h4>
                                                    {plat.description && (
                                                        <p className="text-sm text-gray-600">{plat.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <div className="flex gap-2">
                                            {chunks.map((_, dotIndex) => (
                                                <span
                                                    key={dotIndex}
                                                    className={cn(
                                                        "h-2 w-2 rounded-full",
                                                        dotIndex === index ? "bg-black" : "bg-gray-300"
                                                    )}
                                                ></span>
                                            ))}
                                        </div>
                                        {chunks.length > 1 && (
                                            <div className="flex gap-4">
                                                <button onClick={() => handlePrev(selectedCategoryIndex, chunks.length)}>
                                                    <ChevronLeft />
                                                </button>
                                                <button onClick={() => handleNext(selectedCategoryIndex, chunks.length)}>
                                                    <ChevronRight />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Grande image */}
                                <div className="col-span-2 h-full">
                                    <img
                                        src={allPlats[0]?.image || "/images/IMG_2128.jpeg"}
                                        alt={selectedCategory.category}
                                        className="rounded-xl object-cover w-full aspect-square h-full"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.onerror = null;
                                            target.src = "/images/IMG_2128.jpeg";
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Grande image */}
                                <div className="col-span-2 h-full">
                                    <img
                                        src={allPlats[0]?.image || "/images/IMG_2128.jpeg"}
                                        alt={selectedCategory.category}
                                        className="rounded-xl object-cover w-full aspect-square h-full"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.onerror = null;
                                            target.src = "/images/IMG_2128.jpeg";
                                        }}
                                    />
                                </div>

                                {/* Grille de plats */}
                                <div className="col-span-3 h-full">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {chunks[index]?.map((plat) => (
                                            <div
                                                key={plat.id}
                                                className="bg-[#F7F6F0] rounded-xl p-4 flex flex-col justify-between shadow border-2 border-[#98B7C9] h-full"
                                            >
                                                <div>
                                                    <h4 className="font-bold text-lg text-black mb-2">{plat.name}</h4>
                                                    {plat.description && (
                                                        <p className="text-sm text-gray-600">{plat.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-between items-center pt-4">
                                        <div className="flex gap-2">
                                            {chunks.map((_, dotIndex) => (
                                                <span
                                                    key={dotIndex}
                                                    className={cn(
                                                        "h-2 w-2 rounded-full",
                                                        dotIndex === index ? "bg-black" : "bg-gray-300"
                                                    )}
                                                ></span>
                                            ))}
                                        </div>
                                        {chunks.length > 1 && (
                                            <div className="flex gap-4">
                                                <button onClick={() => handlePrev(selectedCategoryIndex, chunks.length)}>
                                                    <ChevronLeft />
                                                </button>
                                                <button onClick={() => handleNext(selectedCategoryIndex, chunks.length)}>
                                                    <ChevronRight />
                                                </button>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            <ContactSection />
        </section>
    );
};

export default MainMenu;
