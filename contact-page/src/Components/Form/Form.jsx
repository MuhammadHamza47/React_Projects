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
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
      </div>
    </div>
  );
}

export default Form;
