import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props) {
    const onClickButton = () => {
        if (!props.openModal) {
            document.getElementById('push').classList.add('active');
        } else {
            document.getElementById('push').classList.remove('active');
        }
        props.setOpenModal(!props.openModal)
    }
    return(
        <button
        id="push"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton }