import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-body-dark">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i
                className="fa fa-facebook-f p-1"
                style={{ fontSize: "36px", color: "blue" }}
              />
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i
                className="fa fa-instagram"
                style={{ fontSize: "36px", color: "red" }}
              />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.linkedin.com/in/awais-ali-891515173/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i
                className="fa fa-linkedin p-1 rounded"
                style={{
                  fontSize: "36px",
                  color: "white",
                  backgroundColor: "#0A66C2",
                }}
              />
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://github.com/awais540727"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i
                className="fa fa-github p-1"
                style={{ fontSize: "36px", color: "white" }}
              />
            </a>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2020 Copyright: Awais Ali
        </div>
      </footer>
    </>
  );
};

export default Footer;
