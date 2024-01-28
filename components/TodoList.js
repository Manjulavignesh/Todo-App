import Link from "next/link";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  return (
    <>
      <div>
        <h1>Here is your Todo List</h1>
        {props.todos.map((todo)=>(<TodoItem data={todo}/>))}
        <button>
          <Link
            href="/addForm"
            style={{ textDecoration: "none", color: "black" }}
          >Add ToDo's
          </Link>
        </button>
      </div>
    </>
  );
};
export default TodoList;
