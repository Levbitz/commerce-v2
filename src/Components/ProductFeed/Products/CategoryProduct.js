import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/ProductContext/ProductContext";
//import "../css/Products.css";
import SingleProduct from "../../SingleProduct/SingleProduct";

const CategoryProducts = () => {
  const { products, addCart } = useContext(DataContext);

  const { index, cat } = useParams();
  var result = products.filter(function (e) {
    return e.category == cat;
  });

  console.log(result);

  return (
    <div
      id="product"
      className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 md:-mt-56 mx-auto"
    >
      {result.map((product) => {
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
      {/*{products.map((product) => (
          <div className="card" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <span>${product.price}</span>
              <p>{product.description}</p>
              <button onClick={() => addCart(product._id)}>Add to cart</button>
            </div>
          </div>
        ))}*/}
      {/*<img
          className="md:col-span-full"
          src="http://links.papareact.com/dyz"
          alt=""
        />*/}
      {/*<div className="md:col-span-2">
          {products.slice(4, 5).map((product) => {
            const { id, title, price, image, category, description } = product;
            return (
              <SingleProduct
                key={id}
                category={category}
                title={title}
                id={id}
                price={price}
                image={image}
                description={description}
              />
            );
          })}
        </div>
        {products.slice(5, products.length).map((product) => {
          const { id, title, price, image, category, description } = product;
          return (
            <SingleProduct
              key={id}
              category={category}
              title={title}
              id={id}
              price={price}
              image={image}
              description={description}
            />
          );
        })}*/}
      <h2>{cat}</h2>
    </div>
  );
};

export default CategoryProducts;
