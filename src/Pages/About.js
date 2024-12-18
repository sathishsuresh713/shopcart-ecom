import React from "react";
import { assets } from "../assests/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

function About() {
  return (
    <div className="container py-4">
    {/* About Us Section */}
    <div className="text-center mb-4">
      <h2 className="fw-bold">ABOUT US</h2>
    </div>
  
    <div className="row align-items-center">
      <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
        {/* Image */}
        <img
          src={assets.about_img}
          className="w-75 rounded img-fluid"
          alt="About Us"
        />
      </div>
      <div className="col-12 col-lg-6">
        {/* About Text */}
        <p>
          Occaecat sit reprehenderit velit est. Nulla laborum aliqua ipsum velit
          ea do labore adipisicing proident et Lorem quis. Eu velit veniam veniam
          tempor aliqua tempor aliqua occaecat nostrud nulla.
        </p>
        <p>
          Occaecat sit reprehenderit velit est. Nulla laborum aliqua ipsum velit
          ea do labore adipisicing proident et Lorem quis. Eu velit veniam veniam
          tempor aliqua tempor aliqua occaecat nostrud nulla.
        </p>
        <h3 className="fw-bold mt-3">OUR MISSION</h3>
        <p>
          Occaecat sit reprehenderit velit est. Nulla laborum aliqua ipsum velit
          ea do labore adipisicing proident et Lorem quis. Eu velit veniam veniam
          tempor aliqua tempor aliqua occaecat nostrud nulla.
        </p>
      </div>
    </div>
  
    {/* Why Choose Us Section */}
    <div className="my-5">
      <h3 className="fw-bold text-center mb-4">WHY CHOOSE US</h3>
      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-secondary rounded p-3 h-100">
            <h5 className="fw-bold">Quality Assurance:</h5>
            <p className="text-secondary mb-0">
              Magna ea cillum incididunt veniam exercitation sit eu officia
              reprehenderit. Cupidatat velit laboris reprehenderit id. Nulla do
              sint sint ex eu incididunt. Amet aliquip non dolore reprehenderit.
            </p>
          </div>
        </div>
  
        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-secondary rounded p-3 h-100">
            <h5 className="fw-bold">Convenience:</h5>
            <p className="text-secondary mb-0">
              Magna ea cillum incididunt veniam exercitation sit eu officia
              reprehenderit. Cupidatat velit laboris reprehenderit id. Nulla do
              sint sint ex eu incididunt. Amet aliquip non dolore reprehenderit.
            </p>
          </div>
        </div>
  
        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="border border-secondary rounded p-3 h-100">
            <h5 className="fw-bold">Exceptional Customer Service:</h5>
            <p className="text-secondary mb-0">
              Magna ea cillum incididunt veniam exercitation sit eu officia
              reprehenderit. Cupidatat velit laboris reprehenderit id. Nulla do
              sint sint ex eu incididunt. Amet aliquip non dolore reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <NewsLetterBox/>
  </div>
  
  );
}

export default About;
