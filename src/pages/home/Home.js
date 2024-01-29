import React from "react";
import "./Home.css";
import Project from "../projects/Project";
import Grid from "../practice-grid/Grid";
const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row mb-5 ">
          <div className="col-lg-7 col-md-12 col-sm-12 mb-5 top-div">
            <div className="text-start">
              <h1 className="mb-4">
                I am a{" "}
                <mark className="bg-success rounded text-white p-0 text-center">
                  MERN
                </mark>{" "}
                Stack Developer
              </h1>
              <h6 className="mb-4 mt-4">
                I have good grip on JavaScript, React.js and Redux for state
                management somehow I also have some expertize in Node.js,
                Express.js and MongoDB.
              </h6>
              <div className="hero-btns ">
                <button className="btn btn-success me-3 p-3">
                  My Expertise
                </button>
                <button className="btn btn-outline-success p-3 border text-white">
                  <i
                    className="fa fa-play me-2 text-white"
                    style={{ fontSize: "20px" }}
                  ></i>
                  See How it Works
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-center mt-5 image-col ">
            <div className="react text-center">
              <img
                src="/images/favicon.ico"
                alt=""
                className="react-img"
                style={{ width: "100px", height: "100px" }}
              />
              <p>React.js</p>
            </div>
            <div className="node text-center">
              <img
                src="/images/node.png"
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
              <p>Node.js</p>
            </div>
            <div className="express m-2 text-center">
              <img
                src="/images/express.png"
                alt=""
                className="rounded "
                style={{ width: "130px", height: "70px" }}
              />
              <p>Express.js</p>
            </div>
            <div className="mongodb m-2 p-0">
              <img
                src="/images/mongo.png"
                alt=""
                className="rounded"
                style={{ width: "150px", height: "70px" }}
              />
              <p>MongoDB</p>
            </div>
            <img
              src="/images/awais.png"
              alt=""
              className="img-awais"
              // style={{ width: "250px", height: "300px" }}
            />
            <img src="/images/blob.svg" alt="" className="bolg" />
          </div>
        </div>
        <h1 className="text-center mb-5">Explore My Expertise</h1>
        <div className="row mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
            <div className="image-container">
              <img src="/images/1.png" alt="" />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>Web development</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione unde dolores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
            <div className="image-container">
              <img src="/images/2.png" alt="" />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>Web development</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione unde dolores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
            <div className="image-container">
              <img src="/images/3.png" alt="" />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>Web development</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione unde dolores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
      <Grid />
    </>
  );
};

export default Home;
