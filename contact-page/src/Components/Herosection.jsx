import React from "react";
import Form from "./Form/Form";


function Herosection() {
  return (
    <>
      <div className="container me-5 p-4">
        <div className="row">
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
        <div className="row"><div className="col-6">
            <Form/>
        </div>
        <div className="col-6"></div></div>
      </div>
    </>
  );
}

export default Herosection;
