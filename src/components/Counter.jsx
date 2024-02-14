import { useState } from "react"

function Counter() {

  // const algo = useState()
  // console.log(algo)
  const [ counterValue, setCounterValue ] = useState(0)
  console.log(counterValue)
  console.log(setCounterValue)
  // 1. el valor actual del estado
  // 2. la funcion que se debe utilizar para actualizar el estado

  // let counter = 0;
  // cada vez que tenemos valores que cambian por interacciones de usuarios o automatizadas React nos pide que usemos un Estado.

  const handleIncrease = () => {
    console.log("intentando sumar al contador")
    // counter++
    // console.log(counter)
    // no le indico a react que hubo un cambio en la variable.
    // no se renderiza de nuevo el componente :(
  
    // counterValue++
    // NUNCA DEBEMOS MODIFICAR EL ESTADO DIRECTAMENTE
    // setCounterValue( el valor nuevo del estado )
    setCounterValue( counterValue + 1 )
    // las funciones set hacen dos cosas:
    // 1. actualizar el valor el estado
    // 2. causan una nueva renderización del componente (con los nuevos valores)

  }
  // console.log("nueva renderización")
  const [ message, setMessage ] = useState("Hola")

  const students = ["fran", "meri", "josep", "abraham", "pablo", "adrio"]

  return (
    <div>
      
      <h2>Contador</h2>

      <h1>{counterValue}</h1>

      <button onClick={handleIncrease}>Increase</button>
      <button>Decrease</button>

     <h3 onClick={ () => setMessage(students[Math.floor(Math.random() * students.length)]) }>{message}</h3> 

    </div>
  )
}

export default Counter