import React from "react";
// import { CreateTodoButton } from "./CreateTodoButton"
import "./TodoSearch.css"

function TodoSearch({ searchValue, setSearchValue }) {
    // const [searchValue, setSearchValue] = React.useState('')

    const onSearchValueChange = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
        <div id="newtask">
            <input
                type="text"
                placeholder="Task to be searched..."
                value={searchValue}
                onChange={onSearchValueChange}
            />
            {/* <CreateTodoButton /> */}
        </div>
    );
}

export { TodoSearch }