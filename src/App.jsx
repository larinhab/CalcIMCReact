import './App.css'
import Data from './data/data.js'
import { useState } from 'react'

import  Imccalc  from './components/imccalc/imcCalc.jsx'
import ImcTable from './components/imctable/ImcTable.jsx'


// GERENCIA TODOS OS ESTADOS GLOBAIS
function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    
    console.log(height, weight)

    if(!weight || !height ) return
    
    console.log("executou")

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const imcResult = (weightFloat /(heightFloat * heightFloat).toFixed(1))
  
    console.log(imcResult)
    setImc(ImcTable)
  }

  const [ imc, setImc ] = useState("")
  const [ info, setInfo ] = useState("")
  const [ infoClass, setInfoClass ] = useState("") 


  return (
    <>

    <div className='container'>

    {
      // Se tiver imc preenchido executa
      !imc ? (   <Imccalc calcImc={ calcImc }/>  ) 
      // SE NÃO :
      : (
        <ImcTable/> )
      
      } 

    </div>

    </>
  )
}

export default App
