import React from "react";
import Banner from "../../Components/Banner/Banner";
import CartHighLight from "../../Components/CartHighLight/CartHighLight";

import Header from "../../Components/Header/Header";
import ProductFeed from "../../Components/ProductFeed/ProductFeed";
import CatergoryProducts from "../../Components/ProductFeed/Products/CategoryProduct";

function CategoryPage() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <CatergoryProducts />
      </main>
      <CartHighLight />
    </>
  );
}

export default CategoryPage;
