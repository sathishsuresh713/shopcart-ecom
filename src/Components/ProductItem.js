import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';
import './productitem.css'

function ProductItem({id,image,name,price}) {

const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-decoration-none">
    <div className="card custom-card">
      <div className="image-container">
        <img src={image[0]} className="card-img-top zoom-image" alt="..." />
      </div>
      <div className="card-body text-decoration-none">
        <div>{name}</div>
        <p className="card-text">
          {currency}
          {price}
        </p>
      </div>
    </div>
  </Link>  
  );
}

export default ProductItem
