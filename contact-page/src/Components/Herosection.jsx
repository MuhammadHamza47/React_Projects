import React from "react";
import Form from "./Form/Form";
import service from "../Assets/Service.png";

function Herosection() {
  return (
    <>
      <div className="container ">
        <div className="row px-5 pt-2 ">
          <div className="col-9">
            <h1 className="display-5" style={{ fontWeight: "bolder" }}>
              CONTACT US
            </h1>
            <p>
              LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
              WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU
              CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY
              PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
            </p>
          </div>
        </div>
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Form />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src={service}
              alt=""
              style={{ width: "508px", height: "415px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
