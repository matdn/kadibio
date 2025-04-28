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

            <p className="text-[#98B7C9] py-14 text-xl italic">
                Laissez-vous inspirer par nos créations !
            </p>
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
                                        target.src = "/images/IMG_2128.jpeg";
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="max-w-3xl py-14 mx-auto mb-8">

                    <a href="/galerie">
                        <button className="mt-4 border text-[#98B7C9]  border-[#98B7C9] bg-transparent px-6 py-2 rounded-lg hover:bg-[#98B7C9] hover:text-[#222220] transition">
                            voir la galerie
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
