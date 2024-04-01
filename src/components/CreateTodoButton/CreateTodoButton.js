import './CreateTodoButton.css';

// Componente Boton para crear nuevos TODOs
function CreateTodoButton({setOpenModal}) {
   return (
      <button 
         className="btn-crear pulse-button"
         onClick={e => {
         // Cada vez que se vaya a usar un evento, el codigo debe de estar encapsulado en una funcion: ej: onEvento={funcion}. React internamente transforma cada onEvento a un addEventListener
         console.log('Le diste Click');
         console.log(e);
         console.log(e.target);
         // setOpenModal(state => !state) recibe un estado booleano y devuele su valor contrario, es decir, si era true lo pone false y viceversa
         setOpenModal(state => !state);
      }}>
         +
      </button>
   );
}

// Es mejor hacer export nombrados y no por default
export { CreateTodoButton }