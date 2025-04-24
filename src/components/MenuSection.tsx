"use client";

import { Button } from "@/components/ui/button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import menuData from "../../public/datas/plats_avril_septembre.json";

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

function extractFirstPlats(data: Category[], count: number): Plat[] {
    const plats: Plat[] = [];
    data.forEach((category) => {
        category.items.forEach((item) => {
            item.plats.forEach((plat) => {
                if (plats.length < count) plats.push(plat);
            });
        });
    });
    return plats;
}

export default function MenuSection() {
    const [menu, setMenu] = useState<Category[]>([]);
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        mode: "snap",
        slides: {
            perView: 2.2,
            spacing: 15,
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 3.5, spacing: 20 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 4.2, spacing: 24 },
            },
        },
    });

    useEffect(() => {
        setMenu(menuData);
    }, []);

    const previewPlats = extractFirstPlats(menuData, 10);
    const borderColors = ["#222220", "#98B7C9", "#BAA9C0"];

    return (
        <section className="bg-[#F7F6F0] text-center py-16">
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#98B7C9]">Nos Menus</h2>
            <p className="text-[#98B7C9] mt-4 max-w-2xl mx-auto text-base md:text-lg">
                Laissez-vous inspirer par nos créations gourmandes ! Découvrez en images nos plats bio,
                préparés avec passion et savoir-faire, pour éveiller vos papilles.
            </p>

            <a href="/menu">
                <button className="mt-6 px-6 py-2 bg-[#98B7C9] text-[#222220] rounded-full text-sm font-medium hover:bg-[#222220] hover:text-[#F7F6F0] transition">
                    voir le menu
                </button>
            </a>

            {/* Slider */}
            <div className="mt-12 text-left">
                <div ref={sliderRef} className="keen-slider px-6 mt-6">
                    {previewPlats.map((plat, index) => (
                        <div key={plat.id} className="keen-slider__slide">
                            <div
                                className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 border-[2px]"
                                style={{ borderColor: borderColors[index % 3] }}
                            >
                                <img
                                    src={plat.image}
                                    alt={plat.name}
                                    className="w-full h-48 object-cover"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        target.onerror = null;
                                        target.src = "/images/placeholder.jpg";
                                    }}
                                />
                                <div className="p-4">
                                    <h4 className="text-md font-bold text-[#222220]">{plat.name}</h4>
                                    <p className="text-sm text-gray-600 mt-2">{plat.description}</p>
                                    <div className="mt-4">
                                        <a
                                            href="/contact"
                                            className="inline-flex items-center text-sm font-semibold text-[#222220] hover:underline group"
                                        >
                                            commander
                                            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
