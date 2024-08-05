import React from "react";
import Image from "next/image";

type CategoryProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const ActiveLink: React.FC<CategoryProps> = ({ children, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className="bg-white p-11 text-xl font-semibold rounded-xl w-full"
            >
                {children}
            </button>
        </div>
    );
};

export default ActiveLink;
