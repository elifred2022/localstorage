import React, { useState } from 'react'
import Profile from './Profile';

const Home = () => {

    const [ inputText, setInputText] = useState();
    const [ saveData, setSaveData] = useState(false);

    const handleInputChange = (e) => {
        const text = e.target.value
        setInputText(text);
        console.log(inputText);
        setSaveData(true);
    }

    const saveDate = () => {
        localStorage.setItem("nombre", inputText)
       // alert("guardaste")
    }

  return (
    <div>
      <input onChange={handleInputChange} type="text" placeholder='ingresa nombre' className='input'/>
      <button onClick={saveDate} className='boton'>Guardar</button>
         
    </div>
  )
}

export default Home
