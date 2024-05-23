import { useEffect, useState } from "react";

interface LessonType {
  id: number;
  name: string;
}

interface DetailType {
  lessonId: number;
  comment: string;
}

const lessons: LessonType[] = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS?",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

function FakeChatApp() {
  const [lessonId, setLessonId] = useState<number>(1);

  useEffect(() => {
    const handleComment = (detail: DetailType) => {
      console.log(detail);
    };

    const eventListener = (event: Event) => {
      const customEvent = event as CustomEvent<DetailType>;
      handleComment(customEvent.detail);
    };

    window.addEventListener(`lesson-${lessonId}`, eventListener);

    // Cleanup function
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, eventListener);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "#646cff" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FakeChatApp;
