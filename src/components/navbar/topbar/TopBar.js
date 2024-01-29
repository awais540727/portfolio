import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="container-fluid d-none d-lg-block">
        <div
          className="row justify-content-between text-white"
          style={{ backgroundColor: "#2C2F31" }}
        >
          <div className="col-6 mt-2">
            <i
              className="fa fa-linkedin mt-2 me-4"
              style={{ fontSize: "16px" }}
            ></i>
            <i
              className="fa fa-facebook-f mt-2 me-4"
              style={{ fontSize: "16px" }}
            ></i>
            <i
              className="fa fa-google-plus mt-2 me-4"
              style={{ fontSize: "16px" }}
            ></i>
          </div>
          <div className="col-6 mt-2 d-flex">
            <div className="d-flex me-5">
              <i
                className="fa fa-envelope mt-2 me-1"
                style={{ fontSize: "16px" }}
              ></i>
              <p className="mt-1">awaisali786378@gmail.com</p>
            </div>
            <div className="d-flex ms-5">
              <i
                className="fa fa-phone mt-2 me-1"
                style={{ fontSize: "16px" }}
              ></i>
              <p className="mt-1">+923055798339</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
