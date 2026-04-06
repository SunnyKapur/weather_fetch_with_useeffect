
import { useLoaderData } from 'react-router';
import { getAllProducts } from '../api/productApi';

const Home = () => {
  console.log("home rendering....")


  let products = useLoaderData()
  console.log("jo home main data aachuke hai", products)

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
