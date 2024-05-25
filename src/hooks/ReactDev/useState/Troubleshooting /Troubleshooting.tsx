function Troubleshooting() {
  // Calling the set function does not change state in the running code:
  //   function handleClick() {
  //     console.log(count); // 0

  //     setCount(count + 1); // Request a re-render with 1
  //     console.log(count); // Still 0!

  //     setTimeout(() => {
  //       console.log(count); // Also 0!
  //     }, 5000);
  //   }

  // const nextCount = count + 1;
  // setCount(nextCount);

  // console.log(count);     // 0
  // console.log(nextCount); // 1

  //   I’ve updated the state, but the screen doesn’t update
  // obj.x = 10;  // 🚩 Wrong: mutating existing object
  // setObj(obj); // 🚩 Doesn't do anything

  // ✅ Correct: creating a new object
  //   setObj({
  //     ...obj,
  //     x: 10,
  //   });

  //   Too many re-renders
  // 🚩 Wrong: calls the handler during render
  //   return <button onClick={handleClick()}>Click me</button>;

  // ✅ Correct: passes down the event handler
  //   return <button onClick={handleClick}>Click me</button>;

  // ✅ Correct: passes down an inline function
  //   return <button onClick={(e) => handleClick(e)}>Click me</button>;

  //   My initializer or updater function runs twice
  //     function TodoList() {
  //   // This component function will run twice for every render.

  //   const [todos, setTodos] = useState(() => {
  //   // This initializer function will run twice during initialization.
  //     return createTodos();
  //   });

  //   function handleClick() {
  //     setTodos(prevTodos => {
  //   // This updater function will run twice for every click.
  //   return [...prevTodos, createTodo()];
  //     });
  //   }
  //   // ...

  //   setTodos(prevTodos => {
  //     // 🚩 Mistake: mutating state
  //     prevTodos.push(createTodo());
  //   });

  //   setTodos((prevTodos) => {
  //     // ✅ Correct: replacing with new state
  //     return [...prevTodos, createTodo()];
  //   });

  //   I’m trying to set state to a function, but it gets called instead
  // You can’t put a function into state like this:
  // const [fn, setFn] = useState(someFunction);

  // function handleClick() {
  //   setFn(someOtherFunction);
  // }

  //   Because you’re passing a function, React assumes that someFunction is an initializer function, and that someOtherFunction is an updater function, so it tries to call them and store the result. To actually store a function, you have to put () => before them in both cases. Then React will store the functions you pass.

  //   const [fn, setFn] = useState(() => someFunction);

  // function handleClick() {
  //   setFn(() => someOtherFunction);
  // }

  return <div></div>;
}

export default Troubleshooting;
