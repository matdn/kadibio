import GalleryGrid from "@/components/GalleryGrid";
import SecondaryHero from "@/components/SecondHero";

export default function GaleriePage() {
    return (
        <main className="bg-[#F7F6F0] min-h-screen">
            <SecondaryHero
                title="Galerie"
                subtitle="Un aperçu en images de nos créations, nos événements et nos plats savoureux, bio et faits maison."
                backgroundImage="/images/image8.jpeg"
            />
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <GalleryGrid />
            </section>
        </main>
    );
}
