"use client";
import React from "react";

export default function ReviewSection() {
    return (
        <section id="avis" className="bg-[#F7F6F0] py-20 px-6">
            <div className="container mx-auto">
                {/* Petit message d'invitation */}
                <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-[#222220] mb-2">Votre avis compte beaucoup !</h3>
                    <p className="text-lg text-gray-700">
                        Partagez votre expérience, cela nous aide à nous améliorer et à mieux vous servir.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-[#222220]">Laisser un avis</h2>
                    <div className="mb-8 text-center">

                    </div>

                    <form
                        action="https://formspree.io/f/xovdvbjy"
                        method="POST"
                        className="space-y-4"
                    >
                        <input
                            name="Nom"
                            type="text"
                            placeholder="Votre nom"
                            required
                            className="w-full p-3 border rounded-lg"
                        />
                        <select
                            name="Note"
                            required
                            className="w-full p-3 border rounded-lg"
                        >
                            <option value="">Note</option>
                            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                            <option value="4">⭐⭐⭐⭐ - Très bien</option>
                            <option value="3">⭐⭐⭐ - Bien</option>
                            <option value="2">⭐⭐ - Moyen</option>
                            <option value="1">⭐ - Mauvais</option>
                        </select>
                        <textarea
                            name="Message"
                            placeholder="Votre message..."
                            required
                            className="w-full p-3 border rounded-lg min-h-[150px]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#222220] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                        >
                            Envoyer mon avis →
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
