import React, { useContext, useState } from 'react'
import './placeorder.css'
import CartTotal from '../Components/CartTotal'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from '../Context/ShopContext';

function PlaceOrder() {

const [method, setMethod] = useState('cod');
const {clearCartCount} = useContext(ShopContext);
const navigate = useNavigate();

const haldleclick = () => {
  clearCartCount(); // Reset the cart count
  navigate("/"); // Navigate to the home page
  toast.success("Order Placed Successfully", { autoClose: 2000, position: "top-center" });
};


  return (
    <div className="container my-5">
  <h3 className="fw-bold mb-4">DELIVERY INFORMATION</h3>
  <div className="row">
    {/* Left side: Delivery Information Form */}
    <div className="col-lg-6 col-12 delivery-form my-4 ">
      <form className="row g-3">
        {/* Firstname and Lastname */}
        <div className="col-md-6">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Enter first name"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter last name"
          />
        </div>

        {/* Email Address */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email address"
          />
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone number"
          />
        </div>

        {/* Street Address */}
        <div className="col-12">
          <label htmlFor="street" className="form-label">
            Street Address
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            placeholder="1234 Main St"
          />
        </div>

        {/* City and State */}
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter city"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            placeholder="Enter state"
          />
        </div>

        {/* Zipcode and Country */}
        <div className="col-md-6">
          <label htmlFor="zipcode" className="form-label">
            Zip Code
          </label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            placeholder="Zipcode"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder="Enter country"
          />
        </div>
      </form>
    </div>

    {/* Right side: Cart Total */}
    <div className="col-lg-6 col-12">
      <CartTotal />
      <div className="text-end my-5">
  <h3 className="fw-bold mb-4">PAYMENT METHOD</h3>
  
  {/* Payment Methods Container */}
  <div className="payment-methods">
    {/* Stripe Payment Method */}
    <div className={`payment-method ${method === 'stripe' ? 'border border-success border-4' : ''}`}>
      <p className='fw-bold' onClick={() => setMethod('stripe')} >STRIPE</p>
    </div>
    
    {/* Razorpay Payment Method */}
    <div className={`payment-method ${method === 'razorpay' ? 'border border-success border-4' : ''}`}>
      <p className='fw-bold' onClick={() => setMethod('razorpay')}>RAZORPAY</p>
    </div>
    
    {/* Cash on Delivery Payment Method */}
    <div className={`payment-method ${method === 'cod' ? 'border border-success border-4' : ''}`}>
      <p className="fw-bold" onClick={() => setMethod('cod')}>CASH ON DELIVERY</p>
    </div>
  </div>
</div>
<div className='text-center my-3' onClick={() => haldleclick()}>
  <button className='btn btn-dark btn-lg'>PLACE ORDER</button>
</div>
</div>

    </div>
  </div>
  )
}

export default PlaceOrder
