import React from 'react'
import './imcCalc.css'
import Button from '../button/button'
import { useState } from 'react'

const ImcCalc = ({ calcImc }) => {
    const [ height, setHeight ] = useState("")
    const [ weight, setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)

        setHeight(updatedValue)
    }

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)

        setWeight(updatedValue)
    }

    const validDigits = ( text ) => {
        return text.replace(/[^0-9,]/g,"")
    }

  return (
    <div id='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className='form-inputs'>
                <div className='form-control'>
                    <label htmlFor="height">Altura</label>
                    <input 
                        type="text" 
                        name='height' 
                        placeholder='Qual sua altura? Ex: 1,70' 
                        onChange={(e) => handleHeightChange}
                        value={height}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="weight">Peso</label>
                    <input 
                    type="text" 
                    name='weight' 
                    placeholder='Quantos kg você tem? Ex:70'
                    onChange={(e) => handleWeightChange}
                    value={weight} />
                </div>

                <div className='action-control'>
                    <Button 
                        id="calc=btn" 
                        text="Calcular"
                        action={ (e) => calcImc(e, height, weight) }>
                        </Button>

                    <Button 
                        id="clear-btn" 
                        text="Limpar"
                        action={ clearForm }>
                        </Button>
                    
                </div>
                
                </div> </form>
        </div>
  )
}

export default ImcCalc 