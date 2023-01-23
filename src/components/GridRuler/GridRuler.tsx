import React from "react";
import "./gridruler.css";

type Spacing = "sm" | "md" | "lg";

export interface GridRulerProps {
    spacing?: Spacing;
}

const GridRuler = ({
    spacing = "sm"
}: GridRulerProps) => {
    return ( 
        <div className="grid_ruler">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                    <div className="grid_ruler_item" key={number} />
                ))
            }
        </div>
    )
}

export default GridRuler;