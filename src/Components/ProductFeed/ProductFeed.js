// import React, { useState, useEffect } from "react";
// import SingleProduct from "../SingleProduct/SingleProduct";

// function ProductFeed() {
//   const [loading, setLoading] = useState(true);

//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((data) => data.json())
//       .then((item) => {
//         console.log(item);
//         setLoading(false);
//         setProducts(item);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <p>Loading</p>
//       </div>
//     );
//   } else {
//     return (
//       <div className="grid grid-flow-row-dense sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 md:-mt-56 mx-auto">
//         {products.slice(0, 4).map((product) => {
//           const { id, title, price, image, category, description } = product;
//           return (
//             <SingleProduct
//               key={id}
//               category={category}
//               title={title}
//               id={id}
//               price={price}
//               image={image}
//               description={description}
//             />
//           );
//         })}
//         <img
//           className="md:col-span-full"
//           src="http://links.papareact.com/dyz"
//           alt=""
//         />
//         <div className="md:col-span-2">
//           {products.slice(4, 5).map((product) => {
//             const { id, title, price, image, category, description } = product;
//             return (
//               <SingleProduct
//                 key={id}
//                 category={category}
//                 title={title}
//                 id={id}
//                 price={price}
//                 image={image}
//                 description={description}
//               />
//             );
//           })}
//         </div>
//         {products.slice(5, products.length).map((product) => {
//           const { id, title, price, image, category, description } = product;
//           return (
//             <SingleProduct
//               key={id}
//               category={category}
//               title={title}
//               id={id}
//               price={price}
//               image={image}
//               description={description}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default ProductFeed;
