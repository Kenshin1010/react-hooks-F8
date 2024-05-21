import { useState } from "react";

export default function ResetWithKey() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  // console.log(version);

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}