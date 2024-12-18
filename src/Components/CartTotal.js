import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './cartTotal.css'

function CartTotal() {

const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className="container d-flex justify-content-lg-end justify-content-center p-4">
  <div className="cart-totals text-end p-4">
    <h3 className="fw-bold mb-3 text-start">CART TOTALS</h3>
    <div className="totals-details">
      <p className="d-flex justify-content-between align-items-center">
        Subtotal: <span className="fw-bold">{currency}{getCartAmount()}.00</span>
      </p>
      <p className="d-flex justify-content-between align-items-center">
        Delivery fee: <span className="fw-bold">{currency}{delivery_fee}.00</span>
      </p>
      <hr />
      <p className="d-flex justify-content-between align-items-center total-amount">
        Total: <span className="fw-bold">{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</span>
      </p>
    </div>
  </div>
</div>

  
  )
}

export default CartTotal
