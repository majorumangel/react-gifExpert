import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Blade Runner']);


  // Func agrega nueva categoria
  const onAddCategory = ( newCategory ) => {
    // categories.push(newCategory);

    // Validamos si ya se incluyo un elemento en el arreglo para no repetirlo:
   /*  if( categories.includes(newCategory)) return;
    // Si no se repite, se inserta:
      setCategories( [ newCategory, ...categories ]); */
      
    // Lo mismo que arriba pero utilizando condicional tarnerio just because:
    categories.includes(newCategory) ? undefined : setCategories([newCategory, ...categories]);

  }

  return (
    <>
      
      <h1 className="Titulo">Finder</h1>

     
      <AddCategory
        //setCategories = { setCategories }
        onNewCategory={ (value) => onAddCategory(value)  }
      />
 
 
      { 
        categories.map( ( category ) => (
            <GifGrid 
              key={ category } category={ category }
            />
          )
        )
      } 

    </>
  )
}
