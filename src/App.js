// import the Components Square.js, Input Box
import Square from "./Square";
import InputBox from "./InputBox";
import { useState } from "react";


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState ('')
  //Parsing the props down to the Components 
  return (
    <div className="App">
      <Square
        colorValue= {colorValue}
        hexValue ={hexValue}
      />
      <InputBox
        colorValue= {colorValue}
        setColorValue= {setColorValue}
        setHexValue = {setHexValue}
      />
    </div>
  );
}

export default App;
