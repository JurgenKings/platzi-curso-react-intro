import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

// Componente formulario en el modal para crear nuevos TODOs
function TodoForm() {
   const {
      addTodo,
      setOpenModal
   } = React.useContext(TodoContext);

   // Crear estado que tendra el valor del textarea y por ende el nuevo TODO
   const [newTodoValue, setNewTodoValue] = React.useState('');

   // Funcion que se ejecuta en el evento submit del formulario
   const onSubmit = e => {
      // Prevenir accion por defecto, para que el formulario no se procese 
      e.preventDefault();
      // Llamar a la funcion añadir TODO con el valor del estado newTodoValue
      addTodo(newTodoValue);
      // Hacer desaparecer el modal cambiando el valor de su estado
      setOpenModal(false);
   }

   // Funcion que se ejecuta si se pulsa el boton de cancelar
   const onCancel = e => {
      // Hacer desaparecer el modal cambiando el valor de su estado
      setOpenModal(false);
   }

   // Funcion que se ejecuta al cambiar algo en el textarea, es decir, al poner cada letra se va ejecutando
   const onChange = e => {
      // Actualizar el valor del estado newTodoValue con el valor del e.target (el textarea)
      setNewTodoValue(e.target.value);
   }

   return (
      <form onSubmit={onSubmit}>
         <label>Escribe tu nuevo TODO</label>
         <textarea
            placeholder="Cortar cebolla para el almuerzo..."
            value={newTodoValue}
            onChange={onChange}
            required
         />
         <div className="todoForm-buttonContainer">
            <button
               type="button"
               className="todoForm-button todoForm-button--cancel"
               onClick={onCancel}
            >Cancelar
            </button>
            <button
               type="submit"
               className="todoForm-button todoForm-button--add"
            >Añadir
            </button>
         </div>
      </form>
   );
}

// Es mejor hacer export nombrados y no por default
export { TodoForm };