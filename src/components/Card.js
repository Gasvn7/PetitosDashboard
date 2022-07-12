import React from 'react'

function Card(props) {

  return (
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h3>{props.title}</h3>
                    <span>Se han encontrado: "{props.total}"</span>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Card