"use client";
import React, { useState } from "react";

export default function ContactSection() {
    const [form, setForm] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/send-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Message envoyé !");
            setForm({ nom: "", prenom: "", tel: "", email: "", message: "" });
        } else {
            alert("Erreur à l'envoi.");
        }
    };

    return (
        <section className="bg-[#F7F6F0] py-20 px-6">
            <div className="container mx-auto grid md:grid-cols-2 gap-12">
                {/* WhatsApp */}
                <div className="bg-[#98B7C9] p-8 rounded-2xl shadow-md flex flex-col justify-center items-start text-white">
                    <h2 className="text-3xl font-bold mb-4">Commander directement</h2>
                    <p className="mb-6 text-lg">Contacte nous par WhatsApp pour passer commande simplement !</p>
                    <a
                        href="https://wa.me/33612345678"
                        target="_blank"
                        className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                    >
                        Passer commande via WhatsApp →
                    </a>
                </div>

                {/* Formulaire */}
                <div className="bg-white p-8 rounded-2xl shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-[#222220]">Demande de service traiteur</h2>
                    <form action="https://formspree.io/f/xblgzvqr" method="POST" className="space-y-4">
                        <div className="flex gap-4">
                            <input name="Prénom" type="text" placeholder="Prénom" required className="w-1/2 p-3 border rounded-lg" />
                            <input name="Nom" type="text" placeholder="Nom" required className="w-1/2 p-3 border rounded-lg" />
                        </div>
                        <input name="Téléphone" type="tel" placeholder="Téléphone" required className="w-full p-3 border rounded-lg" />
                        <input name="Email" type="email" placeholder="Email" required className="w-full p-3 border rounded-lg" />
                        <textarea
                            name="Message"
                            placeholder="Décrivez votre événement : nombre de personnes, lieu, date, ambiance..."
                            required
                            className="w-full p-3 border rounded-lg min-h-[150px]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#222220] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                        >
                            Envoyer ma demande →
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
