import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import MountedUnmounted from "./hooks/F8/MountedUnmounted/MountedUnmounted";
import CounterF8 from "./hooks/F8/useState/CounterF8";
import Gift from "./hooks/F8/useState/RandomGift/Gift";
import TodoListF8 from "./hooks/F8/useState/TodoListF8/TodoListF8";
import CoursesCheckboxF8 from "./hooks/F8/useState/TwoWayBinding/CoursesCheckboxF8";
import CoursesRadioF8 from "./hooks/F8/useState/TwoWayBinding/CoursesRadioF8";
import FormSubmitF8 from "./hooks/F8/useState/TwoWayBinding/FormSubmitF8";
import ResetWithKey from "./hooks/ResetWithKey";
import ReactNodeReacElement from "./hooks/TypeScript/Children/ReactNodeReacElement";
import FormDOMEvents from "./hooks/TypeScript/DOMEvents/FormDOMEvents";
import MyButton from "./hooks/TypeScript/MyButton";
import FormUseBack from "./hooks/TypeScript/useCallback/FormUseCallback";
import GetTheme from "./hooks/TypeScript/useContext/GetTheme";
import CounterStateReducer from "./hooks/TypeScript/useReducer/CounterStateReducer";
import CountVite from "./hooks/useState/CountVite";
import Counter from "./hooks/useState/Counter";
import Form from "./hooks/useState/Form/Form";
import FormNestedObject from "./hooks/useState/Form/FormNestedObject";
import TaskApp from "./hooks/useState/List/TaskApp";
import StateCount from "./hooks/useState/StoringInformation/StateCount";
import TodoList from "./hooks/useState/TodoList";
import BucketList from "./hooks/useState/useImmer/BucketList";
import viteLogo from "/vite.svg";
import Content from "./hooks/F8/useEffect/Content";
import TimerFunc from "./hooks/F8/useEffect/TimerFunc";
import PreviewAvatar from "./hooks/F8/useEffect/PreviewAvatar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CountVite />
        <CounterF8 />
        <Counter />
        <div style={{ marginTop: "12px" }}>
          <Form />
          <FormNestedObject />
        </div>
        <div style={{ marginTop: "12px" }}>
          <TaskApp />
        </div>
        <BucketList />
        <TodoList />
        <ResetWithKey />
        <div style={{ marginTop: "12px" }}>
          <StateCount />
        </div>
        <MyButton title="I'm a disabled button" disabled={true} />
        <CounterStateReducer />
        <GetTheme />
        <div>
          <FormUseBack />
        </div>
        <div>
          <FormDOMEvents />
        </div>
        <div>
          <ReactNodeReacElement />
        </div>
        <Gift />
        <div>
          <FormSubmitF8 />
        </div>
        <div>
          <CoursesRadioF8 />
        </div>
        <div>
          <CoursesCheckboxF8 />
        </div>
        <div>
          <TodoListF8 />
        </div>
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show && (
            <div>
              <MountedUnmounted />
              <Content />
            </div>
          )}
        </div>
        <div>
          <TimerFunc />
        </div>
        <div>
          <PreviewAvatar />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
