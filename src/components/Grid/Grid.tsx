import React from "react";
import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./grid.css"

export interface GridProps {
    id?: number;
}

const layout = [
    { i: "a", x: 0, y: 0, w: 4, h: 12 },
    { i: "b", x: 0, y: 0, w: 4, h: 12 },
    { i: "c", x: 0, y: 0, w: 4, h: 12 }
];

const Grid = ({
    id = 1
}: GridProps) => {
    return ( 
        <GridLayout
            className="layout"
            cols={12}
            rowHeight={30}
            width={1200}
            layout={layout}
        >
            <div key="a">
                <div className="card-content">
                    <h2>Shop Men's</h2>
                    <button>Men's Clothing</button>
                    <button>Men's Footwear</button>
                    <button>Men's Accessories</button>
                </div>
            </div>
            <div key="b">
                <div className="card-content">
                    <h2>Shop Women's</h2>
                    <button>Women's Clothing</button>
                    <button>Women's Footwear</button>
                    <button>Women's Accessories</button>
                </div>
            </div>
            <div key="c">
                <div className="card-content">
                    <h2>Shop Kid's</h2>
                    <button>Kid's Clothing</button>
                    <button>Kid's Footwear</button>
                    <button>Kid's Accessories</button>
                </div>
            </div>

        </GridLayout>
    )
}

export default Grid;