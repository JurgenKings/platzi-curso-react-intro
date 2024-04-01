import React from 'react'
import './App.css';
import { TodoProvider } from './components/TodoContext/TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Tomar el Curso', completed: true},
//   {text: 'LLorar con la llorona', completed: false},
//   {text: 'Estudiar', completed: true},
// ]

function App() {
  return (
    // Es buena idea separar la logica funcional de la parte que pinta la interfaz y enviarlas como props
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
