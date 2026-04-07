import { useCallback, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  console.log("App renderingg.....");

  const [count, setCount] = useState(0);

  let heavyCal = useMemo(() => {
    for(let i=0; i<1000000000; i++){}
  },[])


  let greet = useCallback(() => {
    console.log("Hey good evening bhayioo........")
  }, []);

  return (
    <div>
      <h1>app-{count}</h1>

      <h1>Heavy Calculation - {heavyCal} </h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <About greet={greet} />
    </div>
  );
};

export default App;
