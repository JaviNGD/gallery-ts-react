'use client';
import { createContext, useState } from "react";

export const AppContext = createContext<AppContextType>({
    images: [],
    addRandomImage: () => {},
    addUploadImage: () => {},
    setImages: () => {},
});

type ImageItems = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

type AppContextType = {
    images: ImageItems[];
    addRandomImage: () => void;
    addUploadImage: (image: File) => void;
    setImages: React.Dispatch<React.SetStateAction<ImageItems[]>>;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    // State to store the images
    const [images, setImages] = useState<ImageItems[]>([]);

    // Function to add a random image from the Picsum API
    const addRandomImage = async () => {
        try {
        // API request to get information about a random image
        const response = await fetch("https://picsum.photos/id/" + Math.floor(Math.random() * 1084) + "/info");
        if (!response.ok) {
            throw new Error("Failed to fetch random image.");
        }
        const imageData = await response.json();

        // Create a new image object with the information obtained from the API
        const newRandomImage: ImageItems = {
            id: imageData.id,
            author: imageData.author,
            width: imageData.width,
            height: imageData.height,
            url: imageData.url,
            download_url: imageData.download_url,
        };

        // Add the new image to the 'images' state
        setImages([...images, newRandomImage]);
        } catch (error) {
        console.error("Error adding random image:", error);
        }
    };

    // Function to add an uploaded image
    const addUploadImage = (image: File) => {
        const newImage: ImageItems = {
            id: Math.random().toString(36).substr(2, 9), // Generate a unique ID for the uploaded image
            author: "Uploaded by user",
            width: 0,
            height: 0,
            url: "",
            download_url: URL.createObjectURL(image), // Generate a URL for the uploaded image
        };
        setImages([...images, newImage]);
    };

    return (
        <AppContext.Provider value={{
            images,
            setImages,
            addRandomImage,
            addUploadImage
        }}>
            {children}
        </AppContext.Provider>
    )
}