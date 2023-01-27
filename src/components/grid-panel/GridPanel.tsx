import React from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";


export interface GridPanelProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
}

const GridPanel = ({
    x,
    y,
    width,
    height,
    minW,
    maxW,
    minH,
    maxH,
}: GridPanelProps) => {
    return (
        // <div data-grid={{ 
        //     x: {x}, 
        //     y: {y}, 
        //     width: {width}, 
        //     height: {height}, 
        //     minW: {minW},
        //     maxW: {maxW},
        //     minH: {minH},
        //     maxH: {maxH}
        // }}>
        //     <p>Grid Item</p>
        // </div>

        <div data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>

        </div>
    )
}

export default GridPanel;