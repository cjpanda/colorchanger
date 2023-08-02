import React from 'react';
import colorNames from 'colornames';


//Distructure
const InputBox = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    //Annonumous Function ()=> with an Event(e) to Handle and Stop the refresh when Form is Submitted
    <form onSubmit={(e) => e.preventDefault()}>
        <label > Add Color Name: </label>
        <input
            autoFocus
            type= "text"
            placeholder= "Add Color Name"
            required
    // adding the Value makes the Input Form Controlled
            value ={colorValue}
    // The onChange Event targets the value of the Input 
            onChange={(e) => {
              setColorValue(e.target.value)
              setHexValue(colorNames(e.target.value));
            }}
        /> 
    {/* Add a button to toggle the Props Distructed */}
      <button
        type= "button"
        onClick={()=> setIsDarkText(!isDarkText)}
      >Toggle Text Color 
      </button>
    </form>
  )
}

export default InputBox