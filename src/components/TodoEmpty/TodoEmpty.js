import React from "react";
import "./TodoEmpty.css"

function TodoEmpty() {
    let aux = "Ningún TODO encontrado"
    return(
        <React.Fragment>
            <li>
                <button className="taskSample">
                    <span id="taskname">{aux}</span>
                </button>
                <button className="deleteSample">
                    &nbsp;
                </button>
            </li>
        </React.Fragment>
    )
}
export { TodoEmpty }