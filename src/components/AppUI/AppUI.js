import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm } from '../TodoForm/TodoForm';
import { Modal } from "../Modal/Modal"
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoError } from '../TodoError/TodoError';
import { TodoEmpty } from "../TodoEmpty/TodoEmpty";


function AppUI() {
    // const value = React.useContext(TodoContext)
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <div className="container">
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                {(error && !loading) && <TodoError />}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <TodoEmpty />}
                {searchedTodos.map(todo => (
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                <CreateTodoButton
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
                </TodoList>
                { openModal &&
                    <Modal>
                        <TodoForm/>
                    </Modal>
                }
            </div>
        </React.Fragment>
        // OPCION USANDO CONSUMER
        // <React.Fragment>
        //     <div className="container">
        //         <TodoCounter />
        //         <TodoSearch />
        //         <TodoContext.Consumer>
        //             {({
        //                 error,
        //                 loading,
        //                 searchedTodos,
        //                 toggleCompleteTodo,
        //                 deleteTodo
        //             }) => (
        //                 <TodoList>
        //                 {error && <p>Puedes entrar en panico,hubo    un error</p>}
        //                 {loading && <p>Estamos cargando</p>}
        //                 {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        //                 {searchedTodos.map(todo => (
        //                     <TodoItem
        //                     key={todo.text}
        //                     text={todo.text}
        //                     completed={todo.completed}
        //                     onComplete={() => toggleCompleteTodo(todo.text)}
        //                     onDelete={() => deleteTodo(todo.text)}
        //                     />
        //                 ))}
        //                 </TodoList>
        //             )}
        //         </TodoContext.Consumer>
        //     </div>
        // </React.Fragment>
    )
}

export { AppUI }