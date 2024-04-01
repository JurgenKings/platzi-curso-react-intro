import React from 'react';
import { TodoIcon } from '../TodoIcon/TodoIcon';

// Componente Icono para eliminar TODOs
function DeleteIcon({ onDelete }) {
   return (
      <TodoIcon
         type="delete"
         color="gray"
         onClick={onDelete}
      />
   );
}

// Es mejor hacer export nombrados y no por default
export { DeleteIcon };