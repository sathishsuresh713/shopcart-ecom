import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

function Orders() {

  const {products , currency,cartData} = useContext(ShopContext);

  return (
    <div className='container my-5'>
      <h3 className='fw-bold'>MY ORDERS</h3>
      <div>
        {
          products.slice(0,4).map((item,index) => {
            return (
              <div className='my-4' key={index}>
                <div className='row border border-1'>
                  <div className='col-1'>
                  <img src={item.image[0]} alt="" className='img-fluid my-2' />
                  </div>
                  <div className='col-5 my-1'>
                    <p className='fw-bold mb-0'>{item.name}</p>
                    <p className=' mb-0'>{currency}{item.price}</p>
                    <p className= 'mb-0'>Quantity: 1</p>
                    <p className='mb-0'>Size: M</p>
                    <p className='mb-0'>Date: 01/01/2023</p>
                  </div>
                  <div className='col-3 my-5'>
                    <p><span className='border border-success rounded-circle px-1 bg-success text-success me-1'>.</span>Ready To Ship</p>
                  </div>
                  <div className='col-3 my-5'>
                    <button className='btn btn-primary'>Track Order</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orders
