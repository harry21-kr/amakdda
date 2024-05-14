import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import ListSection from "./components/list/ListSection";

function App() {
  const [list, setList] = useState([]);

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
          <TodoForm setList={setList} />
          <ListSection workingList list={list} setList={setList} />
          <ListSection doneList list={list} setList={setList} />
        </div>
      </div>
    </main>
  );
}

export default App;
