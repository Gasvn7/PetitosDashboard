import React from 'react'

function Individual(props) {
  return (
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h1>Producto {props.id}</h1>
                    <span>Nombre: {props.name}</span><br/>
                    <span>Detalles: {props.details}</span><br/>
                    <span>Precio: {props.price}</span><br/>
                    <span>Cantidad: {props.quantity}</span><br/>
                    <span>Creado: {props.updated_at}</span><br/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Individual