import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from './components/TodosLoading/TodosLoading';
import { TodosError } from './components/TodosError/TodosError';
import { EmplyTodos } from './components/EmplyTodos/EmplyTodos';
import { TodoContext } from './components/TodoContext/TodoContext';
import { Modal } from './components/Modal/Modal';
import { TodoForm } from './components/TodoForm/TodoForm';

// Recibir como props la logica ya procesada y ahora si pintar la interfaz
function AppUI() {
   const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
   } = React.useContext(TodoContext);

   return (
      // Cuando se hace un return solo se puede devolver un solo contenedor, es decir, no existen elementos hermanos sin padres, se usa: React.Fragment o <> </> para simular un padre y no renderizar nada en el DOM, es decir, se ignora, el mejor es: <> </>
      <>
         {/* A traves de las props se pueden pasar estados de padre a hijo */}
         <TodoCounter />
         <TodoSearch />
  
         <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmplyTodos/>}
            {/* Al iterar en una lista (arreglo) cada elemento debe tener una propiedad key distinta */}
            {searchedTodos.map(todo => (
               <TodoItem
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  // No se puede mandar parametros a una funcion que se ejecuta en un evento, la solucion es ejecutar la funcion en otra funcion
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
               />
            ))}
         </TodoList>
  
         <CreateTodoButton setOpenModal={setOpenModal}/>

         {openModal && (
            <Modal>
               <TodoForm/>
            </Modal>
         )}
      </>
   );
}

export { AppUI };