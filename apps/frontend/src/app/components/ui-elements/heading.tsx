import React from "react";

type HeadingProps = {
    children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <h2 className="text-4xl font-bold text-center px-6 py-3 mt-10 mb-2">
            {children}
        </h2>
    );
};

export default Heading;