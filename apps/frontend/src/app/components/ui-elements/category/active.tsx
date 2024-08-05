import React from "react";
import Image from "next/image";
import ActiveImage from "../../../images/active_.jpg"

type CategoryProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const ActiveLink: React.FC<CategoryProps> = ({ children, onClick }) => {
    return (
        <div>
            <div className="relative w-64 h-64">
                <Image
                    src={ActiveImage}
                    alt="Description of the image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
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
