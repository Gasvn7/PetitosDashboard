import React from 'react'

function Individual(props) {
  console.log(props)
  return (
    
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h1>Categoría {props.id}</h1>
                    <span>Cantidad: {props.cant}</span><br></br>
                    <span>Nombre: {props.category}</span><br></br>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Individual