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
        fetch("/datas/plats.json")
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {menu.map((cat, i) => {
                    const image = cat.items[0]?.plats[0]?.image || "/images/placeholder.jpg";
                    const isActive = selectedCategoryIndex === i;

                    return (
                        <button
                            key={i}
                            onClick={() => setSelectedCategoryIndex(i)}
                            className={cn(
                                "rounded-xl overflow-hidden shadow group transition border-1",
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
                                    target.src = "/images/placeholder.jpg";
                                }}
                            />
                            <p className=" text-center text-lg text-[#F7F6F0] max-w-1/2 font-semibold relative left-2 bottom-12 w-auto">{cat.category}</p>
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
                                <div className="col-span-3 h-full">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {chunks[index]?.map((plat) => (
                                            <div
                                                key={plat.id}
                                                className="bg-[#F7F6F0] rounded-xl overflow-hidden h-full flex flex-col transition border-2"
                                            >
                                                <img
                                                    src={plat.image}
                                                    alt={plat.name}
                                                    className="w-full h-32 object-cover max-h-48"
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        target.onerror = null;
                                                        target.src = "/images/placeholder.jpg";
                                                    }}
                                                />
                                                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-sm">{plat.name}</h4>
                                                        {plat.description && (
                                                            <p className="text-sm text-gray-600">{plat.description}</p>
                                                        )}
                                                    </div>
                                                    <button className="text-black text-sm font-semibold mt-1">
                                                        En savoir plus
                                                    </button>
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
                                        <div className="flex gap-4">
                                            <button onClick={() => handlePrev(selectedCategoryIndex, chunks.length)}>
                                                <ChevronLeft />
                                            </button>
                                            <button onClick={() => handleNext(selectedCategoryIndex, chunks.length)}>
                                                <ChevronRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 h-full">
                                    <img
                                        src={allPlats[0]?.image}
                                        alt={selectedCategory.category}
                                        className="rounded-xl object-cover w-full aspect-square h-full"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.onerror = null;
                                            target.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-span-2 h-full">
                                    <img
                                        src={allPlats[0]?.image}
                                        alt={selectedCategory.category}
                                        className="rounded-xl object-cover w-full aspect-square h-full"
                                        onError={(e) => {
                                            const target = e.currentTarget;
                                            target.onerror = null;
                                            target.src = "/images/placeholder.jpg";
                                        }}
                                    />
                                </div>

                                <div className="col-span-3 h-full">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        {chunks[index]?.map((plat) => (
                                            <div
                                                key={plat.id}
                                                className="bg-[#F7F6F0] rounded-xl overflow-hidden h-full flex flex-col transition border-2"
                                            >
                                                <img
                                                    src={plat.image}
                                                    alt={plat.name}
                                                    className="w-full h-42 object-cover max-h-48"
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        target.onerror = null;
                                                        target.src = "/images/placeholder.jpg";
                                                    }}
                                                />
                                                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-sm">{plat.name}</h4>
                                                        {plat.description && (
                                                            <p className="text-sm text-gray-600">{plat.description}</p>
                                                        )}
                                                    </div>
                                                    <button className="text-black text-sm font-semibold">
                                                        En savoir plus
                                                    </button>
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
                                        <div className="flex gap-4">
                                            <button onClick={() => handlePrev(selectedCategoryIndex, chunks.length)}>
                                                <ChevronLeft />
                                            </button>
                                            <button onClick={() => handleNext(selectedCategoryIndex, chunks.length)}>
                                                <ChevronRight />
                                            </button>
                                        </div>
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
