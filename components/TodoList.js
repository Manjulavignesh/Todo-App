import Link from "next/link";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const editHandler=()=>{
    const editedData= {title:props.title} 
    props.onEditTodos(editedData);
  }
  return (
    <>
      <div>
        <h1>Here is your Todo List</h1>
        {props.todos.map((todo) => (
          <TodoItem title={todo.title} editHandler={editHandler} />
        ))}
        <button>
          <Link
            href="/addForm"
            style={{ textDecoration: "none", color: "black" }}
          >
            Add ToDo's
          </Link>
        </button>
      </div>
    </>
  );
};
export default TodoList;
