import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/todoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #cfecd0, #ffc5ca)",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            minWidth: 800,
            maxWidth: 1220,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 40,
            paddingTop: 40,
          }}
        >
          <TodoForm setTodoList={setTodoList} />
          <TodoList workingList todoList={todoList} setTodoList={setTodoList} />
          <TodoList doneList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </main>
  );
}

export default App;
