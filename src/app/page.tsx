'use client';
import React, { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { RandomImage } from "./components/RandomImage";
import { UploadImage } from "./components/UploadImage";
import { ModalShowDetails } from "./components/ModalShowDetails";
import { AppContext } from "./context/AppContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Home() {
  const { currentImages, images, page, setPage, endIndex, totalPages, handleImageClick } = useContext(AppContext);
  
  return (
    <main className="flex flex-col items-center justify-between mt-16 sm:mt-0 sm:p-10 md:p-14 lg:p-24">
      <Navbar />
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Photo Gallery</h1>
      <div className="flex text-white font-semibold text-sm mb-4">
        <UploadImage />
        <RandomImage />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((image, index) => (
          <div key={index} className="p-4 hover:scale-110 ease-out duration-200 w-full h-64 overflow-hidden">
            <LazyLoadImage 
              src={image.download_url} 
              alt={`Image id ${image.id}`} 
              className="object-cover w-full h-full rounded-md cursor-pointer"
              onClick={() => handleImageClick(image)}
              effect="blur"
            />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="text-white font-semibold mt-4">
          <button onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1} className="px-4 py-2 mx-1 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm">Previous</button>
          <button onClick={() => setPage(prevPage => prevPage + 1)} disabled={endIndex >= images.length} className="px-4 py-2 mx-1 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm">Next</button>
        </div>
      )}

      <ModalShowDetails />
    </main>
  );
}
