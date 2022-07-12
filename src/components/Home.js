import React from 'react';
import HomeText from './HomeText';
import Users from './Users';
import Products from './Products';
import Category from './Category';
import Error404 from './Error404';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
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

    //Trayendo los productos
    let [products, setProducts] = useState([]);

    let getProducts = async () => {
        await fetch('http://localhost:3500/api/products')
        .then(response => response.json())
        .then(data=> setProducts(data))
    };
    useEffect(()=>{
        getProducts()
    }, []);

    let allUsers = {
        total: users.count || 'No hay usuarios'
    };
    let allProducts = {
        total: products.count || 'No hay productos',
        category: products.categoryCount || 'No hay categorías',
        brand: products.brandCount || 'No hay marcas',
        size: products.sizeCount || 'No hay tallas'
    }
    let props = [allUsers, allProducts];

    console.log(products)

  return (
    <React.Fragment>
        <div>
            <main className="main-home">
                <section className="portada" id="home">
                    <div className="portadatexto">
                        <h3>¡Bienvenidos a el Dashboard de Petitos Shop!</h3>
                        <p>Aquí podras ver los datos de nuestro sitio Web.</p>
                        <p> Siempre puedes contactar a nuestro soporte para cualquier consulta o duda.</p>
                    </div>
                </section>
                <div className="box-container">
                    
                    <Routes>
                        <Route path="/" exact element={<HomeText />}/>
                        <Route path="/users" element={<Users />}/>
                        <Route path="/products" element={<Products />}/>
                        <Route path="/category" element={<Category />}/>
                        <Route component={Error404}/>
                    </Routes>
                
                </div>
                <section className="BANNERSINOMBRE">
                    <div className="icons">
                        <i className="fas fa-dolly"></i>
                        <div className="info">
                            <h4 className="h4bannersinnombre">Envíos en Capital y todo el País</h4>
                            <p className="pbannersinnombre">Te envíamos tu pedido a tu domicilio</p>
                        </div>
                    </div>
                    <div className="icons">
                        <i className="fas fa-cat"></i>
                        <div className="info">
                            <h4 className="h4bannersinnombre">Cuida a tu mascota</h4>
                            <p className="pbannersinnombre">Dale a tu perro un producto de la mejor calidad</p>
                        </div>
                    </div>
                    <div className="icons">
                        <i className="fas fa-user-circle"></i>
                        <div className="info">
                            <h4 className="h4bannersinnombre">Tu compra esta protegida</h4>
                            <p className="pbannersinnombre">Todos los medios de pagos</p>
                        </div>
                    </div>
                    <div className="icons">
                        <i className="far fa-credit-card"></i>
                        <div className="info">
                            <h4 className="h4bannersinnombre">Atención personalizada</h4>
                            <p className="pbannersinnombre">Envíanos un mensaje y te ayudamos con tu consulta</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </React.Fragment>
  );
}

export default Home;