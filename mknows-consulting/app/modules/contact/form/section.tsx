"use client";

import React from "react";

const ContactSection = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        // (opsional) ambil data
        const data = new FormData(form);
        console.log("DATA TERKIRIM:", Object.fromEntries(data));

        // KOSONGKAN FORM
        form.reset();

        // (opsional) notifikasi
        alert("Pesan berhasil dikirim!");
    };

    return (
        <section
            className="relative w-full h-full bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-10 py-14"
            style={{
                backgroundImage: "url('/images/contact/bg-contact.png')",
            }}
        >
            {/* overlay gelap tipis biar teks kebaca */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative max-w-4xl mx-auto">
                {/* kartu kaca */}
                <div className="rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl px-6 sm:px-8 md:px-10 py-8 md:py-10 text-white">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Nama Lengkap */}
                        <div>
                            <label className="block text-xl mb-1">Nama Lengkap*</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                placeholder="Nama Lengkap"
                                required
                            />
                        </div>

                        {/* Nama Perusahaan */}
                        <div>
                            <label className="block text-xl mb-1">Nama Perusahaan*</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                placeholder="Nama Perusahaan"
                                required
                            />
                        </div>

                        {/* Jabatan */}
                        <div>
                            <label className="block text-xl mb-1">Jabatan*</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                placeholder="Jabatan"
                                required
                            />
                        </div>

                        {/* Nomor Whatsapp */}
                        <div>
                            <label className="block text-xl mb-1">Nomor Whatsapp*</label>
                            <input
                                type="tel"
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                placeholder="08xxxxxxxxxx"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-xl mb-1">Email*</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                placeholder="email@contoh.com"
                                required
                            />
                        </div>

                        {/* Kategori */}
                        <div>
                            <label className="block text-xl mb-1">Kategori*</label>
                            <select className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg text-white" defaultValue="" required>
                                <option value="" disabled className="text-slate-800">
                                    Pilih kategori
                                </option>
                                <option className="text-slate-800" value="training">
                                    Training
                                </option>
                                <option className="text-slate-800" value="consulting">
                                    Consulting
                                </option>
                                <option className="text-slate-800" value="assessment">
                                    Assessment
                                </option>
                                <option className="text-slate-800" value="lainnya">
                                    Lainnya
                                </option>
                            </select>
                        </div>

                        {/* Deskripsi */}
                        <div>
                            <label className="block text-xl mb-1">Deskripsi*</label>
                            <textarea
                                className="w-full bg-transparent border-0 border-b border-white/60 focus:border-white outline-none py-1 text-lg placeholder-white/60"
                                rows={3}
                                placeholder="Ceritakan kebutuhan Anda…"
                                required
                            />
                        </div>

                        {/* Tombol submit */}
                        <div className="pt-4 flex justify-center">
                            <button type="submit" className="px-6 py-1.5 rounded-full bg-white text-slate-900 text-xl font-semibold shadow hover:bg-gray-300 transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
