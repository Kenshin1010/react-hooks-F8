import { useState } from "react";

const gifts: string[] = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];
function Gift() {
  const [gift, setGift] = useState<string | undefined>(undefined);

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: "32px" }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default Gift;
