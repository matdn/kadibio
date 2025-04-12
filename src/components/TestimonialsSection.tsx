"use client";
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import avisData from "../../public/datas/avis.json";

const Stars = ({ count = 5 }: { count: number; }) => (
    <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: count }, (_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
        ))}
    </div>
);

export default function TestimonialsSection() {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let animFrame: number;
        let x1 = 0, x2 = 0;

        const loop = () => {
            if (!paused && row1Ref.current && row2Ref.current) {
                x1 -= 0.6;
                x2 -= 0.3;

                const resetPoint1 = row1Ref.current.scrollWidth / 2;
                const resetPoint2 = row2Ref.current.scrollWidth / 2;

                row1Ref.current.style.transform = `translateX(${x1}px)`;
                row2Ref.current.style.transform = `translateX(${x2}px)`;

                if (Math.abs(x1) >= resetPoint1) x1 = 0;
                if (Math.abs(x2) >= resetPoint2) x2 = 0;
            }

            animFrame = requestAnimationFrame(loop);
        };

        loop();
        return () => cancelAnimationFrame(animFrame);
    }, [paused]);



    return (
        <section
            className="py-20 bg-[#F7F6F0] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="text-center mb-12">
                <p className="text-4xl font-semibold">Ils ont goûté, ils ont adoré !</p>
                <p className="text-xl mt-2">Découvrez ce que nos clients pensent de Kadibio</p>
            </div>

            {/* LIGNE 1 */}
            <div className="overflow-hidden">
                <div ref={row1Ref} className="flex whitespace-nowrap w-max gap-6 will-change-transform">
                    {[...avisData, ...avisData].map((avis, i) => (

                        <div key={`top-${i}`} className={`min-w-[300px] max-w-md p-6 rounded-xl ${avis.bg} ${avis.text}`}>
                            <Stars count={avis.note} />
                            <p className="font-semibold mt-2">– {avis.auteur}</p>
                            <p className="text-sm mt-2 whitespace-pre-line">
                                {avis.texte}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="overflow-hidden mt-10">
                <div ref={row2Ref} className="flex whitespace-nowrap w-max gap-6 will-change-transform">
                    {[...avisData, ...avisData].reverse().map((avis, i) => (
                        <div key={`bottom-${i}`} className={`min-w-[300px] max-w-md p-6 rounded-xl ${avis.bg} ${avis.text}`}>
                            <Stars count={avis.note} />
                            <p className="font-semibold mt-2">– {avis.auteur}</p>
                            <p className="text-sm mt-2 whitespace-pre-line">
                                {avis.texte}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
