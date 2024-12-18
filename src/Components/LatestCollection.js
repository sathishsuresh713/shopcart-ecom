import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem';

function LatestCollection() {

const {products} = useContext(ShopContext);
const [latestProducts, setLatestProducts] = useState([]);

useEffect(()=>{
  setLatestProducts(products.slice(0,8));
},[])


  return (
    <>
    <div className='container mt-5 d-flex flex-row align-items-center justify-content-center'>
        <h2 className=' text-secondary me-2'>LATEST COLLECTIONS</h2>
    </div>
    <p className='text-center'>Laborum voluptate nisi pariatur amet et pariatur do.Laborum voluptate nisi pariatur amet et pariatur do.</p>
    
    <div className='container mt-5'>
      <div className='row my-4'>
        {
          latestProducts.map((product)=>{
            return (
            <div className='col-12 col-md-6 col-lg-3 mb-3'>
                <ProductItem id={product._id} image={product.image} name={product.name} price={product.price}/>
              </div>
            )
          })
        } 
        </div>
      </div>
    </>
  )
}

export default LatestCollection
