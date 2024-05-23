import { ChangeEvent, useEffect, useState } from "react";
import Memo from "../memo/Memo";

interface AvatarFile extends File {
  preview?: string;
}

function PreviewAvatar() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [avatar, setAvatar] = useState<AvatarFile | null>(null);

  useEffect(() => {
    console.log(`Mounted or Re-render lần thứ ${count}`);

    // Cleanup func
    return () => {
      console.log(`Cleanup lần thứ ${count}`);
    };
  }, [count]);

  useEffect(() => {
    // Cleanup
    return () => {
      if (avatar && avatar.preview) {
        URL.revokeObjectURL(avatar.preview);
      }
    };
  }, [avatar]);

  const handlePreviewAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const avatarFile = file as AvatarFile;
      avatarFile.preview = URL.createObjectURL(file);
      setAvatar(avatarFile);

      // Reset input value
      e.target.value = "";
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Memo count={count} />
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me 2!</button>

      <input type="file" multiple onChange={handlePreviewAvatar} />
      {avatar && (
        // avatar.preview!: Sử dụng toán tử không xác định (!) để chỉ rõ rằng preview sẽ không phải là undefined tại thời điểm đó.
        <img src={avatar.preview!} alt="Avatar Preview" width={"200px"} />
      )}
    </div>
  );
}

export default PreviewAvatar;
