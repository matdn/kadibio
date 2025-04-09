"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

interface HeroProps {
    title?: string;
    images: { filename: string; }[];
}

const Hero: React.FC<HeroProps> = ({ title, images }) => {
    return (
        <section className="Hero relative w-full h-screen">
            {/* Swiper avec autoplay */}
            <Swiper
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={1500}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img.filename}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-0 flex items-center justify-center z-2 h-full bg-black/40">
                {title && (
                    <h1 className="text-[18vw] text-white absolute bottom-1/2 translate-y-1/2 font-norman font-bold">
                        {title}
                    </h1>
                )}
            </div>
        </section>
    );
};

export default Hero;
