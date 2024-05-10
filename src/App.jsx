import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [workingList, setWorkingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function addWorkingList() {
    if (!title || !detail || workingList.find((v) => v.title === title)) {
      return;
    }

    setWorkingList((prevList) => [
      ...prevList,
      { title: title, detail: detail },
    ]);
    setTitle("");
    setDetail("");
  }

  function addCompletedList(idx) {
    const targetList = workingList.find((_, prevIdx) => prevIdx === idx);
    setWorkingList((prevList) =>
      prevList.filter((_, prevIdx) => prevIdx !== idx)
    );
    setCompletedList((prevList) => [...prevList, targetList]);
  }

  function deleteList(idx, type) {
    if (type === "working") {
      setWorkingList((prevList) =>
        prevList.filter((_, prevIdx) => prevIdx !== idx)
      );
    } else {
      setCompletedList((prevList) =>
        prevList.filter((_, prevIdx) => prevIdx !== idx)
      );
    }
  }

  function revertList(idx) {
    const targetList = completedList.find((_, prevIdx) => prevIdx === idx);
    setCompletedList((prevList) =>
      prevList.filter((_, prevIdx) => prevIdx !== idx)
    );
    setWorkingList((prevList) => [...prevList, targetList]);
  }

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: 1220, width: "100%" }}>
          <section>
            <Input value={title} onChange={setTitle} placeholder="제목" />
            <Input value={detail} onChange={setDetail} placeholder="내용" />
            <Button value="추가" onClick={addWorkingList} />
          </section>
          <section>
            <h2>진행중인 목록</h2>
            {workingList.map(({ title, detail }, idx) => {
              return (
                <div key={title}>
                  <p>{title}</p>
                  <p>{detail}</p>
                  <Button
                    value="삭제하기"
                    onClick={() => deleteList(idx, "working")}
                  />
                  <Button value="완료" onClick={() => addCompletedList(idx)} />
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
                  <Button
                    value="삭제하기"
                    onClick={() => deleteList(idx, "completed")}
                  />
                  <Button value="취소" onClick={() => revertList(idx)} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
