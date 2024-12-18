import React from 'react'
import { assets } from '../assests/assets'

function OurPolicy() {
  return (
    <div className='container mt-5'>
      <div className='row mb-5'>
        <div className='col-12 col-lg-4 text-center mb-3'>
            <img src={assets.exchange_icon} alt='exchange'/>
            <p className='fw-bold mb-0'>Easy Exchange Policy</p>
            <p className='text-secondary mt-0'>We offer a hassle free exchange policy</p>
        </div>
        <div className='col-12 col-lg-4 text-center mb-3'>
        <img src={assets.quality_icon}/>
            <p className='fw-bold mb-0'>7 Days Return Policy</p>
            <p className='text-secondary mt-0'>We Provide 7 Days Return Policy</p>
        </div>
        <div className='col-12 col-lg-4 text-center'>
        <img src={assets.support_img}/>
            <p className='fw-bold mb-0'>Best Customer Support</p>
            <p className='text-secondary mt-0'>We Provide 24/7 Customer Support</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
