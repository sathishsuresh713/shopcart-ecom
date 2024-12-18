import React from 'react'
import './newsletterbox.css'

function NewsLetterBox() {

const handleSubmit = (e) => {
    e.preventDefault();
}

  return (
    <div className="container mb-5">
      <div className="text-center">
        <p className="mb-1 fw-bold fs-4">Subscribe now & get 20% off</p>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit
        </p>
          <form class="row justify-content-center"  onClick={(e)=>handleSubmit(e)}>
            <div class="col-12 col-md-8 mb-3">
              <input
                type="email"
                class="form-control input-des"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="col-12 col-md-4">
              <button class="btn btn-dark w-100" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default NewsLetterBox
