import React from "react";
import { Link } from "react-router-dom";
import "./categoryHighLight.css";
function CategoryHighLight() {
  return (
    <div>
      <div className="row">
        <div className="col l1 ">
          <div className="highlight_link_wrap">
            <p className="center">
              <Link>men</Link>
            </p>
          </div>
        </div>
        <div className="col l1 ">
          <div className="highlight_link_wrap">
            <p className="center">
              <Link>men</Link>
            </p>
          </div>
        </div>
        <div className="col l1 ">
          <div className="highlight_link_wrap">
            <p className="center">
              <Link>men</Link>
            </p>
          </div>
        </div>
        <div className="col l1 ">
          <div className="highlight_link_wrap">
            <p className="center">
              <Link>men</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHighLight;
