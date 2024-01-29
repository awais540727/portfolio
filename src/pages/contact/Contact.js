import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const Contact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const handeleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/send-email", {
        email,
        subject,
        message,
      });
      console.log("data " + res.data);
      if (res.data.success) {
        toast(res.data.message);
        navigate("/");

        // setTimeout(() => {
        //   navigate("/");
        // }, 1000);
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-4 rounded p-1">Contact Me</h1>
        <form className="m-2" onSubmit={handeleSubmit}>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group mt-4 mb-4">
                <label htmlFor="exampleFormControlInput1" className="mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group mt-4 mb-4">
                <label htmlFor="exampleFormControlInput1" className="mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group mt-4 mb-4">
            <label htmlFor="exampleFormControlTextarea1" className="mb-2">
              Enter Your Message
            </label>
            <textarea
              className="form-control"
              placeholder="Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success">Send Email</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
