const TodoItem = (props) => {
  return (
    <div>
      <input type="radio" onClick={props.editHandler}/>
      <h3 style={{ display: "inline-block" }}>{props.title}</h3>
    </div>
  );
};
export default TodoItem;
