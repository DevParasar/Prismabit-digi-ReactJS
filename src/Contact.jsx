import React, { useState } from "react";
import "../node_modules/react-bootstrap-icons/dist/icons/telephone-inbound";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
//acces everything user writes eith event
  const InputEvent = (event) => {
    const { name, value } = event.target;
//preval fetches data
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
//page does not refresh
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>

      <div className="">
      <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <ul class="list-unstyled mb-0">
                <li>
                    <i class="bi bi-telephone-inbound"></i>
                    <h5 className="card-title">Name</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Prismabit Digital Solutions</h6>
                </li>
                
                <li>
                    <h5 className="card-title">Contact</h5>
                    <h6 className="card-subtitle mb-2 text-muted">+91 7002443005 / 9957432475</h6>
                </li>
                
                <li>
                    <h5 className="card-title">Email</h5>
                    <h6 className="card-subtitle mb-2 text-muted">prismabitdigital@gmail.com</h6>
                </li>
                <li>
                    <h5 className="card-title">Address</h5>
                    <h6 className="card-subtitle mb-2 text-muted">1st Floor, Four Mention Building, Satgaon Main Road</h6>
                </li>
            </ul>
                      
        </div>
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Email"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Write something about you"
                ></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;