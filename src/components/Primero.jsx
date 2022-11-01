import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Primero = ({nombre,numerico,edad = 25}) => {
    // let imprime = 'imprime en HTML'

    const [Contador, setContador] = useState(0)
    console.log(nombre,numerico)
  return (
    <>
    <h1>nombre: {nombre}</h1>
    <h2>numero: {numerico}</h2>
    <h2>edad: {edad}</h2>
    <h1>contador:{Contador}</h1>
    <button className="btn btn-primary" onClick={() => setContador(Contador + 1)}>
        Aumentar
    </button>

    <button className="btn btn-danger" onClick={() => setContador(Contador - 1)}>
        Decrementar
    </button>

    <button className="btn btn-success" onClick={() => setContador(0)}>
        Reset
    </button>

    </>

  )
}
Primero.propTypes = {
    numerico: PropTypes.string.isRequired

}

export default Primero