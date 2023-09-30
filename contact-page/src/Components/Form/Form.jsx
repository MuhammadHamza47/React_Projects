import React from "react";

function Form() {
  return (
    <div className="my-4">
      <button className="btn btn-dark" style={{ width: "33vh" }}>
        <i className="bi bi-chat-left-text px-2"></i> VIA SUPPORT CHAT
      </button>
      <button className="btn btn-dark mx-3" style={{ width: "33vh" }}>
        <i className="bi bi-telephone-fill px-2"></i> VIA CALL
      </button>
      <div className="row my-3">
        <div className="col-10">
          <button
            className="btn"
            style={{ border: "1px solid black", width: "68vh" }}
          >
            <i className="bi bi-chat-left-text px-2" />
            VIA EMAIL FORM
          </button>
        </div>
      </div>
      <div>
        <div className="form-floating mb-3 col-9 d-flex mx-3 ">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            style={{ border: "1px solid" }}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3 col-9 d-flex mx-3 ">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            style={{ border: "1px solid" }}
          />
          <label htmlFor="floatingInput">E-Mail</label>
        </div>
        <div className="form-floating mb-3 col-9 d-flex mx-3 ">
          <textarea
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            rows="3"
            style={{ border: "1px solid" }}
          />
          <label htmlFor="floatingInput">Text Area</label>
        </div>
        <div className="d-flex justify-content-end ">
          <button
            className="btn btn-dark"
            style={{ width: "33vh", marginRight: "120px" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
