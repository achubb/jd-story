import React, { ReactNode } from "react";
import "./simplegrid.css";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";

export interface SimpleGridProps {
    children: ReactNode,
    container?: boolean;
    item?: boolean;
    cols?: Cols;
    spacing?: Spacing;
    colStart?: number;
    colEnd?: number;
    colSpan?: number;
    colSpanSmall?: number;
};


const SimpleGrid = ({
    children,
    container,
    item,
    cols,
    spacing,
    colStart,
    colEnd,
    colSpan,
}: SimpleGridProps) => { 

    const containerMode = container ? "grid_container": "";
    const itemMode = item ? "grid_item": "";
    const columnsMode = cols
    const spacingMode = spacing

    return (
        <div
            className={[containerMode, itemMode].join( " " )}
            // style={{gridColumnStart:`${colStart}`, gridColumnEnd:`${colEnd}`}}
            style={{gridColumn:`span ${colSpan}/span ${colSpan} `}}
        >
            { children }
         </div>
    );
}

export default SimpleGrid;