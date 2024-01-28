import { useRef, useState } from "react";
import TodoList from "./TodoList";
const AddtodoForm = (props) => {
    const todos=useRef();
    const [closeForm,setcloseForm]=useState(false);
    const submitHandler=(e)=>{
e.preventDefault();
const data=todos.current.value;
setcloseForm(true)

}
  return (
    <div>
    {!closeForm && (<form onSubmit={submitHandler}>
    <label>Enter Today's Activity</label>
      <input type="text" ref={todos}/>
      <button>Submit</button>
    </form>)}
    {closeForm && <TodoList/>}
    </div>
  );
};
export default AddtodoForm;
