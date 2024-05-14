import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList, workingList, doneList }) => {
  return (
    <section style={{ height: 320 }}>
      <h2 style={{ fontSize: 32, paddingLeft: 12 }}>
        {workingList &&
          `진행 목록 ( ${todoList.filter((v) => !v.isDone).length}개 )`}
        {doneList &&
          `완료 목록 ( ${todoList.filter((v) => v.isDone).length}개 )`}
      </h2>
      <div
        style={{
          display: "flex",
          gap: 36,
          padding: "24px 16px 24px 16px",
          overflowX: "scroll",
        }}
      >
        {todoList.map((todo) => {
          const { id, isDone } = todo;
          if (workingList && !isDone) {
            return (
              <TodoItem
                key={id}
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          } else if (doneList && isDone) {
            return (
              <TodoItem
                key={id}
                todo={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default TodoList;
