import React from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";

// Componente Modal que se llama al dar click a crear TODO
function Modal({ children }) {
   // ReactDOM.createPortal se usa para 'teletransportar' un Componente a un nodo HTML externo al de la APP, es decir, permite renderizar en otro nodo HTML, generalmente se usa en tooltip, modales, ventanas emergentes, notificaciones, etc, elementos que no siguen el flujo 'normal'. No me gustan, evitarlos o usarlos en casos estrictamente necesarios
   return ReactDOM.createPortal(
      <div className="modal">
         {children}
      </div>,
      document.getElementById("modal")
   );
}

// Es mejor hacer export nombrados y no por default
export { Modal };