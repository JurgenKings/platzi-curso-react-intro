import React from 'react';
import './EmplyTodos.css';

// Componente que se muestra si no existen TODOs
function EmplyTodos() {
   return (
      <div className="container">
         <div className="bubble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <div className="bubble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
         <div className="bubble">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
   );
}

// Es mejor hacer export nombrados y no por default
export { EmplyTodos }