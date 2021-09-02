// import logo from './logo.svg';
import './App.css';
import React from "react";
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: "Llorar con la llorona", completed: true },
//   { text: "Desayunar", completed: false },
//   { text: "Terminar el curso de React", completed: false },
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }
  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let  searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      let regexp = RegExp(searchValue, 'ig')
      return regexp.test(todo.text)
    })
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    toggleCompleteTodo={toggleCompleteTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
