// Se pueden usar estilos en linea pasando un objeto con las propiedades en camelCase, pero: 
// La mejor forma de tener estilos css es importar un archivo exclusivo .css para cada componente 
import React, { useEffect } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

// Componente para el mensaje con el contador de TODOs
function TodoCounter() {
   // Extraer del TodoContext solo lo que va a usar este Componente nada mas
   const {
      completedTodos,
      totalTodos,
      loading
   } = React.useContext(TodoContext);

   const [message, setMessage] = React.useState("");

   // Funcion para cambiar el mensaje del contador h1
   const createMessage = () => {
      if (loading) setMessage(`Cargando...`);
      else if (totalTodos) {
         setMessage(completedTodos === totalTodos
            ? `Felicidades, has completado todos los TODOs!!!`
            : `Has completado ${completedTodos} de ${totalTodos} TODOs`);
      } else setMessage(`No Tienes TODO, Crea Uno!!!`);
   };

   // Aca se cambia el mensaje solo si se actualiza ciertos estados
   useEffect(() => {
      createMessage();
   }, [totalTodos, loading, completedTodos])
   
   return (
      <h1>
         {message}
      </h1>
   )
}

// Es bueno no exportar por defecto porque a la hora de importarlo se puede con cualquier nombre
export { TodoCounter }