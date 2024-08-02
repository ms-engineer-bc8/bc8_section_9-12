import React from "react";

type HeadingProps = {
    children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return <h2 className="text-3xl font-bold text-center p-9">{children}</h2>;
};

export default Heading;