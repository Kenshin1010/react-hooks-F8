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

function CoursesRadioF8() {
  const [checked, setChecked] = useState<number>(2);
  console.log(checked);

  const handleSubmit = () => {
    // CALL API
    console.log({ id: checked });
  };
  return (
    <div style={{ marginTop: "24px" }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          <label>{course.name}</label>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default CoursesRadioF8;
