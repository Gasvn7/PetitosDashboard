import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
        <header className="header-top">
            <div className="container-headder">
                <div className="header-inter">
                    <nav>
                        <div className="nav-bar">
                            <i className='bx bx-menu sidebarOpen'></i>

                            <div className="menu">
                                <div className="logo-toggle">
                                    <span className="logo">PetitoShop</span>
                                    <i className='bx bx-x sidebarClose'></i>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <h1 className="header-logo">
                            <span>PetitoShop</span>
                    </h1>
                    
                </div>
            </div>
        </header>
        <nav className="nav-bar">
            
            <div className="nav-bar-inter">
                
                <div className="nav-bar-container">
                    <ul className="nav-barlinks">
                        {/* <li className="nav-baritems"><span>PetitoShop</span></li> */}
                        <li className="nav-baritems center"><Link to="/">Inicio</Link></li>
                        <li className="nav-baritems center"><Link to="/users">Usuarios</Link></li>
                        <li className="nav-baritems center"><Link to="/category">Categorías</Link></li>
                        <li className="nav-baritems center"><Link to="/products">Productos</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header