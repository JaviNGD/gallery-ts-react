'use client';
import { createContext, useState } from "react";

export const AppContext = createContext<AppContextType>({
    images: [],
    addRandomImage: () => {},
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
    setImages: React.Dispatch<React.SetStateAction<ImageItems[]>>;
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [images, setImages] = useState<ImageItems[]>([]);

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

    return (
        <AppContext.Provider value={{
            images,
            setImages,
            addRandomImage
        }}>
            {children}
        </AppContext.Provider>
    )
}