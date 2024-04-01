import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// useContext es un hook que nos permite acceder a estados globales previamente creados con createContext. Básicamente, nos permite compartir datos entre componentes sin necesidad de pasarlos manualmente a través de las props. Aquí está cómo funciona:
// createContext: Primero, creamos un contexto utilizando createContext. Este contexto actúa como un almacén global para nuestros datos.
// Provider: Luego, utilizamos el componente Provider del contexto para envolver nuestros componentes. El Provider toma un prop llamado value, donde asignamos los datos que queremos compartir.
// useContext: En cualquier componente hijo dentro del Provider, podemos usar useContext para acceder directamente a los datos almacenados en el contexto. Esto evita el “props drilling”, que es cuando pasamos datos a través de múltiples niveles de componentes y garantizar que el Componente solo llame lo que va a utilizar y nada mas.
// Si la aplicacion es muy grande, puede tener varios contextos y no uno solo general.

// Crear el contexto de la APP TODO Machine, APP pequeña, se usa un solo contexto
const TodoContext = React.createContext();

// Componente Provider personalizado, siempre es buena idea tener un Provider personalizado que reciba los children
function TodoProvider({ children }) {
   const {
      item: todos, // Aca se renombra 'item' por 'todos'
      saveItem: saveTodos, // Se cambia el nombre 'saveItem' por 'saveTodos'
      loading,
      error
   } = useLocalStorage('TODOS_V1', []);

   // useState es un Hook super comun que permite agregar una variable de estado a un componente. Utiliza la desestructuración de arrays para acceder al estado actual y a la función que actualiza dicho estado. 
   //sintaxis: const [estado, setEstado] = useState(valorInicial)... donde 'estado' es la variable que almacena los cambios que sufra dicho estado, 'setEstado' es una funcion que se usa para actualizar el valor de estado y 'valorInicial' es el valor que tiene el estado cuando se renderiza por primera vez el Componente, es comun que sea: "", '', [], 0, false, true, etc, cosas vacias.
   const [searchValue, setsearchValue] = React.useState('');
   const [openModal, setOpenModal] = useState(false);
   // completedTodos se considera un estado derivado porque depende de otro estado, igual totalTodos
   // Los !! se usan 'para decoracion' es una guia visual para saber que eso que devuelve es un booleano
   const completedTodos = todos.filter(todo => !!todo.completed).length;
   const totalTodos = todos.length;
  
   // Funcion para filtrar TODOs
   const searchedTodos = todos.filter(
      // Itera todo el arreglos de objetos 'todos' y devuelve un arreglo con los que pasen el filtro
      (todo) => {
         // Se toma el valor de la propiedad text de cada objeto todo y se pasa a minusculas
         const todoText = todo.text.toLowerCase();
         // Se toma el valor del input y se pasa a minusculas
         const searchText = searchValue.toLowerCase();
         // Se devuelve solo aquellos objetos todos cuya propiedad text tenga en algun lado el valor escrito del input
         return todoText.includes(searchText);
      }
   )

   // Funcion para añadir TODOs
   const addTodo = (text) => { 
      // newTodos es una copia exacta de todos, se esta usando el spreed operator
      const newTodos = [...todos];
      // Añadir al final de la copia
      newTodos.push({
         text,
         completed: false
      })
      // Reemplazar los viejos TODOs por el valor de la copia
      saveTodos(newTodos);
   }
  
   // Funcion para completar TODOs
   const completeTodo = (text) => {
      // newTodos es una copia exacta de todos, se esta usando el spreed operator
      const newTodos = [...todos];
      // newTodos.findIndex permite encontrar el indice del primer elemento en un array que cumpla lo establecido por cierta funcion, aca: todo.text === text devuelve el indice del primer objeto todo que tenga la propiedad text igual a el parametro text
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      // Aca en la copia se cambia la propiedad completed al objeto todo en la posicion encontrada a true si era false y viceversa
      (newTodos[todoIndex].completed) ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true;
      // Reemplazar los viejos TODOs por el valor de la copia
      saveTodos(newTodos);
   }
  
   // Funcion para eliminar TODOs
   const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      // newTodos.splice permite eliminar o añadir elementos en un array, sintaxis: splice(posInicio, cantidadAEliminarDesdePos, opcional) donde opcional puede ser otro elemento y este se inserta en el array  
      // splice(todoIndex, 1) Aca se elimina solo el objeto con ese indice
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
   }

   return (
      // Se debe colocar en el return del provider personalizado en su prop value todo lo que se desea compartir
      <TodoContext.Provider value={{
         loading,
         error,
         completedTodos,
         totalTodos,
         searchValue,
         setsearchValue,
         searchedTodos,
         addTodo,
         completeTodo,
         deleteTodo,
         openModal,
         setOpenModal
      }}>
         {/* Aca se pone que será compartido con todos sus Componentes hijos */}
         {children}
      </TodoContext.Provider>
   )
}

// Es mejor hacer export nombrados y no por default
export { TodoContext, TodoProvider };