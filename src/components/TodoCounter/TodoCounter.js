import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoCounter.css'

// const styles = {
//     color: 'red'
// }

// USANDO REACT CONTEXT
function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        // <h2 style={styles}>Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}
// USANDO PROPS
// function TodoCounter({ total, completed }) {
//     return (
//         // <h2 style={styles}>Has completado 2 de 3 TODOs</h2>
//         <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
//     );
// }

export { TodoCounter }