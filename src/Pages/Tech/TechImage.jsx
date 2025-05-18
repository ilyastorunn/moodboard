import React from "react";

const TechImage = ({ src, className, alt = "Tech products image" }) => {
    return (
        <figure className={className}>
            <img src={src} alt={alt} className="object-contain w-full h-full rounded-inherit" />
        </figure>
    );
};

export default TechImage;