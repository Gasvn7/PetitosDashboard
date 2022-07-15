import React from 'react';
import {useEffect, useState} from 'react';
import IndCategory from './IndCategory';

function Category() {
   //Trayendo los productos
   let [categories, setCategories] = useState([]);
   
   let getCategories = async () => {
       await fetch('http://localhost:3500/api/products/categories')
       .then(response => response.json())
       .then(data=> setCategories(data))
   };
   useEffect(()=>{
      getCategories()
      console.log(categories)
     
   }, []);
   let category = [];
   
  return (
    <React.Fragment>
      <section className="products" id="products">
          <h1>Categorías:</h1>
          <div className="box-container">
          {categories.map((cat,i)=>{
            if (cat.cant>0) {
              return <IndCategory {...cat} key={i} />
            }
                
              })}
          </div>
      </section>
    </React.Fragment>
  )
}

export default Category