import React from "react";
import SizeYo from "../../assets/Images/support_new.svg";
import CategoryHighLight from "../CategoryHighLight/CategoryHighLight";
import SeachForm from "../SeachForm/SeachForm";
import "./banner.css";

function Banner() {
  return (
    // <div className="lb_banner  bg-gradient-to-t from-gray-300 to-transparent bottom-0 z-20">
    <>
      <div className="lb_banner  ">
        <div className="container">
          <div className="row">
            <div className="lb_banner_content">
              <div className="col l7 s12 ">
                <div className="lb_banner_content_text">
                  <SeachForm />
                  <h2 className="text-white ">
                    {" "}
                    Start your own chapter with{" "}
                    <span
                      style={{
                        color: "coral",
                        fontStyle: "oblique",
                        fontWeight: "bolder",
                      }}
                    >
                      Pslamuelz
                    </span>{" "}
                    Online Shop for Devs
                  </h2>
                  <div style={{ marginTop: 20 }}>
                    <button
                      style={{ outline: "none" }}
                      className="waves-effect waves-light btn "
                    >
                      your Orders
                    </button>
                  </div>
                </div>
              </div>
              <div className="col  l5 hide-on-med-and-down">
                <img className="responsive-img" src={SizeYo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
