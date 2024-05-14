import ListBox from "./ListBox";

const ListSection = ({ list, setList, workingList, doneList }) => {
  return (
    <section style={{ height: 320 }}>
      <h2 style={{ fontSize: 32, paddingLeft: 12 }}>
        {workingList &&
          `진행 목록 ( ${list.filter((v) => !v.isDone).length}개 )`}
        {doneList && `완료 목록 ( ${list.filter((v) => v.isDone).length}개 )`}
      </h2>
      <div
        style={{
          display: "flex",
          gap: 36,
          padding: "24px 16px 24px 16px",
          overflowX: "scroll",
        }}
      >
        {list.map((todo) => {
          const { id, isDone } = todo;
          if (workingList && !isDone) {
            return (
              <ListBox key={id} todo={todo} list={list} setList={setList} />
            );
          } else if (doneList && isDone) {
            return (
              <ListBox key={id} todo={todo} list={list} setList={setList} />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ListSection;
