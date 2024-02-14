
function Events() {


  const clickarBoton = () => console.log("clickando primer botón")

  const imprimirFecha = () => console.log(new Date().toDateString())

  const handleMouseEnter = () => {
    console.log("cursor entrando al div")
  }

  const handleMouseLeave = () => {
    console.log("cursor saliendo del div")
  }

  const handleInputChange = (event) => {
    console.log("cambiando el campo", event.target.value)
  }

  return (
    <div>
      
      <h2>Aprendiendo sobre eventos en React</h2>

      <button onClick={clickarBoton}>Click</button>
      <button onClick={() => console.log("clickando 2do botón")}>Click</button>

      <h3 onDoubleClick={imprimirFecha}>Imprimir fecha de hoy</h3>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span>Hola</span>
      </div>

      <input type="text" name="username" onChange={handleInputChange}/>

      {/* handleInputChange(/* toda la info del evento */}

    </div>
  )
}

export default Events
