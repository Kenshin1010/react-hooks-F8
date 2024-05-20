import { useState } from "react";

const orders = [100, 200, 300];
function CounterF8() {
  const [counter, setCounter] = useState<number>(() => {
    const total = orders.reduce((total, cur) => total + cur, 0);

    console.log(total);
    return total;
  });

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    setCounter((prevState) => prevState - 1);
  };

  // Update user info
  type InfoType = {
    name: string;
    age: number;
    address: string;
    bio?: string;
  };

  const [info, setInfo] = useState<InfoType>({
    name: "John",
    age: 30,
    address: "Newyork, US",
  });

  const handleUpdate = () => {
    setInfo((preInfo) => {
      // logic...
      return {
        ...preInfo,
        bio: "red",
      };
    });
  };

  // console.log("re-render");

  return (
    <div className="CounterF8">
      <div>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
      <div>
        {/* <h1>{JSON.stringify(info)}</h1> */}
        <h1>Info</h1>
        <ul>
          {Object.entries(info).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default CounterF8;
