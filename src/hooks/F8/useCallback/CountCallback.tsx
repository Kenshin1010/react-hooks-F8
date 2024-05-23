// 1. memo() -> Higher Order Component (HOC), memo is not hook
// 2. useCallback()
// - Reference types
// - React memo()
// ===

import { useCallback, useState } from "react";
import Memo from "../memo/Memo";

// Hooks
// HOC
// Render props

function CountCallback() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Memo onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default CountCallback;
