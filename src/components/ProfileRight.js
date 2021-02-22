import React from "react";
import ArrowRight from "../dist/img/arrow_forward-black.svg";
export default function ProfileRight() {
  return (
    <div className="col-xs-12 col-md-5 pr-5 profile__right mt-5">
      <p className="blockquote-footer animate__animated animate__fadeInUp">
        Introduction
      </p>
      <h5 className="mt-2 animate__animated animate__fadeInUp">
        Web applications Developer / Designer
      </h5>
      <p className="py-3 profile__sec mt-3 animate__animated animate__fadeInUp">
        <small className="text-secondary">
          <span className="profile__txt-1">8</span>+ years of experience in Web
          Application Development. - Proficient in developing web applications
          using front end technologies ReactJS, HTML5, CSS3, Javascript in an
          agile environment.
        </small>
      </p>
      <a className="profile__link" href="#">
        MY STORY
        <img alt="" className="profile__link-arrow" src={ArrowRight} />
      </a>
    </div>
  );
}
