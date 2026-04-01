import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");
        console.log(res.data.products)
        setProducts(res.data.products);
      } catch (err) {
        console.log("err in api", err);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-3 ">
      {products.map((elem) => {
        return <ProductCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default Home;
