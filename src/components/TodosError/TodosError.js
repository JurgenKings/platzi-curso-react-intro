import React from 'react';
import './TodosError.css';

// Componente que solo se renderiza si existe algun error en la APP
function TodosError() {
   return (
      <p>Error...</p>
   );
}

// Es mejor hacer export nombrados y no por default
export { TodosError }