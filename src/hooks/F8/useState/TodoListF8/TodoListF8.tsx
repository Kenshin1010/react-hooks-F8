import { useEffect, useState } from "react";

function TodoListF8() {
  //   Toán tử ?? (nullish coalescing operator) và toán tử || (logical OR operator)
  const [job, setJob] = useState<string>("");
  const [jobs, setJobs] = useState<string[]>(() => {
    const storageJobs = localStorage.getItem("jobs");
    const parsedJobs = storageJobs ? JSON.parse(storageJobs) : [];
    console.log(parsedJobs);
    return parsedJobs ?? [];
  });

  useEffect(() => {
    // Sync jobs to localStorage whenever jobs state changes
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //   //   Save to local storage
      //   const jsonJobs = JSON.stringify(newJobs);
      //   localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: "32px" }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListF8;
