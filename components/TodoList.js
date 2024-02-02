import Link from "next/link";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const editHandler=(data)=>{
    console.log(props);
    const editedData= {title:data,iscompleted: true} 
    console.log(editedData)
    props.onEditTodos(editedData);
  }
  const deleteHandler=(data)=>{
    const deletedData= {title:data} 
    props.onDelete(deletedData);
  }
  return (
    <>
      <div>
        <h1>Here is your Todo List</h1>
        {props.todos.map((todo) => (
          <TodoItem title={todo.title} onEditHandler={editHandler} ondeletHandler={deleteHandler}/>
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
