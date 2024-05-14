import Button from "../ui/Button";

const ListBox = ({ todo, list, setList }) => {
  const { id, title, detail, isDone } = todo;

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
    <div
      style={{
        width: 320,
        height: 200,
        borderRadius: 12,
        display: "flex",
        flexShrink: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 24,
        backgroundColor: "white",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h3 style={{ fontSize: 28 }}>{title}</h3>
      <p style={{ fontSize: 18 }}>{detail}</p>
      <div style={{ display: "flex", gap: 12 }}>
        {isDone ? (
          <Button
            value="되돌리기"
            onClick={() => handleChangeTodoStatus(id)}
            color="#FAA0A0"
          />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ListBox;
