import React from 'react';
import {useEffect, useState} from 'react';
import Card from './Card';

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

    let allUsers = {
        title: 'Usuarios -',
        total: users.count
    };
    let userProps = [allUsers];

  return (
    <React.Fragment>
              {/* <!-- Principio de los productos  --> */}
              {/* <!-- deal section ends --> */}

              <section class="products" id="products">
                  <h1>Usuarios:</h1>
                  <div class="box-container">
                  {userProps.map((props,i)=>{
                        return <Card {...props} key={i} />
                      })}
                  </div>
              </section>
              {/* <!-- Final de los productos  --> */}
    </React.Fragment>
  )
}

export default Users