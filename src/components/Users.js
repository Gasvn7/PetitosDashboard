import React from 'react';
import {useEffect, useState} from 'react';
import IndUser from './IndUser';

function Users() {
    //Trayendo los usuarios
    let [user, setUser] = useState([]);
    
    let getUser = async () => {
        await fetch('http://localhost:3500/api/users/new')
        .then(response => response.json())
        .then(data => setUser(data))
    }
    useEffect(()=>{
        getUser()
    }, []);
    console.log(user)

  return (
    <React.Fragment>
      <section className="products" id="products">
          <h1>Usuario:</h1>
          <div className="box-container">
              <IndUser {...user} />
          </div>
      </section>
    </React.Fragment>
  )
}

export default Users