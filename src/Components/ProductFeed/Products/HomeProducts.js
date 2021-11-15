import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/ProductContext/ProductContext";
//import "../css/Products.css";
import SingleProduct from "../../SingleProduct/SingleProduct";
import MyGif from "../../../assets/Images/add.gif";
import Add from "../../Add/Add";

const HomeProducts = () => {
  const { products, addCart } = useContext(DataContext);

  var result = products.filter(function (e) {
    return e.category == "recent";
  });

  return (
    <div
      id="product"
      className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 md:-mt-0 mx-auto"
    >
      {" "}
      {result.slice(0, 4).map((product) => {
        const { id, title, price, image, category, description, src } = product;
        return (
          <SingleProduct
            key={id}
            url={product._id}
            category={category}
            title={title}
            id={id}
            price={price}
            image={src}
            description={description}
            cartHandler={() => addCart(product._id)}
          />
        );
      })}
      <Add MyGif={MyGif} hyper="levbitz.com" />
      <div className="md:col-span-2">
        {result.slice(4, 5).map((product) => {
          const { id, title, price, image, category, description, src } =
            product;
          return (
            <SingleProduct
              key={id}
              category={category}
              title={title}
              id={id}
              price={price}
              image={src}
              description={description}
            />
          );
        })}
      </div>
      {result.slice(5, products.length).map((product) => {
        const { id, title, price, image, category, description, src } = product;
        return (
          <SingleProduct
            key={id}
            category={category}
            title={title}
            id={id}
            price={price}
            image={src}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default HomeProducts;
