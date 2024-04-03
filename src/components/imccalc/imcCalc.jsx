import './imcCalc.css'
import { useState } from 'react'

import Button from '../button/button'

const ImcCalc = ({ calcImc }) => {
    const [ height, setHeight ] = useState("")
    const [ weight, setWeight] = useState("")

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

   // const validDigits = (text) => {
   //     return text.replace(/[^0-9,]/g, "");
   //   };
    
      const handleHeightChange = (e) => {
        const updatedValue = validDigits(e);
    
        setHeight();
      };
    
      const handleWeightChange = (e) => {
        const updatedValue = validDigits(e);
    
        setWeight();
      };


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
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}/>
                </div>

                <div className='form-control'>
                    <label htmlFor="weight">Peso</label>
                    <input 
                    type="text" 
                    name='weight' 
                    placeholder='Quantos kg você tem? Ex:70'
                    onChange={(e) => setWeight(e.target.value)}
                    value={ weight } />
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
                        action={ (e) => clearForm(e) }>
                        </Button>
                    
                </div>
                
                </div> </form>
        </div>
  )
}

export default ImcCalc 