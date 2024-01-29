import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState(0);
  const [onGoing, setOnGoing] = useState(0);
  const [success, setSuccess] = useState(0);
  let projectInterval, onGoingInterval, successInterval;
  useEffect(() => {
    projectInterval = setInterval(() => {
      setProjects((project) => Math.min(project + 7, 520));
    }, 70);

    onGoingInterval = setInterval(() => {
      setOnGoing((onGoing) => Math.min(onGoing + 3, 244));
    }, 90);

    successInterval = setInterval(() => {
      setSuccess((success) => Math.min(success + 1, 95));
    }, 100);
    return () => {
      clearInterval(projectInterval);
      clearInterval(onGoingInterval);
      clearInterval(successInterval);
    };
  }, []);

  return (
    <>
      <div className="conatiner m-5">
        <h1 className="text-center">Projects</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <h1>{projects}+</h1>
            <p className="text-secondary">Total Projects</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
            <h1>{onGoing}</h1>
            <p className="text-secondary">Ongoing Project</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
            <h1>{success}%</h1>
            <p className="text-secondary">Successfully Completed Projects</p>
          </div>
          <div className="project">
            <Link to={`https://movie-app-five-indol.vercel.app/`} target="block">
          
              Movie App Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
