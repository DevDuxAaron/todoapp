import React from "react";
import "./TodoError.css"

function TodoError() {
    return (
        <React.Fragment>
            <h3 className="error_title">
                <i class="fas fa-exclamation-triangle"></i>Oops!
            </h3>
            <p className="error_desc">Ha ocurrido un error</p>
        </React.Fragment>
    )
}

export { TodoError }