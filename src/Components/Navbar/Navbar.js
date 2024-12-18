import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets} from '../../assests/assets'
import '../Navbar/navbar.css'
import { ShopContext } from '../../Context/ShopContext'

function Navbar() {

  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-info-subtle mb-4">
    <div className="container-lg">
      <Link to="/" className="navbar-brand">
        <img src={assets.logo} alt="Logo"  className='logo'/>
      </Link>
  
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <img src={assets.logo} alt="Logo" />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item me-2"  data-bs-dismiss="offcanvas">
              <Link to="/" className="nav-link active" aria-current="page">
                HOME
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/collection" className="nav-link">
                COLLECTION
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
  
      <div>
        <img src={assets.search_icon} className="me-3 icon-width" alt="Search" onClick={()=>setShowSearch(true)} />
        <div className="profile-icon-container me-3">
          <img src={assets.profile_icon} className="profile-icon icon-width" alt="Profile" />
          <div className="profile-dropdown">
            <Link to="/profile">MY PROFILE</Link>
            <hr className="my-0" />
            <Link to="/orders">ORDERS</Link>
            <hr className="my-0" />
            <Link to="/logout">LOGOUT</Link>
          </div>
        </div>
       <Link to="/cart">
       <img src={assets.cart_icon} className="me-3 icon-width cart-icon" alt="Cart" />
       <div className="cart-icon">
          <span className="count">{getCartCount()}</span>
        </div>
       </Link>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar
