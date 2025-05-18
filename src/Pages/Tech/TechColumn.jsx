import React from "react";

const TechColumn = ({ children, className = "" }) => {
    return <section className={className}>{children}</section>;
};

export default TechColumn;