import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log(React);

// Fake comments
function emitComment(id: number) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: {
          lessonId: id,
          comment: `Nội dung comment của lesson ${id}`,
        },
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
