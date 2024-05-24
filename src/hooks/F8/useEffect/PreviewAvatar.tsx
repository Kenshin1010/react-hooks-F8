import { ChangeEvent, useEffect, useState } from "react";

interface AvatarFile extends File {
  preview?: string;
}

function PreviewAvatar() {
  const [avatar, setAvatar] = useState<AvatarFile | null>(null);

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
      <input type="file" multiple onChange={handlePreviewAvatar} />
      {avatar && (
        // avatar.preview!: Sử dụng toán tử không xác định (!) để chỉ rõ rằng preview sẽ không phải là undefined tại thời điểm đó.
        <img src={avatar.preview!} alt="Avatar Preview" width={"200px"} />
      )}
    </div>
  );
}

export default PreviewAvatar;
