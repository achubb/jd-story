import React, {FunctionComponent, ReactNode} from "react";
import "./simple-grid.css";

const SimpleGrid: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <div className="simplegrid">{children}</div>;
}

export default SimpleGrid;