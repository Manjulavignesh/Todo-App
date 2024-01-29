import { useRef } from "react";
import { useRouter } from "next/router";
const AddtodoForm = (props) => {
  const router = useRouter();
  const todos = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const tododata = { title: todos.current.value, iscompleted: false };
    router.push("/" + "addForm");
    props.onAddTodos(tododata);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Enter Today's Activity</label>
      <input type="text" ref={todos} />
      <button>Submit</button>
    </form>
  );
};
export default AddtodoForm;
