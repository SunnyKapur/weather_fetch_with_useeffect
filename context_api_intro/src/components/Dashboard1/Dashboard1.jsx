import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import ProductList from "./ProductList";

const Dashboard1 = ({setCartItems,setGetClickedPrduct}) => {
  const [allProducts, setAllProducts] = useState([]);
  console.log("all proo..............",allProducts)

  let fetchAllProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    setAllProducts(res.data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  let handleProductDelete = (product_id) => {
    let filterProducts = allProducts.filter((elem) => elem.id !== product_id)
    setAllProducts(filterProducts)
    // console.log(filterProducts)
  };

  return (
    <div>
      <h1>Product Home</h1>

      <div>
        {allProducts.map((elem) => {
          return (
            <ProductList
            setGetClickedPrduct={setGetClickedPrduct}
            key={elem.id}
            setCartItems={setCartItems}
              handleProductDelete={handleProductDelete}
              product={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard1;
