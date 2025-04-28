import React from "react";
import CulinaryIntro from "@/components/CulinaryIntro";
import SecondaryHero from "@/components/SecondHero";

export default function AboutPage() {
    return (
        <main className="bg-[#F7F6F0] text-[#222220]">
            <SecondaryHero
                title="À propos de Kadibio"
                subtitle="Une histoire de transmission, d’amour du goût et de cuisine responsable. Découvrez notre univers."
                backgroundImage="/images/IMG_1472.jpeg" // adapte à ton image
            />
            <CulinaryIntro />
        </main>
    );
}
