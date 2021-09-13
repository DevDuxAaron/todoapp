import React from "react";
import "./TodoLoading.css"

function TodoLoading() {
    return(
        <React.Fragment>
            <li>
                <button className="task animated-bg">
                    <span id="taskname">&nbsp;</span>
                </button>
                <button className="delete animated-bg">
                    &nbsp;
                </button>
            </li>
            <li>
                <button className="task animated-bg">
                    <span id="taskname">&nbsp;</span>
                </button>
                <button className="delete animated-bg">
                    &nbsp;
                </button>
            </li>
            <li>
                <button className="task animated-bg">
                    <span id="taskname">&nbsp;</span>
                </button>
                <button className="delete animated-bg">
                    &nbsp;
                </button>
            </li>
        </React.Fragment>
    )
}
export { TodoLoading }