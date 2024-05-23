import { memo } from "react";
// 1. memo() -> Higher Order Component (HOC), memo is not hook
// 2. useCallback()
// ===

// Hooks
// HOC
// Render props

interface MemoProps {
  count: number;
}
function Memo({ count }: MemoProps) {
  console.log("re-render");
  console.log(count);

  return <h2>HELLO ANH EM F8 {count}</h2>;
}

export default memo(Memo);
