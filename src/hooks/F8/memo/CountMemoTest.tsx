import { useEffect, useState } from "react";
import Memo from "./Memo";

function CountMemoTest() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  useEffect(() => {
    console.log(`Mounted or Re-render lần thứ ${count}`);

    // Cleanup func
    return () => {
      console.log(`Cleanup lần thứ ${count}`);
    };
  }, [count]);
  return (
    <div>
      <Memo count={count} onIncrease={() => setCount(count + 1)} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me 2!</button>
    </div>
  );
}

export default CountMemoTest;
