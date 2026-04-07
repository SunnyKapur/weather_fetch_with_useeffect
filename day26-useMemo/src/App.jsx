import { useState } from "react";
import About from "./components/About";

const App = () => {
  console.log("App renderingg.....");

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "saina",
    id: 1,
  })

  return (
    <div>
      <h1>app-{count}</h1>
      <h1>user- {user.name}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button onClick={() => setUser({ ...user, name: "polo" })}>
        Change name
      </button>
      <About count={count} user={user} />
    </div>
  );
};

export default App;
