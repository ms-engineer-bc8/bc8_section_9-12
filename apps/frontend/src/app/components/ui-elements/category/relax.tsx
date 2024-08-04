import React from "react";

type CategoryProps  = {
    children: React.ReactNode;
    onClick?: () => void;
}

const RelaxLink: React.FC<CategoryProps>= ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-11 text-xl font-semibold bg-white-500 border-2 border-black rounded-xl w-full"
        >
            {children}
        </button>
    )
}

export default RelaxLink;