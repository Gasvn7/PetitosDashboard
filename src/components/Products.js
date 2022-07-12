import React from 'react'

function Products() {
  return (
    <React.Fragment>
        <div className="box">
            {/* <img className="product-img" src="/img/usersImages/<%= producto.image %>"
                alt="<%= producto.image%>"/> */}
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <h3>
                    producto.name
                </h3>
                <div className="price">
                    producto.price
                </div>
           </div>
        </div>

    </React.Fragment>
  )
}

export default Products