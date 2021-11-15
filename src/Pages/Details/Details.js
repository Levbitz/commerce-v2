import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/ProductContext/ProductContext";
import { FaStar } from "react-icons/fa";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Details = () => {
  const { index, id } = useParams();
  const { products, addCart } = useContext(DataContext);
  //console.log({ products: products[id].title });
  //console.log(products.title);

  //   var result = products.find(function (e) {
  //     return e.id == id;
  //   });

  console.log(products);

  var result = products.find(function (e) {
    return e._id == id;
  });

  //   console.log(result);

  console.log(result);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() > 0.5);

  const cartHandler = () => addCart(result._id);

  //alert(result);
  return (
    <div>
      {/*<div className="container">
        <div className="row">
          <div className="col l6">
            <div>
              <img
                height={150}
                width={150}
                style={{ objectFit: "contain", margin: "auto" }}
                src={result.src}
                alt=""
              />
            </div>
          </div>
        </div>
  </div>*/}
      <div class="grid grid-cols-3 gap-4 m-5 bg-white z-30 p-10">
        <div class="...">
          <img
            height={150}
            width={150}
            style={{ objectFit: "contain", margin: "auto" }}
            src={result.src}
            alt=""
          />
        </div>
        <div class="col-span-2 ...">
          <div>
            <h4 className="my-3">{result.title}</h4>
            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <FaStar className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 ">{result.description}</p>
            <div className="mb-5">
              <Currency quantity={result.price} currency="UgX" />
            </div>
            {hasPrime && (
              <div className="flex items-center  space-x-2 -1mt-5">
                <img className="w-12" src="https://links.papareact.com/fdw" />
                <p className="text-xs  text-gray-500">Free Next-Day Delivery</p>
              </div>
            )}
            <button onClick={cartHandler} className="mt-auto button">
              Add to Busket
            </button>
          </div>
        </div>
      </div>
      {/*  <p>details</p>
      <h6>{id}</h6>
      <div className="relative  flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">
          {result.category}
        </p>
        <img
          height={150}
          width={150}
          style={{ objectFit: "contain", margin: "auto" }}
          src={result.src}
          alt=""
        />

        <h4 className="my-3">{result.title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 ">{result.description}</p>
        <div className="mb-5">
          <Currency quantity={result.price} currency="UgX" />
        </div>
        {hasPrime && (
          <div className="flex items-center  space-x-2 -1mt-5">
            <img className="w-12" src="https://links.papareact.com/fdw" />
            <p className="text-xs  text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
        <button onClick={cartHandler} className="mt-auto button">
          Add to Busket
        </button>
        </div>*/}
    </div>
  );
};

export default Details;
