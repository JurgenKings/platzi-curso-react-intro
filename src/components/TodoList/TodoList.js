import './TodoList.css';

// Componente que contendrá a cada TODO
function TodoList({children}) {
   return (
      <ul>
         {/* props.children es una propiedad especial, React convierte a todo el contenido interno [pueden ser otros componentes] de un componente a props.children */}
         {/* {props.children} */}
         {/* Forma desestructrura */}
         {children}
      </ul>
   )
}

// Es mejor hacer export nombrados y no por default
export { TodoList }