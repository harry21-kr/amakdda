import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [pendingList, setPendingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function addList() {
    if (!title || !detail || pendingList.find((v) => v.title === title)) {
      return;
    }

    setPendingList((prevList) => [
      ...prevList,
      { title: title, detail: detail },
    ]);
    setTitle("");
    setDetail("");
  }

  function deleteList(idx) {
    setPendingList((prevList) =>
      prevList.filter((_, prevIdx) => prevIdx !== idx)
    );
  }

  function completeList(idx) {
    setPendingList((prevList) =>
      prevList.filter((_, prevIdx) => prevIdx !== idx)
    );
    setCompletedList((prevList) => [
      ...prevList,
      pendingList.find((_, prevIdx) => prevIdx === idx),
    ]);
  }

  return (
    <>
      <Header />
      <h1>Todo List</h1>
      <Input value={title} onChange={setTitle} placeholder="제목" />
      <Input value={detail} onChange={setDetail} placeholder="내용" />
      <Button value="추가" onClick={addList} />
      <section>
        <h2>진행중인 목록</h2>
        {pendingList.map(({ title, detail }, idx) => {
          return (
            <div key={title}>
              <p>{title}</p>
              <p>{detail}</p>
              <Button value="삭제하기" onClick={() => deleteList(idx)} />
              <Button value="완료" onClick={() => completeList(idx)} />
            </div>
          );
        })}
      </section>
      <section>
        <h2>완료 목록</h2>
        {completedList.map(({ title, detail }, idx) => {
          return (
            <div key={title}>
              <p>{title}</p>
              <p>{detail}</p>
              <Button value="삭제하기" onClick={() => deleteList(idx)} />
              <Button value="취소" onClick={() => completeList(idx)} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
