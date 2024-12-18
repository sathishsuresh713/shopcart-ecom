import React from "react";
import { assets } from "../assests/assets";

function Footer() {
  return (
    <>
    <hr/ >
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6" >
          <img src={assets.logo} alt="logo" className="mb-3"/>
          <p className="text-secondary ">
            Reprehenderit non occaecat adipisicing fugiat exercitation amet
            officia et esse ea. Consequat cupidatat aliqua irure fugiat velit ex
            magna nulla est cillum ut consequat enim laboris. Ipsum nisi aliquip
            magna ullamco anim exercitation deserunt velit consequat ea.
          </p>
        </div>
        <div className="col-12 col-lg-3">
            <h3 className="fw-bold">COMPANY</h3>
            <ul className="list-unstyled mt-3 text-secondary">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="col-12 col-lg-3">
            <h3 className="fw-bold">GET IN TOUCH</h3>
            <p className=" mt-3 text-secondary mb-0">+1 234 567 890</p>
            <p className=" text-secondary">contact@shopcart.com</p>
        </div>
      </div>
    </div>
    <hr/>
    <p className="text-center fw-bold">Copyright © 2024 ShopCart All Rights Reserved</p>
    </>
  );
}

export default Footer;
