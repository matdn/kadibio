"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

const images = [
    "/images/gallery1.png",
    "/images/gallery2.png",
    "/images/gallery3.png",
    "/images/gallery1.png",
];

const Gallery: React.FC = () => {
    return (
        <section className="bg-[#222220] py-16 px-6 text-center">
            {/* Texte d'introduction */}
            <div className="max-w-3xl mx-auto mb-8">
                <p className="text-[#98B7C9] text-xl italic">
                    “Laissez-vous inspirer par nos créations gourmandes ! Découvrez en images nos plats bio, préparés avec passion et savoir-faire, pour éveiller vos papilles.”
                </p>
                <button className="mt-4 bg-[#98B7C9] text-black px-6 py-2 rounded-lg hover:bg-blue-400 transition">
                    voir la galerie
                </button>
            </div>

            {/* Slider d'images */}
            <div className="overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={5000} // Réglage de la vitesse pour un effet fluide
                    className="max-w-6xl mx-auto"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#98B7C9] p-2 rounded-lg">
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={400}
                                    height={500}
                                    className="rounded-lg object-cover"
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
