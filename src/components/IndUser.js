import React from 'react'

function IndUser(props) {
  return (
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h1>Ultimo creado: {props.id}</h1>
                    <span>Nombre: {props.first_name}</span><br/>
                    <span>Apellido: {props.last_name}</span><br/>
                    <span>Email: {props.email}</span><br/>
                    <span>Creación: {props.updated_at}</span><br/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default IndUser