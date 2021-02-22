import React from "react";
import Img from "../dist/img/ProfilePng.png";
import FaceBookIcon from "../dist/img/facebook.svg";
import GmailIcon from "../dist/img/gmail.svg";
import LinkedInIcon from "../dist/img/linkedin.svg";
import TwitterIcon from "../dist/img/twitter.svg";
export default function ProfileLeft() {
  return (
    <div className="col-xs-12 col-md-7 text-center profile__left">
      <img
        alt="img"
        className="profile__img animate__animated animate__fadeInLeft"
        src={Img}
      />
      <h1 className="profile__title animate__animated animate__fadeInDown">
        Ganesh Babu
      </h1>
      <div className="">
        <ul className="social__icons">
          <li className="social__icon">
            <img src={FaceBookIcon} alt="" />
          </li>
          <li className="social__icon">
            <img src={GmailIcon} alt="" />
          </li>
          <li className="social__icon">
            <img src={LinkedInIcon} alt="" />
          </li>
          <li className="social__icon">
            <img src={TwitterIcon} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
