
import { useState } from "react";

import allWizards from "../data/wizards.json";
// console.log(allWizards)

let startingWizardsArr = allWizards.splice(0, 3)
console.log(startingWizardsArr)

console.log(allWizards.length)

function WizardsList() {

  const [ currentWizardsArr, setCurrentWizardsArr ] = useState(startingWizardsArr)

  const handleAddWizard = () => {

    // buscar un indice aleatorio del array original
    let randomIndex = Math.floor(Math.random() * allWizards.length)
    
    // removerlo del array original
    let removedWizardArr = allWizards.splice(randomIndex, 1)
    let removedWizard = removedWizardArr[0]

    // añadirlo al estado
    // currentWizardsArr.push(removedWizard) // NO :(

    // generar un nuevo que incluya los cambios que queremos hacer
    const wizardsStateClone = JSON.parse(JSON.stringify(currentWizardsArr))
    wizardsStateClone.push(removedWizard)

    // actualizar el estado con la funcion setCurrentWizardsArr
    setCurrentWizardsArr(wizardsStateClone)

  }

  const handleRemoveWizard = (elIndiceABorrar) => {
    console.log("intentando remover", elIndiceABorrar)
    // como nosotros sabemos que elemento debemos borrar
    // hacer un clone del estado
    let wizardsStateClone = JSON.parse(JSON.stringify(currentWizardsArr))

    // hacer splice del clone
    wizardsStateClone.splice(elIndiceABorrar, 1)

    // actualizar el estado 
    setCurrentWizardsArr(wizardsStateClone)
  }

  return (
    <div>
      
      <h2>Lista de personajes de Harry Potter</h2>

      <button onClick={handleAddWizard}>Añadir personajes</button>

      <hr />

      {currentWizardsArr.map((eachObject, index) => {
        return (
          <div key={eachObject.id}>
            <h4>Nombre: {eachObject.name} </h4>
            <p>Descripción: {eachObject.description}</p>
            {/* <button onClick={handleRemoveWizard}>Borrar</button> */}
            <button onClick={() => handleRemoveWizard(index)}>Borrar</button>
            <hr />
          </div>
        )
      })}

    </div>
  )
}

export default WizardsList