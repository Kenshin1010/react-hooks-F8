import { useState } from "react";

function FormSubmitF8() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const handleSubmit = () => {
    // CALL API
    console.log({
      Name: name,
      Email: email,
    });
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.currentTarget.value)
        }
      />
      <input
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default FormSubmitF8;
