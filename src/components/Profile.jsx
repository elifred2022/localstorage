import React, { useState, useEffect } from 'react'


const Profile = () => {

    const [ nombre, setNombre] = useState();
    const [ apellido, setApellido] = useState();

    const getData = () => {
       return localStorage.getItem("nombre")
    }

    useEffect(() => {
        setNombre(getData());
    }, [] );

  return (
    <div>
      <h2>Nombre: {nombre} </h2>
    </div>
  )
}

export default Profile
