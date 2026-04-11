import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  console.log("home rendering....");

  let products = useLoaderData();
  console.log("jo home main data aachuke hai", products);

  return (
    <div className="grid grid-cols-4 gap-5 " >
      {products.map((elem) => {
        return <ProductCard product={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default Home;
