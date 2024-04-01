import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';

// Componente para filtrar TODOs
function TodoSearch() {
   // Los estados son variables dentro de un componente, no se pueden pasar de componentes hijos a padres, pero si de padres a hijos
   // ej: const [estado, setEstado] = useState(estadoInicial)... donde estado es la variable que tiene el valor de ese estado y no se puede cambiar su valor, solo se cambia con setEstado ya que es una funcion para actualizar el valor de esa variable estado
   const {
      totalTodos,
      searchValue,
      setsearchValue
   } = React.useContext(TodoContext);

   return (
      <>
         {/* Solo se renderiza el input si existe minimo 1 TODO */}
         {totalTodos !== 0 && (
            <input 
               placeholder="Cortar Cebolla"
               value={searchValue}
               onChange = {(e) => {
                  console.log('Escribiste en el TodoSearch');
                  console.log(e);
                  console.log(e.target);
                  console.log(e.target.value);
                  setsearchValue(e.target.value);
               }}
            >
            </input>
         )}
      </>
   )
}

// Es mejor hacer export nombrados y no por default
export { TodoSearch }