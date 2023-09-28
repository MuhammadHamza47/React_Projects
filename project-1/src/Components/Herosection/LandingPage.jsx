import React from "react";
import Shop from '../../Assets/shop.png'
import shoe from '../../Assets/shoeImage.png'

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 px-5 py-5">
            <div>
              <p className="display-3" style={{fontWeight:"bolder"}}>
                YOUR FEET DESERVE THE BEST
              </p>
            </div>
            <div>
              <p className="lead">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
            </div>
            <div>
              <button className="btn btn-danger" type="submit">
                Shop Now
              </button>
              <button className="btn btn-outline-dark mx-3" type="submit">
                Category
              </button>
            </div>
            <div className="mt-4"><img src={Shop} alt="" /></div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 py-5">
            <div className="px-4"><img src={shoe} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
