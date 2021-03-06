import React from 'react'

function Card(props) {

  return (
    <React.Fragment>
        <div className="box">
            <div className="user">
                <div className="user-info">
                    <h1>{props.title}</h1>
                    <h3>Se han encontrado: -{props.total}-</h3>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Card