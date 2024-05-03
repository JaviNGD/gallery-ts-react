import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { GrClose } from "react-icons/gr";

export const ModalShowDetails = (): JSX.Element => {
    const { selectedImage, handleCloseModal } = useContext(AppContext);

    return (
        <>
            {/* Modal to show the selected image */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={handleCloseModal}></div>
                    <div className="relative bg-white p-10 rounded-lg z-10 max-w-screen-lg mx-auto">
                        <button 
                            onClick={handleCloseModal} 
                            className="absolute top-2 right-2 bg-cyan-500 hover:bg-cyan-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold shadow-sm"
                        >
                            <GrClose />
                        </button>
                        <div className="relative">
                            <img 
                                src={selectedImage.download_url} 
                                alt={`Selected Image`} 
                                className="max-w-full max-h-96 h-auto mx-auto rounded-md" 
                            />
                            <div className="text-center mt-4 text-lg">
                                <p><span className="font-semibold">Image id:</span> {selectedImage.id}</p>
                                <p><span className="font-semibold">Author:</span> {selectedImage.author}</p>
                                <p><span className="font-semibold">URL:</span> {selectedImage.download_url}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}