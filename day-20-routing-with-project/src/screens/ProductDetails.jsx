import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          let res = await axios.get(`https://dummyjson.com/products/${id}`);
          console.log(res.data);
          setSingleProduct(res.data);
          setIsLoading(false);
        } catch (err) {
          console.log("err in product api", err);
        }
      })();
    }
    setIsLoading(true);
  }, [id]);

  if (isLoading)
    return (
      <h1 className="text-4xl font-semibold">Loading Product details...</h1>
    );

  return (
    <div className="flex flex-col gap-7">
      <h1>Here is product detail</h1>

      <div className="flex flex-col gap-7">
        <img width={250} src={singleProduct?.images[0]} alt="" />
        <h1 className="w-150">{singleProduct.description}</h1>
      </div>
    </div>
  );
};

export default ProductDetails;
