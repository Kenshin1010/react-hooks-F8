import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactTS",
  },
];

function CoursesCheckboxF8() {
  const [checked, setChecked] = useState<number[]>([]);
  console.log(checked);

  const handleCheck = (id: number) => {
    setChecked((prev) =>
      // prev.includes(id) kiểm tra trạng thái hiện tại của checked trong hàm handleCheck để quyết định xem có nên thêm hoặc loại bỏ id khỏi mảng.
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    // CALL API
    console.log({ ids: checked });
  };
  return (
    <div style={{ marginTop: "24px" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkBox"
            // checked.includes(course.id) kiểm tra từng course.id để xác định xem ô checkbox có nên được đánh dấu chọn hay không khi render JSX.
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          <label>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default CoursesCheckboxF8;
