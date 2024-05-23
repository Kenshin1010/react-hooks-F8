import { useEffect, useRef, useState } from "react";

function CountDown() {
  const [count, setCount] = useState<number>(60);

  // const ref = useRef(99);
  // console.log(ref.current);

  const timerId = useRef<number | null>(null);
  const prevCount = useRef<number | undefined>(undefined);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    prevCount.current = count;
    console.log(prevCount.current);
  }, [count]);

  useEffect(() => {
    if (h1Ref.current) {
      console.log(h1Ref.current);
      const rect = h1Ref.current.getBoundingClientRect();
      console.log(rect);
    }
  });

  const handleStart = () => {
    if (timerId.current === null) {
      timerId.current = window.setInterval(() => {
        // ref.current = Math.random();
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      console.log("Start -> ", timerId.current);
    }
  };

  const handleStop = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      console.log("Stop -> ", timerId.current);
      timerId.current = null; // Reset the timerId to null after stopping
    }
  };

  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default CountDown;
