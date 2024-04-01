import React from 'react';
import { TodoIcon } from '../TodoIcon/TodoIcon';

// Componente Icono para completar TODOs
function CompleteIcon({ completed, onComplete }) {
   return (
      <TodoIcon
         type="check"
         color={completed ? 'green' : 'gray'}
         onClick={onComplete}
      />
   );
}

// Es mejor hacer export nombrados y no por default
export { CompleteIcon };