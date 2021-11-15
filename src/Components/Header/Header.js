import React, { useState } from "react";
//import Navbar from "../Navbar/Navbar";
import {
  FaSearch,
  FaHome,
  FaBars,
  FaShoppingCart,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import CartHighLight from "../CartHighLight/CartHighLight";
import Sidebar from "../Navigationbar/Sidebar/Sidebar";

import { SidebarData } from "../SideBar/SidebarData";
import "./Header.css";

function Header({ className }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [navbg, setNavbg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <header>
      <div>
        <nav
          className={
            navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"
          }
        >
          <div class="nav-wrapper">
            <div className="flex items-center  p-1 flex-grow py-2">
              <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
                <Link to="/">
                  <h2 className="myLogo">Psalmuelz</h2>
                  {/*<img
                    width={120}
                    style={{ objectFit: "contain" }}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    className="cursor-pointer"
                    alt=""
                  />*/}
                </Link>
              </div>

              {/**search */}
              <div className="hidden sm:flex items-center h-10 flex-grow rounded-md  bg-yellow-400 hover:bg-yellow-500 cursor-pointer mx-20">
                <input
                  type="text"
                  className="p-2 h-full  w-4 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                />
                <FaSearch size={50} color={"#fff"} className="h-12 p-4 " />
              </div>
              {/**search */}

              {/**right */}
              <div className="text-white flex items-center text-xs  space-x-6 mx-6 whitespace-nowrap ">
                <Link to="/sign-up" className="link">
                  <p className="text">Hello Samuel Levson</p>
                  <p className="font-extrabold md:text-sm text">
                    Account And Lists
                  </p>
                </Link>
                <div className="link">
                  <p className="text">Returns</p>
                  <p className="font-extrabold md:text-sm text">& Orders</p>
                </div>
                <Link to="/cart">
                  <div className="link relative flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400   text-center rounded text-white  font-bold">
                      <CartHighLight />
                    </span>
                    <FaShoppingCart size={30} className="text" />
                    <p className="hidden  md:inline font-extrabold md:text-sm mt-3 text">
                      Busket
                    </p>
                  </div>
                </Link>
                <p className="link flex items-center">
                  <Sidebar className={className} />
                </p>
              </div>
              {/**right */}
            </div>
          </div>
        </nav>
      </div>

      {/** bottom */}
    </header>
  );
}

export default Header;
