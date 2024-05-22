import { useEffect, useState } from "react";
import {
  PostType,
  CommentType,
  AlbumType,
  PhotoType,
  TodoType,
  UserType,
} from "./TypeArray";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// ----------
// 1. Callback luôn được gọi sau khi component mounted

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
const T = [PostType, CommentType, AlbumType, PhotoType, TodoType, UserType];

function Content() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("type");
  const [posts, setPosts] = useState<T[][]>([]);

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
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div style={{ marginTop: "24px" }}>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <input onChange={(e) => setTitle(e.target.value)} value={title} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
