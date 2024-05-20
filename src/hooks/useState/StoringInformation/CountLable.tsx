import { useState } from "react";

interface CountLabelProps {
  count: number;
}

export default function CountLabel({ count }: CountLabelProps) {
  const [prevCount, setPrevCount] = useState<number>(count);
  const [trend, setTrend] = useState<string | null>(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }

  // Có thể dùng useEffect() thay vì render trực tiếp trong hàm
  //   useEffect(() => {
  //     if (prevCount !== count) {
  //       setTrend(count > prevCount ? "increasing" : "decreasing");
  //       setPrevCount(count);
  //     }
  //   }, [count, prevCount]);

  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}
