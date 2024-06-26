import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const TodoForm = ({ setTodoList }) => {
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

  function handleAddTodo(e) {
    e.preventDefault();
    const { title, detail } = todo;

    if (!title || !detail) {
      return;
    }

    setTodoList((prevList) => [...prevList, { ...todo, id: Date.now() }]);
    setTodo({
      id: 0,
      title: "",
      detail: "",
      isDone: false,
    });
  }
  return (
    <form style={{ display: "flex", justifyContent: "center", gap: 24 }}>
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
      <Button
        type="submit"
        value="추가"
        onClick={(e) => handleAddTodo(e)}
        color="#FDFD96"
      />
    </form>
  );
};

export default TodoForm;
