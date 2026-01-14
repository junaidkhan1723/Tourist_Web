import React from "react";
import cover from "./images/cover.webp";

function MainImg() {
  return (
    <div>
      <div className="moto row container-fluid text-center">
        <div className="moto animeside col-md-12 display-4">
          Explore the Unseen!
        </div>
      </div>
      <div className=" row container-fluid text-center">
        <div className="col-md-12 animeside ">
          <img className="img-fluid " src={cover} alt="CoverImg" />
        </div>
      </div>
    </div>
  );
}

export default MainImg;
