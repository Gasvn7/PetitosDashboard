import React from 'react';
import {useEffect, useState} from 'react';
import IndUser from './IndUser';

function Users() {
    //Trayendo los usuarios
    let [users, setUsers] = useState([]);
    
    let getUsers = async () => {
        await fetch('http://localhost:3500/api/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }
    useEffect(()=>{
        getUsers()
    }, []);
    let user = [];
    if(users.user !== undefined){
        user = users.user
        console.log(user)
    }

  return (
    <React.Fragment>
      <section className="products" id="products">
          <h1>Usuarios:</h1>
          <div className="box-container">
          {user.map((props,i)=>{
                return <IndUser {...props} key={i} />
              })}
          </div>
      </section>
    </React.Fragment>
  )
}

export default Users