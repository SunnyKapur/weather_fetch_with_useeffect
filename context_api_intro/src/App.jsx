import { useState } from "react";
import Dashboard1 from "./components/Dashboard1/Dashboard1";
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import Cart from "./components/Dashboard1/Cart";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [getClickedPrduct, setGetClickedPrduct] = useState(null);


  console.log("cartItems----->", cartItems)

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>
        Go to {toggle ? "Products" : "Users"}
      </button>

      <button style={{ marginLeft: "40px" }} onClick={() => setShowCart(true)}>
        Show Cart
      </button>

      {toggle ? (
        <div>
          <Dashboard2  getClickedPrduct={getClickedPrduct} />
        </div>
      ) : (
        <div>
          <Dashboard1
            setGetClickedPrduct={setGetClickedPrduct}
            setCartItems={setCartItems}
          />
        </div>
      )}

      {showCart && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: "0",
            backgroundColor: "grey",
            position: "fixed",
          }}
        >
          <Cart cartItems={cartItems} setShowCart={setShowCart} />
        </div>
      )}
    </div>
  );
};

export default App;
