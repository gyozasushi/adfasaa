"use client";
import React, { useState, useEffect, useRef } from "react";

const videoSources = [
    "/assets/bg/bg1.mp4",
    "/assets/bg/bg2.mp4",
    "/assets/bg/bg3.mp4",
];

export default function Home() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videoSources.length);
        }, 5000); // Durasi antar video (ms)

        return () => clearInterval(interval);
    }, []);

    // Intersection Observer untuk mendeteksi kapan div 'hello world' terlihat
    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5, // Ketika 50% elemen terlihat, observer aktif
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, options);

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    return (
        <section>
            <div
                className="relative w-full min-h-screen overflow-hidden bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: "url('/assets/bg/nfbg.jpg')", // Gambar latar belakang
                    paddingTop: "56px", // Menyesuaikan agar konten tidak tertutup navbar
                }}
            >
                {/* Filter hanya diterapkan pada latar belakang */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"
                    style={{
                        zIndex: 0, // Filter berada di bawah konten
                    }}
                ></div>

                <div className="relative flex flex-col items-center justify-center mx-auto pt-[12rem] z-10 px-4 sm:px-8">
                    {/* Deskripsi */}
                    <div className="max-w-xl font-sans space-y-4 text-center text-white">
                        <h1 className="text-4xl sm:text-6xl font-bold">Happy Birthday</h1>
                        <p className="text-lg sm:text-xl italic">
                            "In a world filled with dreams, challenges, and endless possibilities, Adinda Naura Fasabila embarks on their next great adventure: another year of
                            life. 🌟 This heartfelt celebration is packed with laughter, love, and unexpected surprises. With family and friends as the supporting cast, today marks the premiere of Adinda Naura's best season yet. A story of growth, joy, and unforgettable memories—get ready to cheer, laugh, and maybe even shed a tear. Coming soon to a cake near you. 🎂✨"
                        </p>
                    </div>

                    {/* Video Playback */}
                    <div className="relative sm:mt-3 m-3 pt-[2rem] w-[10rem] h-[25vh] sm:mb-4 sm:mb-0">
                        {videoSources.map((src, index) => (
                            <video
                                key={index}
                                src={src}
                                autoPlay
                                loop
                                muted
                                className={`absolute rounded-2xl top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                                    index === currentVideo ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Hello World section with 4 images */}
            <div
                className="relative flex flex-col sm:flex-row justify-center items-center pt-8 pb-4 space-x-0 sm:space-x-10 px-4"
                ref={observerRef}
            >
                {/* Deskripsi */}
                <div className="max-w-xl text-md mt-4 sm:mt-0 sm:w-1/2 text-center sm:text-left">
                    <h1 className="font-bold text-xl sm:text-2xl">
                        Selamat Ulang Tahun, Adinda Naura Fasabilla! 🎉
                    </h1>
                    <p>
                        Dalam dunia yang penuh dengan kejutan dan petualangan baru, hari ini adalah momen spesial yang menandai babak baru dalam perjalanan hidupmu. 🌟
                        Tahun ini, seperti sebuah kisah yang belum selesai, penuh dengan tawa, tantangan, dan kenangan yang tak terlupakan. Seiring bertambahnya usia, kamu semakin memukau, menjadi versi terbaik dari dirimu—lebih kuat, lebih bijaksana, dan lebih berani dalam mengejar impian. 🎂✨
                    </p>
                    <p className="mt-4 pb-3">
                        Dikelilingi oleh keluarga, sahabat, dan orang-orang yang mencintaimu, hari ini adalah tentang merayakan setiap pencapaian, setiap langkah kecil, dan setiap momen berharga yang membawa kebahagiaan. Ini bukan hanya tentang tahun-tahun yang telah berlalu, tapi juga tentang perjalanan luar biasa yang sedang kamu jalani.
                        Selamat merayakan ulang tahun yang penuh harapan baru, tawa yang tak terhitung, dan banyak momen tak terduga yang akan datang. Inilah episode terbaik yang akan kamu jalani, jadi siapkan dirimu—tahun ini adalah kisah luar biasa yang baru saja dimulai! 🎉
                    </p>
                </div>

                {/* Gambar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-1/2 max-w-screen-xl">
                    {[
                        '/assets/img/img1.jpeg',
                        '/assets/img/img7.jpeg',
                        '/assets/img/img6.jpeg',
                        '/assets/img/img5.jpeg',
                    ].map((src, index) => (
                        <div
                            key={index}
                            className={`w-full h-48 bg-cover rounded-lg transition-all duration-500 transform ${
                                isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                            }`}
                            style={{
                                backgroundImage: `url(${src})`,
                                transitionDelay: `${index * 0.2}s`, // Efek muncul satu persatu
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
