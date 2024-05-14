import { useState } from "react";
import Header from "./components/Header";
import ListSection from "./components/list/ListSection";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    detail: "",
    isDone: false,
  });
  const [list, setList] = useState([]);

  function handleChangeTitle(newTitle) {
    setTodo((prevTodo) => {
      return { ...prevTodo, title: newTitle };
    });
  }

  function handleChangeDetail(newDetail) {
    setTodo((prevTodo) => {
      return { ...prevTodo, detail: newDetail };
    });
  }

  function addTodo() {
    const { title, detail } = todo;
    const isDuplicatedTitle = list.find((prevList) => prevList.title === title);

    if (!title || !detail || isDuplicatedTitle) {
      return;
    }

    setList((prevList) => [...prevList, { ...todo, id: Date.now() }]);
    setTodo({
      id: 0,
      title: "",
      detail: "",
      isDone: false,
    });
  }

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
          <section
            style={{ display: "flex", justifyContent: "center", gap: 24 }}
          >
            <Input
              value={todo.title}
              onChange={handleChangeTitle}
              placeholder="제목"
            />
            <Input
              value={todo.detail}
              onChange={handleChangeDetail}
              placeholder="내용"
              width={500}
            />
            <Button value="추가" onClick={addTodo} color="#FDFD96" />
          </section>
          <ListSection workingList list={list} setList={setList} />
          <ListSection doneList list={list} setList={setList} />
        </div>
      </div>
    </main>
  );
}

export default App;
