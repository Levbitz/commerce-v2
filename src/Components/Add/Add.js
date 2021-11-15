import React from "react";

function Add({ MyGif, hyper }) {
  return (
    <>
      <img
        style={{ width: "100%" }}
        className="md:col-span-full"
        src={MyGif}
        alt=""
      />
    </>
  );
}

export default Add;
