import { useState } from "react";
import AddtodoForm from "./AddtodoForm";

const TodoList = () => {
  const [addTodo, setaddTodo] = useState(false);
  const onClickHandler = () => {
    setaddTodo(true);
  };
  return (
    <>
      {!addTodo && (
        <div>
          <h1>Here is your Todo List</h1>
          <button onClick={onClickHandler}>Add ToDo's</button>
        </div>
      )}
      {addTodo && <AddtodoForm />}
    </>
  );
};
export default TodoList;
