import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import ListBox from "./components/ListBox";

function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [workingList, setWorkingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function addWorkingList() {
    const isDuplicatedList =
      workingList.find((v) => v.title === title) ||
      completedList.find((v) => v.title === title);
    if (!title || !detail || isDuplicatedList) {
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
            <Input value={title} onChange={setTitle} placeholder="제목" />
            <Input value={detail} onChange={setDetail} placeholder="내용" />
            <Button value="추가" onClick={addWorkingList} color="#FDFD96" />
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
              {workingList.map(({ title, detail }, idx) => {
                return (
                  <ListBox key={title}>
                    <h3 style={{ fontSize: 24 }}>{title}</h3>
                    <p>{detail}</p>
                    <div style={{ display: "flex", gap: 12 }}>
                      <Button
                        value="완료"
                        onClick={() => addCompletedList(idx)}
                        color="#C1E1C1"
                      />
                      <Button
                        value="삭제하기"
                        onClick={() => deleteList(idx, "working")}
                        color="#FAA0A0"
                      />
                    </div>
                  </ListBox>
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
              {completedList.map(({ title, detail }, idx) => {
                return (
                  <ListBox key={title}>
                    <h3 style={{ fontSize: 24 }}>{title}</h3>
                    <p>{detail}</p>
                    <div style={{ display: "flex", gap: 12 }}>
                      <Button
                        value="되돌리기"
                        onClick={() => revertList(idx)}
                        color="#FAA0A0"
                      />
                    </div>
                  </ListBox>
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
