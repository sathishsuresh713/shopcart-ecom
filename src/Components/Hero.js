import React, { useEffect } from 'react'
import './hero.css'
import { assets } from '../assests/assets'

function Hero() {
useEffect(() => {
  window.scrollTo(0, 0);
})

  return (
    <div className="container mt-2">
    <div className="row border border-dark m-auto">
      {/* <!-- Text Section --> */}
      <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center py-3">
        <div className="d-flex align-items-center justify-content-center fs-5">
          <p className="mb-2">OUR BESTSELLERS</p>
        </div>
        <div>
          <p className="fs-1 fw-bold mb-3">Latest Arrivals</p>
        </div>
        <div className="d-flex align-items-center justify-content-center fs-5">
          <a href="/product" className="btn btn-primary me-2">SHOP NOW</a>
        </div>
      </div>
      {/* <!-- Image Section --> */}
      <div className="col-12 col-lg-6 p-0">
        <img 
          src={assets.hero_img} 
          alt="Hero" 
          className="hero-des img-fluid w-100" 
        />
      </div>
    </div>
  </div>
  
  )
}

export default Hero
