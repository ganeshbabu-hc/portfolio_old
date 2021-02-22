import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
export default function Banner() {
  return (
    <section className="profile">
      <div className="row m-auto container-xl">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </section>
  );
}
