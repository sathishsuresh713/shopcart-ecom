import React from 'react'
import { assets } from '../assests/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

function Contact() {
  return (
    <div className='container my-5'>
  <div>
    <h2 className='text-center fw-bold my-4'>CONTACT US</h2>
  </div>
  <div className='row align-items-center'>
    <div className='col-12 col-md-6 mb-4 mb-md-0 text-end'>
      <img src={assets.contact_img} alt='Contact' className='img-fluid w-75' />
    </div>
    <div className='col-12 col-md-6'>
      <h4 className='fw-bold'>Our Store</h4>
      <p className='fw-bold'>Address: <span className='text-secondary'> 123 Main St, City, Country</span></p>
      <p className='fw-bold'>Phone: <span className='text-secondary'> +1 234 567 890</span></p>
      <p className='fw-bold'>Email: <span className='text-secondary'>contact@shopcart.com</span></p>
    </div>
  </div>
  <div className='my-5'>
    <NewsLetterBox />
  </div>
</div>

  )
}

export default Contact
