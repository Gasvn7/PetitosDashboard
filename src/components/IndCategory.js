import React from 'react'

function Individual(props) {
  return (
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h1>Categoría {props.id}</h1>
                    <span>Nombre: {props.category}</span>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Individual