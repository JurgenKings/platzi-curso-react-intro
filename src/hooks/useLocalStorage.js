import React from 'react';

// Custom Hooks para manejar el LocalStorage, se puede reutilizar
function useLocalStorage(itemName, initialValue) {
   const [item, setItem] = React.useState(initialValue);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(false);

   // useEffect(funcion, [2do argumento]): Hooks poderoso, permite ejecutar una funcion dependiendo de el 2do argumento, por lo general esa funcion tiene una logica pesada que queremos que se ejecute cuando queremos, el 2do argumento siempre es un Array []... si es un [] vacio, quiere decir que la funcion se va a ejecutar una sola vez y al finalizar de pintarse todo lo demas en el componente (Muy Util porque encapsula y garantiza que una funcion se ejecuta una sola vez y no al haber el mas minimo cambio en el componente)... si es un [estado, etc] la funcion se va a ejecutar cuando estado, etc cambie su valor, si cambia 10 veces, 10 veces se ejecuta la funcion (Muy Util porque permite ejecutar algo despues que se haya renderizado de nuevo el componente, un efecto colateral despues de ese evento por ejemplo)... Si se olvida el 2do argumento, entonces el efecto funciona como un bucle infinito (ERROR)
    React.useEffect(() => {
    // Simular estado de carga con un setTimeout
    setTimeout(() => {
      // Bloque try-catch para manejar posibles errores al acceder al localStorage (LS)
      try {
        // localStorage SOLO puede guardar string, mas nada. Para guardar en LS primero convertir a cadena con JSON.stringify()... para leer del ls hay que convertir a el tipo de dato original con JSON.parse()
        // Se guarda en una variable el elemento recuperado del LS pasado como parametro
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        // Si la variable que recuperó el elemento del LS no existe, es nula o undefined, aun no existe en el LS
        if (!localStorageItem) {
          // Se almacena en LS, aca deberia ser una array vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          // En cambio si existia algo LS
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem); 
        }
  
      } catch (err) {
        setError(true);
      } finally {
        // Desaparecer el loading si hubo exito o si hubo error
        setLoading(false);
       }
    }, 3000);
   }, []);
 
   // Funcion para almacenar en LS, es decir, para actualizar su valor
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, JSON.stringify(newItem));
     setItem(newItem);
   }

   // Se recomienda que al retornar mas de dos cosas, se haga a modo de objeto
   return {
    item, 
    saveItem, 
    loading, 
    error
   };
}

export { useLocalStorage };
 