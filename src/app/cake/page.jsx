"use client";
import { useState, useEffect, useRef } from "react";

export default function CakeCandle() {
  const [candles, setCandles] = useState([]);
  const [message, setMessage] = useState("Lilin harus ditaruh di kue!");
  const cakeRef = useRef(null);
  const candleCountDisplay = useRef(null);

  // Update candle count and message
  function updateCandleCount() {
    const activeCandles = candles.filter((candle) => !candle.out).length;

    if (candleCountDisplay.current) {
      candleCountDisplay.current.textContent = activeCandles;
    }

    if (activeCandles === 0) {
      setMessage("Lilin harus ditaruh di kue!");
    } else {
      setMessage("Tiup lilinnya!");
    }
  }

  // Add a candle at a specific location
  function addCandle(left, top) {
    const candle = { left, top, id: Date.now(), out: false };
    setCandles((prevCandles) => [...prevCandles, candle]);
  }

  // Check if blowing (based on audio)
  function isBlowing(analyser) {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      sum += dataArray[i];
    }
    const average = sum / bufferLength;

    return average > 40; // Adjust the threshold as needed
  }

  // Blow out the candles based on sound detection
  function blowOutCandles(analyser) {
    if (isBlowing(analyser)) {
      setCandles((prevCandles) =>
        prevCandles.map((candle) =>
          !candle.out && Math.random() > 0.5 ? { ...candle, out: true } : candle
        )
      );
    }
  }

  // Setup microphone and audio context for detecting sound
  useEffect(() => {
    let audioContext, analyser, microphone;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          analyser = audioContext.createAnalyser();
          microphone = audioContext.createMediaStreamSource(stream);
          microphone.connect(analyser);
          analyser.fftSize = 256;

          const interval = setInterval(() => blowOutCandles(analyser), 200);
          return () => clearInterval(interval);
        })
        .catch(function (err) {
          console.log("Unable to access microphone: " + err);
        });
    }

    return () => {
      if (audioContext) audioContext.close();
    };
  }, []);

  // Handle click on the cake to add candles
  function handleCakeClick(event) {
    const rect = cakeRef.current.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    addCandle(left, top);
  }

  useEffect(() => {
    updateCandleCount();
  }, [candles]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center ">
         
        <div>
            tiup lilinnya
        </div>
      {/* Cake Section */}
      <div
        ref={cakeRef}
        className="cake w-64 h-64 flex justify-center items-center bg-brown relative"
        onClick={handleCakeClick}
      >
        <div className="plate bg-brown w-full h-1/2 rounded-t-full"></div>
        <div className="layer layer-bottom bg-yellow-400 w-full h-1/3"></div>
        <div className="layer layer-middle bg-orange-400 w-full h-1/3"></div>
        <div className="layer layer-top bg-red-400 w-full h-1/3 rounded-b-full"></div>
        <div className="icing absolute w-full h-2 top-0 bg-white rounded-t-full"></div>
        
        {/* Render Candles */}
        {candles.map((candle) => (
          <div
            key={candle.id}
            className={`absolute candle ${candle.out ? "out" : ""}`}
            style={{
              left: candle.left + "px",
              top: candle.top + "px",
            }}
          >
            <div className={`flame ${candle.out ? "hidden" : "block"} bg-yellow-500 w-2 h-4 rounded-full`}></div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
}
