import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './cart.css'
import { assets } from '../assests/assets';
import CartTotal from '../Components/CartTotal';
import { useNavigate } from 'react-router-dom';

function Cart() {

const {products,currency,cartItems,updateQuantity} = useContext(ShopContext)

const [cartData, setCartItems] = useState([]);

const navigate = useNavigate();


useEffect(() => {
  const tempData = [];

  for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item] > 0){
        tempData.push({ _id: items, 
          size: item,
          quantity: cartItems[items][item] });
      }
    }
  }

  setCartItems(tempData);
},[cartItems])

  return (
    <div className="container my-5">
    <h2 className="fw-bold text-center">YOUR CART</h2>
    <div>
      {cartData.map((item) => {
        const product = products.find((product) => product._id === item._id);
        return (
          <>
            <hr />
            <div className="row my-3" key={item._id}>
              {/* Product Image */}
              <div className="col-12 col-lg-2 text-center">
                <img
                  src={product.image[0]}
                  alt='product'
                  className="img-fluid img-des1"
                />
              </div>
  
              {/* Product Details */}
              <div className="col-12 col-lg-4">
                <p className="fw-bold mb-1">{product.name}</p>
                <p className="mb-1">
                  Size:{" "}
                  <span className="btn btn-dark py-0 btn-sm">{item.size}</span>
                </p>
                <p className="mb-1">
                  Quantity:{" "}
                  <span className="btn btn-dark py-0 btn-sm">
                    {item.quantity}
                  </span>
                </p>
                <p className="fw-bold mb-0">
                  {currency}
                  {product.price}
                </p>
              </div>
  
              {/* Input Field and Bin Icon */}
              <div className="col-12 col-lg-6 bin-container">
                {/* Input Field */}
                <input
                  type="number"
                  defaultValue={item.quantity}
                  min={1}
                  className="inp-des"
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                />
                {/* Bin Icon */}
                <img
                  src={assets.bin_icon}
                  alt="bin"
                  className="bin-icon my-2"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
    <CartTotal />
    <div className='d-flex justify-content-end mb-5'>
      <button className="btn btn-dark py-2 m-2" onClick={()=>navigate('/placeorder')} >PROCEED TO PLACEORDER</button>
    </div>
  </div>
  

  )
}

export default Cart
