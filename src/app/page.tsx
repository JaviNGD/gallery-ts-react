'use client';
import React, { useContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { RandomImage } from "./components/RandomImage";
import { UploadImage } from "./components/UploadImage";
import { AppContext } from "./context/AppContext";

export default function Home() {
  const { images, addRandomImage } = useContext(AppContext);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
      <div className="text-white font-semibold text-sm mb-4">
        <button 
          onClick={() => console.log("Uploading photo...")}
          className="px-4 py-2 mx-4 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm"
        >
          Upload image
        </button>
        <button 
          onClick={addRandomImage}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm"
        >
          Add random image
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-4 hover:scale-110 ease-out duration-200 w-full h-64 overflow-hidden">
            <RandomImage image={image.download_url} id={image.id} />
          </div>
        ))}
      </div>
    </main>
  );
}
