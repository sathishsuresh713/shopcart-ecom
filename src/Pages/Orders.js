import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

function Orders() {
  const { products, currency, cartItems } = useContext(ShopContext);

  // Transform cartItems to renderable data
  const orderData = Object.entries(cartItems).flatMap(([itemId, sizes]) => {
    const product = products.find((product) => product._id === itemId);
    if (!product) return [];

    return Object.entries(sizes).map(([size, quantity]) => ({
      ...product,
      size,
      quantity,
    }));
  });

  return (
    <div className='container my-5'>
      <h3 className='fw-bold'>MY ORDERS</h3>
      <div>
        {orderData.length === 0 ? (
          <p>No orders found!</p>
        ) : (
          orderData.map((item, index) => (
            <div className='my-4' key={index}>
              <div className='row border border-1'>
                <div className='col-1'>
                  <img src={item.image[0]} alt={item.name} className='img-fluid my-2' />
                </div>
                <div className='col-5 my-1'>
                  <p className='fw-bold mb-0'>{item.name}</p>
                  <p className='mb-0'>
                    {currency}
                    {item.price}
                  </p>
                  <p className='mb-0'>Quantity: {item.quantity}</p>
                  <p className='mb-0'>Size: {item.size}</p>
                  <p className='mb-0'>Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div className='col-3 my-5'>
                  <p>
                    <span className='border border-success rounded-circle px-1 bg-success text-success me-1'>.</span>
                    Ready To Ship
                  </p>
                </div>
                <div className='col-3 my-5'>
                  <button className='btn btn-primary'>Track Order</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;
