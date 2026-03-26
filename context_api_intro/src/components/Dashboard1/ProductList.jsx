import React from "react";

const ProductList = ({ product, handleProductDelete, setCartItems,setGetClickedPrduct }) => {
  return (
    <div>
      <h1>{product.title}</h1>

      <button onClick={() => handleProductDelete(product.id)}>Delete</button>

      <button style={{ marginLeft: "40px" }} onClick={() => setCartItems(prev => {
        return [...prev, product]
        })}
      >Add to Cart </button>


      <button onClick={() => setGetClickedPrduct(product)} style={{marginLeft:"20px"}}>Send to User</button>


    </div>
  );
};

export default ProductList;
