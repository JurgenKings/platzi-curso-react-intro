import { CompleteIcon } from '../CompleteIcon/CompleteIcon'
import { DeleteIcon } from '../DeleteIcon/DeleteIcon'
import './TodoItem.css';

// Componente para cada TODO
function TodoItem(props) {
   return (
      <li>
         <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
         />
         {/* Metodo para agregar clases dinamicamente, si props.completed es true se agrega la clase, si no, pues no */}
         <p className={`p ${props.completed && "p-check--active"}`}>
            {props.text}
         </p>
         <DeleteIcon
            onDelete={props.onDelete}
         />
      </li>
   );
}

// Es mejor hacer export nombrados y no por default
export { TodoItem }