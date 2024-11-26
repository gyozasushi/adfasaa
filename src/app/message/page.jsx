"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Imagenadin from "../../../public/assets/message/nadin2.jpg";

export default function Message() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseMusic = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="pt-[9rem] flex flex-col items-center text-white h-screen ">
      {/* Gambar Sampul */}
      <div className="max-w-sm">
        <Image
          src={Imagenadin}
          alt="sampul"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Judul Lagu */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">Semua Aku Dirayakan</h2>
        <p className="text-sm text-gray-400">Nadin Amizah</p>
      </div>
      {/* Kontrol Musik */}
      <div className="mt-6 flex items-center gap-6">
        {/* Tombol Previous */}
        <button
          className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"
          aria-label="Previous Song"
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Tombol Play/Pause */}
        {isPlaying ? (
          <button
            onClick={pauseMusic}
            className="w-14 h-14 flex justify-center items-center bg-green-500 rounded-full shadow-md hover:bg-green-600"
            aria-label="Pause Song"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 9v6m4-6v6"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={playMusic}
            className="w-14 h-14 flex justify-center items-center bg-green-500 rounded-full shadow-md hover:bg-green-600"
            aria-label="Play Song"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.074A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        )}

        {/* Tombol Next */}
        <button
          className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full"
          aria-label="Next Song"
          disabled
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="/assets/message/nadin.mp3" />

      <div className="max-w-sm text-center pt-[3rem] pb-[5rem] sm: ">
        hii din selamat ulang tahun yaa, 
        <br/>
Hari ini adalah hari yang sangat spesial, hari yang penuh kebahagiaan karena kamu merayakan perjalanan hidup yang luar biasa. Setiap tahun yang kamu lewati adalah cerita yang penuh warna, penuh perjuangan, tawa, pelajaran, dan momen-momen indah yang membentuk siapa kamu sekarang. 
Aku ingin kamu tahu bahwa setiap langkah yang telah kamu ambil sejauh ini adalah pencapaian yang layak dirayakan. Di tahun ini, semoga kamu semakin dikelilingi oleh cinta yang tulus, kebahagiaan yang datang tanpa diduga, dan kesempatan-kesempatan besar yang akan membawamu lebih dekat pada impian-impian yang kamu miliki. Jangan pernah ragu untuk bermimpi lebih tinggi, karena aku yakin kamu memiliki kemampuan luar biasa untuk mewujudkan semua yang kamu impikan. Setiap tantangan yang kamu hadapi selalu berhasil kamu atasi dengan sabar, dan aku tahu kamu akan terus melangkah maju dengan penuh keyakinan."karena kamu orangnya pantang mundur ya kan"
Kamu sendiri pribadi yang luar biasa. Cerdas, penuh perhatian, dan selalu berusaha menjadi versi terbaik dari dirimu. Itulah mengapa kamu begitu dicintai dan dihargai oleh banyak orang. Terima kasih sudah menjadi dirimu yang istimewa, karena dunia ini lebih cerah hanya dengan kehadiranmu. Kamu adalah sumber inspirasi, dan aku merasa beruntung bisa menjadi bagian dari perjalanan hidupmu.Untuk jalan-jalan selanjutnya percayakan saja pada dirimu karena kamu kuat sekuat hmm apaya sekuat berlian?bener" kuat berarti,aku juga senang pernah mengenal mu 
Selamat ulang tahun sekali lagi! Semoga setiap harimu dipenuhi dengan kebahagiaan, tawa, dan keberhasilan. Kamu adalah bintang di november ini dan seterusnya. Bersinarlah seperti yang selalu kamu lakukan karena dunia membutuhkan cahaya dari seseorang sepertimu .
<br/>
<br/>
maaf yaa aku telat ngucapinnya,tapi semua doa untuk kamu selalu ada😄.
      </div>
    </div>
  );
}
