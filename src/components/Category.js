import React from 'react';
import {useEffect, useState} from 'react';
import Card from './Card';

function Category() {
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
       title: 'Categorías -',
       total: products.categoryCount,
   }
   let productsProps = [allProducts]
  return (
    <React.Fragment>
              {/* <!-- Principio de los productos  --> */}
              {/* <!-- deal section ends --> */}

              <section class="products" id="products">
                  <h1>Categorías:</h1>
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

export default Category