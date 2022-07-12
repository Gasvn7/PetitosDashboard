import React from 'react'
import {useEffect, useState} from 'react';
import Card from './Card';


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
    let allProducts = {
        title: 'Productos -',
        total: products.count,
        category: products.categoryCount,
        brand: products.brandCount,
        size: products.sizeCount
    }
    let productsProps = [allProducts]

  return (
    <React.Fragment>
              {/* <!-- Principio de los productos  --> */}
              {/* <!-- deal section ends --> */}

              <section class="products" id="products">
                  <h1>Productos:</h1>
                  <div class="box-container">
                  {productsProps.map((props,i)=>{
                        return <Card {...props} key={i} />
                      })}
                  </div>
              </section>
              {/* <!-- Final de los productos  --> */}
    </React.Fragment>
  )
}

export default Products