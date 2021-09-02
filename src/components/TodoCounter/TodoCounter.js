import React from "react";
import './TodoCounter.css'

// const styles = {
//     color: 'red'
// }

function TodoCounter({ total, completed }) {
    return (
        // <h2 style={styles}>Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter }