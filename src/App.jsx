import './App.css'
import { useState } from 'react'
import { data } from './data/data.js'

import  Imccalc  from './components/imccalc/imcCalc.jsx'
import Imctable from './components/imctable/ImcTable.jsx'


// GERENCIA TODOS OS ESTADOS GLOBAIS
function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    
    console.log(height, weight)

    if(!weight || !height ) return
    
    console.log("executou")

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1)
  
    console.log(imcResult)
    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if(!info) return
  }

  const [ imc, setImc ] = useState("")
  const [ info, setInfo ] = useState("")
  const [ infoClass, setInfoClass ] = useState("") 

  const resetCalc = (e) => {
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfoClass("")
  }


  return (
    <>

    <div className='container'>

    {
      // Se tiver imc preenchido executa
      !imc ? (   <Imccalc calcImc={ calcImc }/>  ) 
      // SE NÃO :
      : (
        <Imctable 
          data={ data } 
          imc={ imc } 
          info={ infoClass }
          infoClass={ infoClass }
          resetCalc= { resetCalc }/> )
      
      } 

    </div>

    </>
  )
}

export default App
