import React, { ReactNode } from "react"

export interface SimpleGridPanelProps {
    children?: ReactNode;
    colStart?: number;
    colEnd?: number;
    colSpan?: number;
}

const SimpleGridPanel = ({
    children,
    colStart,
    colEnd,
    colSpan
}: SimpleGridPanelProps) => {
    
    return (
        <div 
            className="grid_item"
            style={{gridColumn:`span ${colSpan}/span ${colSpan} `}}
        >
            { children }
        </div>
    )
}

export default SimpleGridPanel;