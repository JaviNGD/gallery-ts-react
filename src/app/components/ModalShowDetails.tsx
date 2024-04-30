import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const ModalShowDetails = (): JSX.Element => {
    const { selectedImage, handleCloseModal } = useContext(AppContext);

    return (
        <>
        {/* Modal to show the selected image */}
        {selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={handleCloseModal}></div>
            <div className="bg-white p-8 rounded-lg z-10">
                <img src={selectedImage.download_url} alt={`Selected Image`} className="max-w-2xl max-h-2xl" />
                <div className="text-center mt-4 text-lg">
                <p><span className="font-semibold">Image id:</span> {selectedImage.id}</p>
                <p><span className="font-semibold">Author:</span> {selectedImage.author}</p>
                <p><span className="font-semibold">URL:</span> {selectedImage.download_url}</p>
                </div>
                <button 
                onClick={handleCloseModal} 
                className="block mx-auto mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold shadow-sm"
                >
                Close
                </button>
            </div>
            </div>
        )}
        </>
    )
}
