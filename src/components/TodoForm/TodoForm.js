import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
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
        addTodo(newTodoValue)
        setOpenModal(false)
        document.getElementById('push').classList.remove('active');
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Introduce tu nueva tarea</label>
            <textarea
                value={newTodoValue}
                placeholder="Cortar la cebolla para el almuerzo"
                onChange={onChange}
            />
            <div>
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