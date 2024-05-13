import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import ListBox from "./components/ListBox";

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

  function deleteTodo(id) {
    setList((prevList) => [...prevList.filter((v) => v.id !== id)]);
  }

  function handleChangeTodoStatus(id) {
    const targetList = list.find((v) => v.id === id);
    setList((prevList) => {
      return [
        ...prevList.filter((v) => v.id !== id),
        { ...targetList, isDone: !targetList.isDone },
      ];
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
          <section style={{ height: 320 }}>
            <h2 style={{ fontSize: 32, textAlign: "center" }}>진행중인 목록</h2>
            <div
              style={{
                display: "flex",
                gap: 36,
                padding: "24px 16px 24px 16px",
                whiteSpace: "nowrap",
                overflowX: "auto",
              }}
            >
              {list.map(({ id, title, detail, isDone }) => {
                return (
                  !isDone && (
                    <ListBox key={id}>
                      <h3 style={{ fontSize: 24 }}>{title}</h3>
                      <p>{detail}</p>
                      <div style={{ display: "flex", gap: 12 }}>
                        <Button
                          value="완료"
                          onClick={() => handleChangeTodoStatus(id)}
                          color="#C1E1C1"
                        />
                        <Button
                          value="삭제하기"
                          onClick={() => deleteTodo(id)}
                          color="#FAA0A0"
                        />
                      </div>
                    </ListBox>
                  )
                );
              })}
            </div>
          </section>
          <section style={{ height: 320 }}>
            <h2 style={{ fontSize: 32, textAlign: "center" }}>완료 목록</h2>
            <div
              style={{
                display: "flex",
                gap: 36,
                padding: "24px 16px 24px 16px",
                whiteSpace: "nowrap",
                overflowX: "auto",
              }}
            >
              {list.map(({ id, title, detail, isDone }) => {
                return (
                  isDone && (
                    <ListBox key={id}>
                      <h3 style={{ fontSize: 24 }}>{title}</h3>
                      <p>{detail}</p>
                      <div style={{ display: "flex", gap: 12 }}>
                        <Button
                          value="되돌리기"
                          onClick={() => handleChangeTodoStatus(id)}
                          color="#FAA0A0"
                        />
                      </div>
                    </ListBox>
                  )
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
