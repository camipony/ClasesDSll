import React from 'react'

const Segundo = ({edad}) => {
    
    console.log(edad)
    let nombre = () => {
        return "Julie";
      }
      
      return (
        <h1>
          Hi {nombre()} tu edad es: {edad}!
        </h1>
        
      )
}

export default Segundo