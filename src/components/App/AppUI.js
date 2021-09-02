import React from 'react'
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
            <div className="container">
                <TodoCounter
                total={totalTodos}
                completed={completedTodos}
                />
                <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                />
                <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                </TodoList>
            </div>
        </React.Fragment>
    )
}

export { AppUI }