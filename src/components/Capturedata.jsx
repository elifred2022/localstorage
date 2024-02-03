import React, { useEffect, useRef, useState } from 'react'
//import Profile from './Profile';

const Capturedata = () => {

    const form = useRef();

    const pedirRegistrosLocal = () => {  // funcion para recuperar datos del localstorage y se le pasa al usestate principal para q inicie con los datoos existentes
        var datos =  localStorage.getItem('registros');
        if (datos) {
            return JSON.parse(datos);
        } else {
            return [];
        }
    }

    const [registros, setRegistros] = useState(pedirRegistrosLocal()); //aqui vamos alamacenar los registros

    const [ nombre, setNombre] = useState();
    const [ apellido, setApellido] = useState();
    const [ grado, setGrado] = useState();
   

    

    const botonGuardar = (e) => { // funcion del boton guardar
        e.preventDefault();

       var miObjeto = {nombre, apellido,grado}; 
       setRegistros([...registros, miObjeto]);
        limpiarEstados();

        form.current.reset(); // para resetear campos (usamos form = useref() y en el return se coloca ref= form)

    }

    const botonEliminar = (index) => {
        const nuevosElementos = [...registros];
        nuevosElementos.splice(index, 1);
        setRegistros(nuevosElementos);
      };


    const limpiarEstados =()=>{ // funcion para limpiar los states
        setNombre("");
        setApellido("");
        setGrado("");

        //document.getElementById("capturedata").reset(); // para limpiar los campos
    }

    useEffect(()=>{ // funcion para enviar al localstorage
        localStorage.setItem("registros", JSON.stringify(registros))
    }, [registros]);

  return (
    <div>
        <form ref={form} onSubmit={botonGuardar}>
            <input onChange={(e)=> setNombre(e.target.value)} type="text" placeholder='ingresa nombre' className='input'/>
            <input onChange={(e)=> setApellido(e.target.value)} type="text" placeholder='ingresa apellido' className='input'/>
            <input onChange={(e)=> setGrado(e.target.value)} type="text" placeholder='ingresa grado' className='input'/>
            
            <button type='submit' className='boton'>Guardar</button>
        </form>
        <div>
            <ul>
                {registros.map((elem, index) => (
                    <li key={index}>
                    {elem.nombre} - {elem.apellido} - {elem.grado}
                    <button onClick={() => botonEliminar(index)}>Eliminar</button>
                    </li>
                ))}
                
            </ul>

            
        </div>
        
    </div>
  )
}

export default Capturedata;