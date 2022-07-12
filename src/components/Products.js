import React from 'react'
import {useEffect, useState} from 'react';
import IndProduct from './IndProduct';


function Products() {
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
    let product = [];
    if(products.products !== undefined){
        product = products.products
        console.log(product)
    }

  return (
    <React.Fragment>
        <section className="products" id="products">
            <h1>Productos:</h1>
            <div className="box-container">
            {product.map((props,i)=>{
                return <IndProduct {...props} key={i} />
                })}
            </div>
        </section>
    </React.Fragment>
  )
}

export default Products