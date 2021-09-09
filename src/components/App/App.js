// import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from '../AppUI/AppUI';

// const defaultTodos = [
//   { text: "Llorar con la llorona", completed: true },
//   { text: "Desayunar", completed: false },
//   { text: "Terminar el curso de React", completed: false },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
