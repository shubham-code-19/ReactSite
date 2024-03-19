import React, { useState } from 'react';

const Contact = () => {
  const inputName = {
    fullName: "",
    phone: "",
    email: "", // Corrected typo here
    msg: ""
  };
  const [data, setData] = useState(inputName);

  const getValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(inputName)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your name"
                  name="fullName"
                  value={data.fullName}
                  onChange={getValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Mobile number"
                  name="phone"
                  value={data.phone}
                  onChange={getValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  value={data.email}
                  onChange={getValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your suggestion"
                  name="msg"
                  value={data.msg}
                  onChange={getValue}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
