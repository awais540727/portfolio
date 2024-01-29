import React from "react";
import "./Grid.css";
const Grid = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Grid CSS</h1>
        {/* <div className="parent"> */}
        <div className="grid-container">
          <div className="item grid-item-1 bg-primary">item 1</div>
          <div className="item grid-item-2 bg-success">item 2</div>
          <div className="item grid-item-3 bg-danger">item 3</div>
          <div className="item grid-item-4 bg-secondary">item 4</div>
          <div className="item grid-item-5 bg-warning">item 5</div>
          <div className="item grid-item-6 bg-info">item 6</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Grid;
