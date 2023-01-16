import React from "react";
import "./task.css";

import { BiSquare, BiCheckSquare } from 'react-icons/bi'

export interface TaskProps {
    id?: number;
    title?: string;
    state?: "TASK_INBOX" | "TASK_PINNED" | "TASK_ARCHIVED";
    onArchiveTask?: (id: number) => void;
    onPinTask?: (id: number) => void;
}

const Task = ({
    id = 1,
    title,
    state,
    onArchiveTask,
    onPinTask
}: TaskProps) => {
    return (
        <div className="{`list-item${state}`}">
            {/* <label 
                htmlFor="checked"
                aria-label={`archiveTask-${id}`}
                className="checkbox"
            >
                <input 
                    type="checkbox" 
                    disabled={true}
                    name="checked"
                    id={`archiveTask-${id}`}
                    checked={state === "TASK_ARCHIVED"}
                />
                <span
                    className="checkbox-custom"
                    onClick={() => onArchiveTask?.(id)}
                />
            </label> */}

            <span>
                {state !== "TASK_ARCHIVED" ? <BiSquare /> : <BiCheckSquare />}
            </span>

            <label htmlFor="title" aria-label={title} className="title">
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    name="title"
                    placeholder="Input title"
                />
            </label>

            {state !== "TASK_ARCHIVED" && (
                <button
                    className="pin-button"
                    onClick={() => onPinTask?.(id)}
                    id={`pinTask-${id}`}
                    aria-label={`pinTask-${id}`}
                    key={`pinTask-${id}`}
                 >
                    <span className={`icon-star`} />
                </button>
            )}
        </div>


        // <div className="list-item">
        //     <label htmlFor="title" aria-label={title}>
        //         <input type="text" value={title} readOnly={true} name="title" />
        //     </label>
        // </div>
    );
};

export default Task;