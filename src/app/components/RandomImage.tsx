import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const RandomImage = (): JSX.Element => {
    const { addRandomImage } = useContext(AppContext);

    return (
        <button 
            onClick={addRandomImage}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full shadow-sm"
        >
            Add random image
        </button>
    )
}
