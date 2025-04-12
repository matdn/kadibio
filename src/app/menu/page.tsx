import React from "react";
import MainMenu from "@/components/MainMenu";
import SecondaryHero from "@/components/SecondHero";

const MenuPage = () => {
    return (
        <main className="bg-[#F7F6F0] text-[#222220]">
            <SecondaryHero
                title="notre menu"
                backgroundImage="/images/saladeAgrumes.jpg"
            />
            <MainMenu />
        </main>
    );
};

export default MenuPage;
