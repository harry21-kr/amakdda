import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

const TodoForm = ({ setList }) => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    detail: "",
    isDone: false,
  });

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

    if (!title || !detail) {
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
    <section style={{ display: "flex", justifyContent: "center", gap: 24 }}>
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
  );
};

export default TodoForm;
