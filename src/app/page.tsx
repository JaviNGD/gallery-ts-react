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
      <div className="flex text-white font-semibold text-sm mb-4">
        <UploadImage />
        <RandomImage />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="p-4 hover:scale-110 ease-out duration-200 w-full h-64 overflow-hidden">
            <img src={image.download_url} alt={`Image id ${image.id}`} className="object-cover w-full h-full rounded-md" />
          </div>
        ))}
      </div>
    </main>
  );
}
