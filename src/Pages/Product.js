import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, products } from '../assests/assets';
import { ShopContext } from '../Context/ShopContext';
import './product.css'

function Product() {

  const {productId} = useParams();
  const {currency,addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {
    
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
  }, [productData, productId])

  return productData ? (
    <div className='container my-5'>
    <div className='row'>
      {/* Product Thumbnails */}
      <div className='col-12  col-lg-1 order-2 order-lg-1 text-center text-lg-end mb-3 mb-lg-0'>
        <div className='d-flex d-lg-block overflow-auto'>
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              alt='product thumbnail'
              className='img-fluid img-des my-2 me-2 me-lg-0'
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
  
      {/* Main Product Image */}
      <div className='col-12 col-lg-4 order-1 order-lg-2 text-center mb-3 mb-lg-0'>
        <img src={image} alt='product' className='img-fluid my-2' />
      </div>
  
      {/* Product Details */}
      <div className='col-12 col-lg-7 order-3 text-start'>
        <h2>{productData.name}</h2>
        {/* Ratings */}
        <div className='d-flex align-items-center mb-3'>
        <div className='d-flex'>
          <img src={assets.star_icon} alt='star' className='me-1' />
          <img src={assets.star_icon} alt='star' className='me-1' />
          <img src={assets.star_icon} alt='star' className='me-1' />
          <img src={assets.star_icon} alt='star' className='me-1' />
          <img src={assets.star_dull_icon} alt='star' className='me-1' />
        </div>
        <p className='fw-bold ms-2 mb-0'>(122)</p>
      </div>

        {/* Price */}
        <p className='fw-bold'>{currency}{productData.price}</p>
        <p>{productData.description}</p>
  
        {/* Size Selection */}
        <p className='fw-bold'>Select Size</p>
        <div className='mb-3'>
          {productData.sizes.map((item, index) => (
            <button
              key={index}
              className={`btn btn-outline-dark me-2 mb-2 ${item === size ? 'btn btn-secondary' : ''}`}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          ))}
        </div>
  
        {/* Add to Cart */}
        <div>
          <button className='btn btn-dark' onClick={() => addToCart(productData._id, size)} >ADD TO CART</button>
          <hr />
        </div>
  
        {/* Features */}
        <div>
          <h5>100% Original Products</h5>
          <h5>Cash On Delivery Available</h5>
          <h5>Easy Exchange And Return Policy Within 7 Days</h5>
        </div>
      </div>
    </div>
  
    {/* Description and Reviews */}
    <div className='my-5'>
      <div className='d-flex flex-column flex-md-row'>
        <p className='fw-bold border border-dark p-2 mb-0 text-center flex-fill'>Description</p>
        <p className='fw-bold border border-dark p-2 mb-0 text-center flex-fill'>Reviews (122)</p>
      </div>
      <p className='text-secondary border border-dark m-0 p-3'>
        Officia anim occaecat ad fugiat consequat mollit ullamco laboris qui culpa. Cillum in proident culpa ad. Sit fugiat
        amet excepteur tempor velit officia mollit nisi aliqua anim. In do ullamco incididunt esse ad dolor ex nostrud
        deserunt. Elit dolore ullamco Lorem occaecat mollit occaecat aute. Adipisicing ullamco non id ut laborum. Sint amet
        exercitation quis ullamco culpa nostrud pariatur est excepteur pariatur commodo ea sit.
      </p>
    </div>
  </div>  
  )  : <div>Product Not Found</div>
}

export default Product
