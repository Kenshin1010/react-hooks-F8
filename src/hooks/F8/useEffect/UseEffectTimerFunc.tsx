// Side effects

import { useEffect, useState } from "react";

// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubscribe
    - Clear timers
 */

function UseEffectTimerFunc() {
  const [countdown, setCountdown] = useState(180);

  //   setInterval
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);

    // Cleanup function để dọn dẹp setInterval khi component unmount hoặc khi useEffect được gọi lại
    return () => clearInterval(timerId);
  }, []);

  //   //   setTimeout
  //   useEffect(() => {
  //     const timerId = setTimeout(() => {
  //       setCountdown(countdown - 1);
  //     }, 1000);

  //     // Cleanup function để dọn dẹp setTimeout khi component unmount hoặc khi useEffect được gọi lại
  //     return () => clearTimeout(timerId);
  //   }, [countdown]);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}

export default UseEffectTimerFunc;
