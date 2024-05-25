import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import ContextUseReducer from "./hooks/F8/GlobalState/ContextUseReducer";
import MountedUnmounted from "./hooks/F8/MountedUnmounted/MountedUnmounted";
import CountMemoTest from "./hooks/F8/memo/CountMemoTest";
import FormUseMemo from "./hooks/F8/memo/FormUseMemo";
import CountCallback from "./hooks/F8/useCallback/CountCallback";
import ThemeContextApp from "./hooks/F8/useContext/ThemeContextApp";
import ContentTestRecap from "./hooks/F8/useContext/useContextRecap/ContentTestRecap";
import { ThemeProvider } from "./hooks/F8/useContext/useContextRecap/ThemeContext";
import Content from "./hooks/F8/useEffect/Content";
import FakeChatApp from "./hooks/F8/useEffect/FakeChatApp";
import PreviewAvatar from "./hooks/F8/useEffect/PreviewAvatar";
import TimerFunc from "./hooks/F8/useEffect/TimerFunc";
import UseLayoutEffect from "./hooks/F8/useLayoutEffect/UseLayoutEffect";
import CountUseReducer from "./hooks/F8/useReducer/CountUseReducer";
import TodoAppUseReducer from "./hooks/F8/useReducer/TodoAppUseReducer";
import Todo from "./hooks/F8/useReducer/useReducerRecap/Todo";
import CountDown from "./hooks/F8/useRef/CountDown";
import CounterF8 from "./hooks/F8/useState/CounterF8";
import Gift from "./hooks/F8/useState/RandomGift/Gift";
import TodoListF8 from "./hooks/F8/useState/TodoListF8/TodoListF8";
import CoursesCheckboxF8 from "./hooks/F8/useState/TwoWayBinding/CoursesCheckboxF8";
import CoursesRadioF8 from "./hooks/F8/useState/TwoWayBinding/CoursesRadioF8";
import FormSubmitF8 from "./hooks/F8/useState/TwoWayBinding/FormSubmitF8";
import ResetWithKey from "./hooks/ReactDev/ResetWithKey";
import ReactNodeReacElement from "./hooks/ReactDev/TypeScript/Children/ReactNodeReacElement";
import FormDOMEvents from "./hooks/ReactDev/TypeScript/DOMEvents/FormDOMEvents";
import MyButton from "./hooks/ReactDev/TypeScript/MyButton";
import FormUseBack from "./hooks/ReactDev/TypeScript/useCallback/FormUseCallback";
import GetTheme from "./hooks/ReactDev/TypeScript/useContext/GetTheme";
import CounterStateReducer from "./hooks/ReactDev/TypeScript/useReducer/CounterStateReducer";
import Chat from "./hooks/ReactDev/useEffect/ChatRoom";
import CountVite from "./hooks/ReactDev/useState/CountVite";
import Counter from "./hooks/ReactDev/useState/Counter";
import Form from "./hooks/ReactDev/useState/Form/Form";
import FormNestedObject from "./hooks/ReactDev/useState/Form/FormNestedObject";
import TaskApp from "./hooks/ReactDev/useState/List/TaskApp";
import StateCount from "./hooks/ReactDev/useState/StoringInformation/StateCount";
import TodoList from "./hooks/ReactDev/useState/TodoList";
import BucketList from "./hooks/ReactDev/useState/useImmer/BucketList";
import viteLogo from "/vite.svg";
import { StoreProvider } from "./store";
import UseImprerativeHandle from "./hooks/F8/HandleHook/UseImprerativeHandle";

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
              <FakeChatApp />
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
        <div>
          <UseLayoutEffect />
        </div>
        <div>
          <CountDown />
        </div>
        <div style={{ marginTop: "54px" }}>
          <Chat />
        </div>
        <div>
          <CountCallback />
        </div>
        <div>
          <CountMemoTest />
        </div>
        <div style={{ marginTop: "54px" }}>
          <FormUseMemo />
        </div>
        <div>
          <CountUseReducer />
        </div>
        <div>
          <TodoAppUseReducer />
          <Todo />
        </div>
        <div>
          <ThemeContextApp />
        </div>
        <ThemeProvider>
          <ContentTestRecap />
        </ThemeProvider>
        <StoreProvider>
          <ContextUseReducer />
        </StoreProvider>
        <div>
          <UseImprerativeHandle />
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
