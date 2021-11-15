import React from "react";
import Banner from "../../Components/Banner/Banner";
import CartHighLight from "../../Components/CartHighLight/CartHighLight";
import CategoryHighLight from "../../Components/CategoryHighLight/CategoryHighLight";

import Header from "../../Components/Header/Header";

import HomeProducts from "../../Components/ProductFeed/Products/HomeProducts";
//import { motion } from "framer-motion";
import { pageTransition, pageSlide } from "../../Utils/Utils";
import "./home.css";

function Home() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="fliker">
          <HomeProducts />
        </div>
      </main>
      <CartHighLight />
    </>
  );
}

export default Home;
