"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

interface GalleryImage {
    src: string;
    alt: string;
    ratio?: string;
}

const Gallery: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        fetch("/datas/galerie.json")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);

    return (
        <section className="bg-[#222220] py-16 px-6 text-center">
            {/* Texte d'introduction */}
            <div className="max-w-3xl mx-auto mb-8">
                <p className="text-[#98B7C9] text-xl italic">
                    “Laissez-vous inspirer par nos créations gourmandes ! Découvrez en images nos plats bio, préparés avec passion et savoir-faire, pour éveiller vos papilles.”
                </p>
                <a href="/galerie">
                    <button className="mt-4 bg-[#98B7C9] text-black px-6 py-2 rounded-lg hover:bg-blue-400 transition">
                        voir la galerie
                    </button>
                </a>
            </div>

            {/* Slider d'images */}
            <div className="overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={5000}
                    className="max-w-6xl mx-auto"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#98B7C9] p-2 rounded-lg">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-full"
                                    onError={(e) => {
                                        const target = e.currentTarget as HTMLImageElement;
                                        target.src = "/images/placeholder.jpg";
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Gallery;
