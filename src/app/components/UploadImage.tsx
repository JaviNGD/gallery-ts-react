import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const UploadImage = (): JSX.Element => {
    const { addUploadImage } = useContext(AppContext);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedImage(file);
            addUploadImage(file); 
        }
    };

    return (
        <div>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="imageInput"
        />
        <label htmlFor="imageInput" className="flex cursor-pointer">
            <span className="px-4 py-2 mx-4 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm">
                Select Image
            </span>
        </label>
        </div>
    );
};
