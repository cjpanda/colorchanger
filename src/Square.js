import React from 'react'

//distructure 
const Square = ({colorValue, hexValue}) => {
  return (
    <section
      className='square'
      style={{ backgroundColor: colorValue }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue: null}</p>
    </section>
  )
}

// Default Props Shows when There is Not Input on Color Value 
Square.defaultProps = {
  colorValue :"Empty Color Value"
}

export default Square