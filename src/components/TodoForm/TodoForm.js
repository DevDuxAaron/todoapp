import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
        invalidForm,
        setInvalidForm
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false)
        document.getElementById('push').classList.remove('active');
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if (newTodoValue !== "") {
            addTodo(newTodoValue)
            setOpenModal(false)
            document.getElementById('push').classList.remove('active');
            setInvalidForm(false)
        } else {
            setInvalidForm(true)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Introduce tu nueva tarea</label><br />
            {invalidForm && <label className="invalidForm">Por favor, ingresa un texto</label>}
            <textarea
                className={invalidForm && "invalidForm_text"}
                value={newTodoValue}
                placeholder="Cortar la cebolla para el almuerzo"
                onChange={onChange}
            />
            <div className="btn_group">
                <button
                    id="cancelTodo"
                    className="btn"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    id="addTodo"
                    className="btn"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }