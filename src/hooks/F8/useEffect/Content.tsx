import { useEffect, useState } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Gọi callback mỗi khi deps thay đổi

// ----------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function Content() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [type, setType] = useState("posts");

  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  console.log(type);

  useEffect(() => {
    document.title = title;
    console.log("Re-render", title);
  });

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

  useEffect(() => {
    console.log("Type changed");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
        console.log("set state");
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    console.log("addEventListener");

    // Cleanup function
    return () => {
      console.log("Unmounting...");
      window.removeEventListener("scroll", handleScroll);
      console.log("removeEventListener");
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      console.log("Unmounting...");
      window.removeEventListener("resize", handleResize);
      console.log("removeEventListener");
    };
  }, []);

  console.log("re-render");

  return (
    <div style={{ marginTop: "24px" }}>
      <h1>{width}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#646cff" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <ul>
        {data.map((detail) => (
          <li key={detail.id}>{detail.title || detail.name}</li>
        ))}
        {showGoToTop && (
          <button
            style={{
              position: "fixed",
              right: "20px",
              bottom: "20px",
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            Go to top
          </button>
        )}
      </ul>
    </div>
  );
}

export default Content;
