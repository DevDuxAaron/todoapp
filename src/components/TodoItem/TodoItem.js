import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
    return (
        <React.Fragment>
            <li>
                <button
                    onClick={props.onComplete}
                    className={`task ${props.completed && 'completed'}`}
                >
                    <span id="taskname">{props.text}</span>
                </button>
                <button className="delete" onClick={props.onDelete}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </li>
        </React.Fragment>
    );
}

export { TodoItem }