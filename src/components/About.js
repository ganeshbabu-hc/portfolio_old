import React from "react";
import Experience from "./Experience";
import AboutLeft from "./AboutLeft";
export default function About() {
  return (
    <div className="about">
      <div className="row m-auto container-xl">
        <AboutLeft />
        <Experience />
        <div className="col-xs-12">
          <div className="row about__cards">
            <div className="col-xs-12 col-md-4">
              <div className="about__card">1</div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="about__card">2</div>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="about__card">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
