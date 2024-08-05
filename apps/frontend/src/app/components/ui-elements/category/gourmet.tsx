import React from "react";

type CategoryProps  = {
    children: React.ReactNode;
    onClick?: () => void;
}

const GourmetLink: React.FC<CategoryProps>= ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-white p-11 text-xl font-semibold border border-black rounded-xl w-full"
        >
            {children}
        </button>
    )
}

export default GourmetLink;