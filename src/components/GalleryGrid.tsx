"use client";

import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
    src: string;
    alt: string;
    ratio: string;
}

const GalleryGrid = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    useEffect(() => {
        fetch("/datas/galerie.json")
            .then((res) => res.json())
            .then((data: GalleryImage[]) => setImages(data));
    }, []);

    const showLightbox = selectedIndex !== null;

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setSelectedIndex(i)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-full h-auto ${img.ratio} object-cover rounded-lg hover:scale-105 transition-transform duration-300`}
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = "/images/IMG_2128.jpeg";
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {showLightbox && images[selectedIndex] && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
                    <button
                        className="absolute top-6 right-6 text-white hover:scale-110 transition"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={handlePrev}
                        className="absolute left-4 text-white hover:scale-110 transition"
                    >
                        <ChevronLeft size={40} />
                    </button>

                    <img
                        src={images[selectedIndex].src}
                        alt={images[selectedIndex].alt}
                        className="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain"
                    />

                    <button
                        onClick={handleNext}
                        className="absolute right-4 text-white hover:scale-110 transition"
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </>
    );
};

export default GalleryGrid;
