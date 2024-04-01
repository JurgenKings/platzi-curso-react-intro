import { ReactComponent as CheckSVG } from '../CompleteIcon/check.svg';
import { ReactComponent as DeleteSVG } from '../DeleteIcon/delete.svg';
import './TodoIcon.css';

// Objeto con 2 metodos, uno para cada icono, son metodos porque asi se puede cambiar el color dependiendo de las props
const iconTypes = {
   "check": (color) => <CheckSVG className="icon-svg" fill={color}/>,
   "delete": (color) => <DeleteSVG className="icon-svg" fill={color}/>
};

// Componente de icono, puede ser un Delete o un Check, depende de lo recibido en las props
function TodoIcon({ type, color, onClick }) {
   return(
      <span
         className={`icon-container icon-container-${type}`}
         onClick={onClick}
      >
         {/* Aca se renderiza un componente u otro dependiendo del type */}
         {iconTypes[type](color)}
      </span>
   )
}

// Es mejor hacer export nombrados y no por default
export { TodoIcon };