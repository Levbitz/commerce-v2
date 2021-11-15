import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

function SingleProduct({
  url,
  title,
  description,
  category,
  price,
  image,
  cartHandler,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() > 0.5);
  return (
    <div
      style={{
        boxShadow: "0 20px 40px 0 rgb(0 0 0 / 8%)",
      }}
      className="relative  flex flex-col m-5 bg-white z-30 p-10"
    >
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Link to={`/details/${url}`}>
        <img
          height={150}
          width={150}
          style={{ objectFit: "contain", margin: "auto" }}
          src={image}
          alt=""
        />
      </Link>
      <h4 className="my-3 mt-10">{title.substring(0, 50)}...</h4>
      <div className="container">
        <div className="row">
          <div className="col l6 s6">
            <div>
              <Currency quantity={price} currency="UgX" />
            </div>
          </div>
          <div className="col l6 s6">
            <div className="flex">
              {" "}
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <>
                    <FaStar className="h-5 text-red-500" />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>

      {hasPrime && (
        <div className="flex items-center  space-x-2 -1mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" />
          <p className="text-xs  text-gray-500">Free Next-Day Delivery</p>
        </div>
      )}
      <button
        style={{
          color: "#041836 !important",
        }}
        onClick={cartHandler}
        className="btn button"
      >
        Add to Busket
      </button>
    </div>
  );
}

export default SingleProduct;
