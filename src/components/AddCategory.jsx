import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {
  
  const [InputValue, setInputValue] = useState('');
  
  const onInputChange = (event) => {
    setInputValue( event.target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(InputValue.trim().length <= 1) return;

    // setCategories(categories => [ InputValue, ...categories]);
    setInputValue('');
    onNewCategory( InputValue.trim() )
    
  }

    return (
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Pick your poison"
            value={ InputValue }
            onChange={ onInputChange }
            />
        </form>
    )   
}
