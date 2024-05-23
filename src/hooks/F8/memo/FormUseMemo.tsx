import { useMemo, useRef, useState } from "react";

type Product = {
  name: string;
  price: number;
};

function FormUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (name.trim() !== "" && !isNaN(Number(price))) {
      // Kiểm tra xem name không rỗng và price có thể chuyển đổi thành số
      setProducts([
        ...products,
        {
          name,
          price: +price,
        },
      ]);
      setName(""); // Reset giá trị của name
      setPrice(""); // Reset giá trị của price

      nameRef.current?.focus();
    } else {
      alert("Please enter a valid name and price."); // Thông báo cho người dùng nhập thông tin hợp lệ
    }
  };

  const total = useMemo(() => {
    console.log("Recalculation...");
    const result = products.reduce((result, prod) => result + prod.price, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormUseMemo;
